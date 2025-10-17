import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconDashboard: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" {...attributes}>
            <path d="M8.99996 17.3333C13.6023 17.3333 17.3333 13.6023 17.3333 9C17.3333 4.39762 13.6023 0.666664 8.99996 0.666664C4.39758 0.666664 0.666626 4.39762 0.666626 9C0.666626 13.6023 4.39758 17.3333 8.99996 17.3333ZM13.5475 6.88092L8.16663 12.2618L4.6607 8.75591L5.83922 7.57741L8.16663 9.90483L12.369 5.70241L13.5475 6.88092Z" fill="#008A22" />
        </svg>
    )
}

export default IconDashboard
