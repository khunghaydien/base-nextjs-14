import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconAddress: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    fill = "none",
    ...attributes
}) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
            <path d="M5.25 6.41666C5.25 6.88079 5.43437 7.32591 5.76256 7.65409C6.09075 7.98228 6.53587 8.16666 7 8.16666C7.46413 8.16666 7.90925 7.98228 8.23744 7.65409C8.56563 7.32591 8.75 6.88079 8.75 6.41666C8.75 5.95253 8.56563 5.50741 8.23744 5.17922C7.90925 4.85103 7.46413 4.66666 7 4.66666C6.53587 4.66666 6.09075 4.85103 5.76256 5.17922C5.43437 5.50741 5.25 5.95253 5.25 6.41666Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill={fill} />
            <path d="M10.3 9.71641L7.82488 12.1915C7.60612 12.41 7.30955 12.5328 7.00033 12.5328C6.69112 12.5328 6.39455 12.41 6.17579 12.1915L3.70013 9.71641C3.04751 9.06376 2.60307 8.23224 2.42303 7.327C2.24298 6.42176 2.33541 5.48346 2.68863 4.63076C3.04184 3.77805 3.63998 3.04923 4.40741 2.53646C5.17483 2.02369 6.07707 1.75 7.00004 1.75C7.92301 1.75 8.82525 2.02369 9.59268 2.53646C10.3601 3.04923 10.9582 3.77805 11.3115 4.63076C11.6647 5.48346 11.7571 6.42176 11.5771 7.327C11.397 8.23224 10.9526 9.06376 10.3 9.71641Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill={fill} />
        </svg>

    )
}

export default IconAddress
