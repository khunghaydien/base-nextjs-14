
import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconFilter: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
            <path d="M3.66739 3.33333H12.3341C12.4301 3.367 12.5171 3.42221 12.5885 3.49471C12.6599 3.56721 12.7137 3.65509 12.7459 3.75161C12.7781 3.84814 12.7877 3.95074 12.7741 4.05158C12.7605 4.15241 12.724 4.24879 12.6674 4.33333L9.33405 8V12.6667L6.66739 10.6667V8L3.33405 4.33333C3.27745 4.24879 3.24094 4.15241 3.22734 4.05158C3.21373 3.95074 3.22339 3.84814 3.25556 3.75161C3.28774 3.65509 3.34158 3.56721 3.41296 3.49471C3.48434 3.42221 3.57137 3.367 3.66739 3.33333Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default IconFilter