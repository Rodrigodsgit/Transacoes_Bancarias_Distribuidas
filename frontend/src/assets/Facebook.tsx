import { SVGAttributes } from "react"

interface FacebookProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Facebook(props:FacebookProps) {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={23.1245} cy={22.6951} r={22.1951} stroke="#101820" />
      <g clipPath="url(#clip0_2_185)">
        <path
          d="M25.03 34.988V23.774h3.762l.565-4.372H25.03v-2.79c0-1.266.35-2.128 2.166-2.128h2.313v-3.911c-.4-.052-1.773-.171-3.37-.171-3.338 0-5.623 2.037-5.623 5.777v3.223h-3.774v4.372h3.774v11.214h4.514z"
          fill="#2B44DA"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_185">
          <path
            fill="#fff"
            transform="translate(10.832 10.402)"
            d="M0 0H24.5863V24.5863H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

