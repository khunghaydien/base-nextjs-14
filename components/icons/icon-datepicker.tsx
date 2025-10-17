import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconDatepicker: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...attributes}>
            <path d="M5.99998 0.666664V2H9.99998V0.666664H11.3333V2H14C14.3682 2 14.6666 2.29848 14.6666 2.66666V13.3333C14.6666 13.7015 14.3682 14 14 14H1.99998C1.63179 14 1.33331 13.7015 1.33331 13.3333V2.66666C1.33331 2.29848 1.63179 2 1.99998 2H4.66665V0.666664H5.99998ZM13.3333 6.66666H2.66665V12.6667H13.3333V6.66666ZM10.0236 7.424L10.9664 8.36686L7.66665 11.6667L5.30963 9.30966L6.25243 8.36686L7.66665 9.78106L10.0236 7.424ZM4.66665 3.33333H2.66665V5.33333H13.3333V3.33333H11.3333V4H9.99998V3.33333H5.99998V4H4.66665V3.33333Z" fill="black" />
        </svg>
    )
}

export default IconDatepicker