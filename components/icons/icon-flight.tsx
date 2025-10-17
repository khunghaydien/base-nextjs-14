import React from "react"

type IconProps = {
    color?: string
    size?: string | number
} & React.SVGAttributes<SVGElement>

const IconTicketHorirontal: React.FC<IconProps> = ({
    size = "16",
    color = "currentColor",
    ...attributes
}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...attributes}>
            <path d="M9.99992 7.39064H13.3333C13.6869 7.39064 14.026 7.53111 14.2761 7.78116C14.5261 8.03121 14.6666 8.37035 14.6666 8.72397C14.6666 9.07759 14.5261 9.41673 14.2761 9.66678C14.026 9.91683 13.6869 10.0573 13.3333 10.0573H3.33325L1.33325 6.0573H3.33325L4.66659 7.39064H6.66659L5.33325 2.72397H7.33325L9.99992 7.39064Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 14H14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default IconTicketHorirontal