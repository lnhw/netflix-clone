// Icon.tsx
import React from 'react';
import * as Icons from 'lucide-react';

interface IconProps {
    name: keyof typeof Icons;
    size?: number;
    color?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className }) => {
    const IconComponent = Icons[name] as React.ElementType;
    if (!IconComponent) {
        return null; // or some fallback UI
    }
    return (
        <IconComponent size={size} color={color} className={className} />
    )
};
export default Icon;
