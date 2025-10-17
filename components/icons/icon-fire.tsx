import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconFire: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
            <path d="M7 7.00001C8.16667 5.27334 7 2.91668 6.41667 2.33334C6.41667 4.10551 5.38242 5.09893 4.66667 5.83334C3.9515 6.56834 3.5 7.72334 3.5 8.75001C3.5 9.67827 3.86875 10.5685 4.52513 11.2249C5.1815 11.8813 6.07174 12.25 7 12.25C7.92826 12.25 8.8185 11.8813 9.47487 11.2249C10.1313 10.5685 10.5 9.67827 10.5 8.75001C10.5 7.85634 9.884 6.45168 9.33333 5.83334C8.2915 7.58334 7.70525 7.58334 7 7.00001Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default IconFire
