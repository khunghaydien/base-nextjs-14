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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill='none' {...attributes}>
            <path d="M12.6667 14H3.33341C2.96523 14 2.66675 13.7015 2.66675 13.3333V7.33333H0.666748L7.55161 1.07433C7.80588 0.843164 8.19428 0.843164 8.44855 1.07433L15.3334 7.33333H13.3334V13.3333C13.3334 13.7015 13.0349 14 12.6667 14ZM4.00008 12.6667H12.0001V6.10496L8.00008 2.4686L4.00008 6.10496V12.6667ZM8.00008 10C7.07961 10 6.33341 9.2538 6.33341 8.33333C6.33341 7.41286 7.07961 6.66665 8.00008 6.66665C8.92055 6.66665 9.66675 7.41286 9.66675 8.33333C9.66675 9.2538 8.92055 10 8.00008 10Z" fill={color} />
        </svg>
    )
}

export default IconDashboard