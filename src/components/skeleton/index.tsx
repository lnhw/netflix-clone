import { Skeleton } from "../ui/skeleton";
export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[228px] w-[129px] rounded-xl" />
        </div>
    );
}
export function SkeletonBillboard() {
    return (
        <div className="">

        </div>
    )
}