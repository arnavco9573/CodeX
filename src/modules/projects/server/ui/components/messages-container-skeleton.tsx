import { Skeleton } from "@/components/ui/skeleton";

export const MessagesContainerSkeleton = () => {
    return (
        <div className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto">
                <div className="pt-2 pr-1">
                    {/* User message skeleton */}
                    <div className="flex justify-end pb-4 pr-2 pl-10 pt-1">
                        <Skeleton className="h-16 w-48 rounded-lg" />
                    </div>
                    
                    {/* Assistant message skeleton 1 */}
                    <div className="flex flex-col group px-2 pb-4">
                        <div className="flex items-center gap-2 pl-2 mb-2">
                            <Skeleton className="w-[18px] h-[18px]" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                        <div className="pl-8 flex flex-col gap-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-4/5" />
                        </div>
                    </div>

                    {/* Assistant message skeleton 2 */}
                    <div className="flex flex-col group px-2 pb-4">
                        <div className="flex items-center gap-2 pl-2 mb-2">
                            <Skeleton className="w-[18px] h-[18px]" />
                            <Skeleton className="h-4 w-16" />
                        </div>
                        <div className="pl-8 flex flex-col gap-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-20 w-64 rounded-lg" />
                        </div>
                    </div>

                    {/* User message skeleton 2 */}
                    <div className="flex justify-end pb-4 pr-2 pl-10 pt-1">
                        <Skeleton className="h-12 w-56 rounded-lg" />
                    </div>
                </div>
            </div>
            <div className="relative p-3 pt-1">
                <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-background/70 pointer-events-none "></div>
                <Skeleton className="h-10 w-full rounded-lg" />
            </div>
        </div>
    );
}
