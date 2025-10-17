import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconOrder: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill='none' {...attributes}>
            <path d="M2.66667 3.33333H13.3333V2H2.66667V3.33333ZM13.3333 6H2.66667V4.66667H13.3333V6ZM2 7.33333H6.66667V8.66667H9.33333V7.33333H14V13.3333C14 13.7015 13.7015 14 13.3333 14H2.66667C2.29848 14 2 13.7015 2 13.3333V7.33333ZM10.6667 8.66667V10H5.33333V8.66667H3.33333V12.6667H12.6667V8.66667H10.6667Z" fill={color} />
        </svg>
    )
}

export default IconOrder