import { useColorToken } from '../../utils/hooks/useColorToken'

const PRIMARY_COLOR = 'base-color.primary.main'
const SECONDARY_COLOR = 'base-color.secondary.main'

const CONVERSION_RATE = 1.875

export const Logo = ({ width = 75 }) => {
  const primaryColor = useColorToken(PRIMARY_COLOR)
  const secondaryColor = useColorToken(SECONDARY_COLOR)

  return (
    <div role="figure">
      <svg
        width={width}
        height={width / CONVERSION_RATE}
        viewBox="0 0 75 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M62.499 20a2.5 2.5 0 0 0-2.5 2.5v10a7.5 7.5 0 1 0 15 0v-10a2.5 2.5 0 1 0-5 0v10a2.5 2.5 0 0 1-5 0v-10a2.5 2.5 0 0 0-2.5-2.5Z"
          fill={secondaryColor}
        />
        <path
          d="M56.03 20.477a2.5 2.5 0 1 1 2.94 4.045l-6.187 4.495 6.514 6.746a2.5 2.5 0 0 1-3.596 3.474l-5.702-5.904V37.5a2.5 2.5 0 1 1-5 0v-15a2.5 2.5 0 0 1 5 0v2.36l6.032-4.383Z"
          fill={primaryColor}
        />
        <path
          d="M41.03 20.477a2.5 2.5 0 1 1 2.94 4.045l-6.187 4.495 6.514 6.746a2.5 2.5 0 0 1-3.596 3.474l-5.702-5.904V37.5a2.5 2.5 0 1 1-5 0v-15a2.5 2.5 0 0 1 5 0v2.36l6.032-4.383Z"
          fill={primaryColor}
        />
        <path
          d="M17.5 20a2.5 2.5 0 0 0-2.5 2.5v10a7.5 7.5 0 1 0 15 0v-10a2.5 2.5 0 0 0-5 0v10a2.5 2.5 0 0 1-5 0v-10a2.5 2.5 0 0 0-2.5-2.5Z"
          fill={secondaryColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 22.5A2.5 2.5 0 0 1 2.5 20h4.808a5.77 5.77 0 0 1 5.363 7.898 6.923 6.923 0 0 1-4.715 12.1L7.886 40H2.5A2.5 2.5 0 0 1 0 37.5v-15Zm5 2.884c0-.212.172-.384.385-.384h1.153a.77.77 0 0 1 0 1.538H5.385A.385.385 0 0 1 5 26.154v-.77Zm.385 6.154a.385.385 0 0 0-.385.385v2.692c0 .212.172.385.385.385h2.5a1.73 1.73 0 0 0 0-3.462h-2.5Z"
          fill={primaryColor}
        />
        <path
          d="M62.499 0a2.5 2.5 0 0 0-2.5 2.5v10a7.5 7.5 0 1 0 15 0v-10a2.5 2.5 0 1 0-5 0v10a2.5 2.5 0 0 1-5 0v-10a2.5 2.5 0 0 0-2.5-2.5Z"
          fill={primaryColor}
        />
        <path
          d="M56.03.478a2.5 2.5 0 1 1 2.94 4.045l-6.187 4.495 6.514 6.745a2.5 2.5 0 1 1-3.596 3.474l-5.702-5.904V17.5a2.5 2.5 0 1 1-5 0v-15a2.5 2.5 0 0 1 5 0v2.36L56.031.478Z"
          fill={secondaryColor}
        />
        <path
          d="M41.03.478a2.5 2.5 0 1 1 2.94 4.045l-6.187 4.495 6.514 6.745a2.5 2.5 0 1 1-3.596 3.474l-5.702-5.904V17.5a2.5 2.5 0 1 1-5 0v-15a2.5 2.5 0 0 1 5 0v2.36L41.031.478Z"
          fill={secondaryColor}
        />
        <path
          d="M17.5 0A2.5 2.5 0 0 0 15 2.5v10a7.5 7.5 0 1 0 15 0v-10a2.5 2.5 0 0 0-5 0v10a2.5 2.5 0 0 1-5 0v-10A2.5 2.5 0 0 0 17.5 0Z"
          fill={primaryColor}
        />
        <path
          d="M11.031.478a2.5 2.5 0 0 1 2.939 4.045L7.783 9.018l6.515 6.745a2.5 2.5 0 1 1-3.597 3.474L5 13.333V17.5a2.5 2.5 0 1 1-5 0v-15a2.5 2.5 0 0 1 5 0v2.36L11.03.478Z"
          fill={secondaryColor}
        />
      </svg>
    </div>
  )
}
