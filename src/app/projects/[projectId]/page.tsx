import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ProjectView } from '@/modules/projects/server/ui/views/project-view';
import React, { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary"
import { ProjectViewSkeleton } from '@/modules/projects/server/ui/views/project-view-skeleton';
interface Props {
    params: Promise<{
        projectId: string
    }>
}
export default async function page({ params }: Props) {
    const { projectId } = await params;

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.messages.getMany.queryOptions({
        projectId,
    }));
    void queryClient.prefetchQuery(trpc.projects.getOne.queryOptions({
        id: projectId,
    }));

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={<p>Error</p>} >
                <Suspense fallback={<ProjectViewSkeleton />}>
                    <ProjectView projectId={projectId} />
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    )
}
