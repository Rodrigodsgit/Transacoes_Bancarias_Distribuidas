import { SVGAttributes } from "react"

interface AppleProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Apple(props:AppleProps) {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={22.9098} cy={22.6951} r={22.1951} stroke="#101820" />
      <g clipPath="url(#clip0_2_176)" fill="#A8A8A8">
        <path d="M27.815 10.402c-1.26.087-2.734.894-3.592 1.944-.783.953-1.428 2.369-1.176 3.744 1.377.043 2.8-.783 3.624-1.851.771-.994 1.355-2.401 1.144-3.837z" />
        <path d="M32.795 18.333c-1.21-1.517-2.91-2.398-4.517-2.398-2.12 0-3.017 1.015-4.49 1.015-1.519 0-2.673-1.012-4.506-1.012-1.802 0-3.72 1.1-4.935 2.983-1.71 2.651-1.417 7.635 1.353 11.88.992 1.519 2.315 3.227 4.047 3.241 1.541.015 1.976-.988 4.063-.998 2.088-.012 2.484 1.012 4.022.995 1.733-.013 3.13-1.906 4.121-3.425.71-1.088.975-1.637 1.526-2.866-4.008-1.526-4.651-7.227-.684-9.415z" />
      </g>
      <defs>
        <clipPath id="clip0_2_176">
          <path
            fill="#fff"
            transform="translate(11.562 10.402)"
            d="M0 0H23.6407V23.6407H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

