import React, { Children } from "react";
import * as HoverCard from '@radix-ui/react-hover-card';
export default function Hover({
    children,
    open,
    content,
    onOpenChange,
    className,
    side = "top",
    sideOffset = 5,
}: {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    sideOffset?: number;
    className?: string;
}) {
    return (
        <HoverCard.Root onOpenChange={onOpenChange}>
            <HoverCard.Trigger asChild>
                {children}
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content className={className} side={side} sideOffset={sideOffset} >
                    {content}
                    <HoverCard.Arrow className="fill-white" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    );
}