"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import MessagesContainer from "../components/messages-container";
import { act, Suspense, useState } from "react";
import { Fragment } from "@/generated/prisma";
import { ProjectHeader } from "../components/project-header";
import { FragmentWeb } from "../components/fragment-web";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2Icon, CrownIcon, EyeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileExplorer } from "@/components/file-explorer";
import { UserControl } from "@/components/user-control";
import { useAuth } from "@clerk/nextjs";

interface Props {
    projectId: string;
}

export const ProjectView = ({ projectId }: Props) => {
    const [activeFragment, setActiveFragment] = useState<Fragment | null>(null);
    const [tabState, setTabState] = useState<"preview" | "code">("preview")
    const { has } = useAuth();
    const hasProAccess = has?.({ plan: "pro" });

    return (
        <div className="h-screen ">
            <ResizablePanelGroup direction="horizontal" >
                <ResizablePanel
                    defaultSize={35}
                    minSize={20}
                    className="flex flex-col min-h-0">
                    <Suspense fallback={<div>Loading Project...</div>} >
                        <ProjectHeader projectId={projectId} />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <MessagesContainer
                            projectId={projectId}
                            activeFragment={activeFragment}
                            setActiveFragment={setActiveFragment} />
                    </Suspense>
                </ResizablePanel>
                <ResizableHandle className="hover:bg-primary transition-colors" />
                <ResizablePanel
                    defaultSize={65}
                    minSize={50}>
                    <Tabs
                        className="h-full gap-y-0"
                        defaultValue="preview"
                        value={tabState}
                        onValueChange={(value) => setTabState(value as "preview" | "code")}
                    >
                        <div className="w-full flex items-center justify-between border-b px-3 py-1.5">
                            <TabsList className="flex items-center gap-2 rounded-md border bg-muted/50 p-1">
                                <TabsTrigger
                                    value="preview"
                                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm"
                                >
                                    <EyeIcon className="w-4 h-4" />
                                    <span>Demo</span>
                                </TabsTrigger>
                                <TabsTrigger
                                    value="code"
                                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm"
                                >
                                    <Code2Icon className="w-4 h-4" />
                                    <span>Code</span>
                                </TabsTrigger>
                            </TabsList>
                            <div className="ml-auto flex items-center gap-x-2">
                                {!hasProAccess && (
                                    <Button asChild size="sm" variant="tertiary" className="flex items-center gap-1">
                                        <Link href="/pricing">
                                            <CrownIcon className="w-4 h-4" />
                                            <span>Upgrade</span>
                                        </Link>
                                    </Button>
                                )}
                                <UserControl showName={false} />
                            </div>
                        </div>

                        <TabsContent value="preview" className="p-3">
                            {activeFragment && <FragmentWeb data={activeFragment} />}
                        </TabsContent>

                        <TabsContent value="code" className="min-h-0">
                            {!!activeFragment?.files && (
                                <FileExplorer files={activeFragment.files as { [path: string]: string }} />
                            )}
                        </TabsContent>
                    </Tabs>

                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};