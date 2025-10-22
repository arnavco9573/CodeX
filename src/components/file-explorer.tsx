import { Fragment, useCallback, useMemo, useState } from "react";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "./ui/resizable";
import { Hint } from "./hint";
import { Button } from "./ui/button";
import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { CodeView } from "./code-view";
import { convertFilesToTreeItems } from "@/lib/utils";
import { TreeView } from "./tree-view";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

type FileCollection = { [path: string]: string };

function getlanguageFromExtension(filename: string): string {
    const extension = filename.split(".").pop()?.toLowerCase();
    return extension ? extension : "text";
}

interface FileBreadcrumbProps {
    filePath: string;
}

const FileBreadcrumb = ({ filePath }: FileBreadcrumbProps) => {
    const pathSegments = filePath.split("/")
    const maxSegments = 3
        ;
    const renderBreadcrumbItems = () => {
        if (pathSegments.length <= maxSegments) {
            return pathSegments.map((segment, index) => {
                const isLast = index === pathSegments.length - 1;

                return (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            {isLast ? (
                                <BreadcrumbPage>
                                    {segment}
                                </BreadcrumbPage>
                            ) : (
                                <span className="text-muted-foreground">
                                    {segment}
                                </span>
                            )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                    </Fragment>
                )
            })
        } else {
            const firstSegment = pathSegments[0];
            const lastSegment = pathSegments[pathSegments.length - 1];

            return (
                <>
                    <BreadcrumbItem>
                        <span className="text-muted-foreground">{firstSegment}</span>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium">
                                {lastSegment}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbItem>

                </>
            )
        }
    }

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {renderBreadcrumbItems()}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

interface FileExplorerProps {
    files: FileCollection;
}

export const FileExplorer = ({ files }: FileExplorerProps) => {
    const [copied, setCopied] = useState(false);
    const [selectedFile, setSelectedFile] = useState<string | null>(() => {
        const fileKeys = Object.keys(files);
        return fileKeys.length > 0 ? fileKeys[0] : null;
    });

    const treeData = useMemo(() => {
        return convertFilesToTreeItems(files);
    }, [files]);

    const handleFileSelect = useCallback(
        (filePath: string) => {
            // console.log({filePath})
            if (files[filePath]) {
                setSelectedFile(filePath);
            }
        },
        [files]
    );

    const handleCopy = useCallback(() => {
        if (selectedFile) {
            navigator.clipboard.writeText(files[selectedFile]);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [selectedFile, files])

    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={25} minSize={30} className="bg-sidebar">
                <TreeView
                    data={treeData}
                    value={selectedFile}
                    onSelect={handleFileSelect}
                />
            </ResizablePanel>
            <ResizableHandle className="hover:bg-primary transition-colors" />
            <ResizablePanel defaultSize={75} minSize={40} className="bg-sidebar">
                {selectedFile && files[selectedFile] ? (
                    <div className="h-full w-full flex flex-col">
                        <div className="border-b bg-sidebar px-4 py-2 flex justify-between items-center gap-x-2">
                            <FileBreadcrumb filePath={selectedFile} />
                            <Hint text="Copy to Clipboard" side="bottom">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="ml-auto"
                                    onClick={handleCopy}
                                    disabled={copied}
                                >
                                    {copied ? <CopyCheckIcon /> : <CopyIcon />}
                                </Button>
                            </Hint>
                        </div>
                        <div className="flex-1 overflow-auto">
                            <CodeView
                                code={files[selectedFile]}
                                language={getlanguageFromExtension(selectedFile)}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        <p>Select a file to view it&apos: s content</p>
                    </div>
                )}
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}