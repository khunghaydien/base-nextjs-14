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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...attributes}>
            <g clipPath="url(#clip0_62_1102)">
                <path d="M2.66675 3.99999C2.66675 3.64637 2.80722 3.30723 3.05727 3.05718C3.30732 2.80713 3.64646 2.66666 4.00008 2.66666H12.0001C12.3537 2.66666 12.6928 2.80713 12.9429 3.05718C13.1929 3.30723 13.3334 3.64637 13.3334 3.99999V12C13.3334 12.3536 13.1929 12.6927 12.9429 12.9428C12.6928 13.1928 12.3537 13.3333 12.0001 13.3333H4.00008C3.64646 13.3333 3.30732 13.1928 3.05727 12.9428C2.80722 12.6927 2.66675 12.3536 2.66675 12V3.99999Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 2.66666V13.3333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.0001 6.66666L8.66675 7.99999L10.0001 9.33332" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_62_1102">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default IconDashboard