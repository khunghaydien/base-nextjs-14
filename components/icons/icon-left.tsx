

import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconLeft: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
            <path d="M5.4142 6.18199L7.8891 8.65684L7.182 9.36394L4 6.18199L7.182 3L7.8891 3.7071L5.4142 6.18199Z" fill="black" />
        </svg>
    )
}

export default IconLeft