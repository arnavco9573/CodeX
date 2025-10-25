"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ChevronDown, ChevronLeftIcon, SunMoonIcon } from "lucide-react";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useTheme } from "next-themes";

interface Props {
    projectId: string;
}

export const ProjectHeader = ({ projectId }: Props) => {
    const trpc = useTRPC();
    const { data: project } = useSuspenseQuery(trpc.projects.getOne.queryOptions({ id: projectId }))

    const { setTheme, theme } = useTheme();

    return (
        <header className="p-2 flex justify-between items-center border-b">
            <DropdownMenu >
                <DropdownMenuTrigger asChild >
                    <Button
                        variant="ghost"
                        size="sm"
                        className="focus-visible:ring-0 hover:bg-transparent hover:opacity-75 transition-opacity pl-2! ">
                        <Image src="/logo.svg" width={18} height={18} alt="Codex" />
                        <span className="text-sm font-medium">{project?.name}</span>
                        <ChevronDown />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover! dark:bg-popover! rounded-lg pl-2! p-1 ml-2" side="bottom" align="start">
                    <DropdownMenuItem asChild>
                        <Link href="/">
                            <ChevronLeftIcon />
                            <span>Go to Dashboard</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger className="gap-2">
                            <SunMoonIcon className="size-4 text-muted-foreground" />
                            <span>Apperance</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                                    <DropdownMenuRadioItem value="light">
                                        <span>light</span>
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="dark">
                                        <span>dark</span>
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="system">
                                        <span>system</span>
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}