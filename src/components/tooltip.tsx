import React from "react";
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
export function TooTtip({
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    className,
    ...props
}: {
    children: React.ReactNode;
    content: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    className?: string;
    onOpenChange?: (open: boolean) => void;
}) {
    return (
        <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
            <TooltipPrimitive.Trigger asChild>
                {children}
            </TooltipPrimitive.Trigger>
            <TooltipPrimitive.Content className={`${className} bg-white text-xs text-pretty rounded-lg shadow-md cursor-pointer `} side="top" align="center"{...props}>
                {content}
                <TooltipPrimitive.Arrow width={11} className="fill-white" height={5} />
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
    );
}