interface IconUpProps {
  color?: string;
  size?: number;
}

export default function IconUp({ color = "currentColor", size = 16 }: IconUpProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 12L3 7L4.4 5.6L8 9.2L11.6 5.6L13 7L8 12Z"
        fill={color}
      />
    </svg>
  );
}
