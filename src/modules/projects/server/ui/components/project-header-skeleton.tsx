import { Skeleton } from "@/components/ui/skeleton";

export const ProjectHeaderSkeleton = () => {
    return (
        <header className="p-2 flex justify-between items-center border-b">
            <div className="flex items-center gap-2">
                <Skeleton className="w-[18px] h-[18px]" />
                <Skeleton className="h-5 w-32" />
            </div>
        </header>
    );
}
