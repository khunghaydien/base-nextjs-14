
import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconAddressFill: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    fill = "#008A22",
    ...attributes
}) => {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...attributes}>
            <path d="M15.3033 14.5705L10 19.8738L4.6967 14.5705C1.76777 11.6415 1.76777 6.89285 4.6967 3.96391C7.62563 1.03498 12.3743 1.03498 15.3033 3.96391C18.2323 6.89285 18.2323 11.6415 15.3033 14.5705ZM10 12.6005C11.8409 12.6005 13.3333 11.1081 13.3333 9.26721C13.3333 7.42626 11.8409 5.93388 10 5.93388C8.15905 5.93388 6.66667 7.42626 6.66667 9.26721C6.66667 11.1081 8.15905 12.6005 10 12.6005ZM10 10.9339C9.0795 10.9339 8.33333 10.1877 8.33333 9.26721C8.33333 8.34674 9.0795 7.60055 10 7.60055C10.9205 7.60055 11.6667 8.34674 11.6667 9.26721C11.6667 10.1877 10.9205 10.9339 10 10.9339Z" fill={fill} />
        </svg>
    )
}

export default IconAddressFill
