import { Skeleton } from "@/components/ui/skeleton";
import { ProjectHeaderSkeleton } from "../components/project-header-skeleton";
import { MessagesContainerSkeleton } from "../components/messages-container-skeleton";

export const ProjectViewSkeleton = () => {
    return (
        <div className="h-screen">
            <div className="flex h-full">
                {/* Left Panel */}
                <div className="w-[35%] flex flex-col min-h-0 border-r">
                    <ProjectHeaderSkeleton />
                    <MessagesContainerSkeleton />
                </div>
                
                {/* Right Panel */}
                <div className="flex-1 flex flex-col">
                    <div className="w-full flex items-center justify-between border-b px-3 py-1.5">
                        <Skeleton className="h-9 w-32" />
                        <Skeleton className="h-8 w-20" />
                    </div>
                    <div className="p-3 flex-1">
                        <Skeleton className="h-full w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
