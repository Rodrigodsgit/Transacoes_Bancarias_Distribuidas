import { SVGAttributes } from "react"

interface GoogleProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Google(props:GoogleProps) {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={22.6951} cy={22.6951} r={22.1951} stroke="#101820" />
      <g clipPath="url(#clip0_2_167)">
        <path
          d="M34.096 20.167h-9.643a.77.77 0 00-.77.77v3.08c0 .427.344.772.77.772h5.43a7.249 7.249 0 01-3.12 3.656l2.315 4.009c3.715-2.149 5.91-5.918 5.91-10.137 0-.6-.044-1.03-.132-1.514a.774.774 0 00-.76-.636z"
          fill="#167EE6"
        />
        <path
          d="M23.168 29.417a7.194 7.194 0 01-6.224-3.6l-4.008 2.31a11.805 11.805 0 0010.232 5.916 11.8 11.8 0 005.91-1.584v-.005l-2.316-4.009a7.141 7.141 0 01-3.594.972z"
          fill="#12B347"
        />
        <path
          d="M29.08 32.46v-.006l-2.316-4.009a7.141 7.141 0 01-3.595.972v4.626a11.8 11.8 0 005.91-1.584z"
          fill="#0F993E"
        />
        <path
          d="M15.974 22.222c0-1.31.357-2.535.971-3.594l-4.008-2.31a11.698 11.698 0 00-1.588 5.904c0 2.15.577 4.168 1.588 5.905l4.008-2.31a7.14 7.14 0 01-.971-3.595z"
          fill="#FFD500"
        />
        <path
          d="M23.168 15.027c1.733 0 3.324.616 4.568 1.64a.768.768 0 001.033-.046l2.183-2.183a.777.777 0 00-.045-1.136 11.785 11.785 0 00-7.74-2.9c-4.37 0-8.191 2.38-10.23 5.916l4.007 2.31a7.194 7.194 0 016.224-3.6z"
          fill="#FE724C"
        />
        <path
          d="M27.737 16.667a.768.768 0 001.034-.046l2.182-2.183a.777.777 0 00-.044-1.136 11.785 11.785 0 00-7.74-2.9v4.625c1.733 0 3.325.616 4.568 1.64z"
          fill="#D93F21"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_167">
          <path
            fill="#fff"
            transform="translate(11.348 10.402)"
            d="M0 0H23.6407V23.6407H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
