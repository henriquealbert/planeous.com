import { rem, useMantineTheme } from '@mantine/core'

type PlaneousLogoProps = {
  size: number
  colors?: {
    background: string
    font: string
  }
}

export const PlaneousLogo = ({ size, colors }: PlaneousLogoProps) => {
  const theme = useMantineTheme()
  return (
    <svg
      width={rem(size)}
      height={rem(size)}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="250" cy="250" r="250" fill={colors?.background || theme.colors.brand[6]} />
      <path
        d="M148 363.92C153.827 363.667 158.64 362.907 162.44 361.64C166.493 360.373 169.533 357.46 171.56 352.9C173.84 348.34 174.98 340.993 174.98 330.86V185.32C174.98 178.48 175.107 171.893 175.36 165.56C175.867 159.227 176.247 154.413 176.5 151.12C172.447 151.373 167.38 151.627 161.3 151.88C155.22 151.88 150.787 152.007 148 152.26V123C165.987 122.747 183.973 122.62 201.96 122.62C219.947 122.62 237.933 122.493 255.92 122.24C278.213 121.987 297.593 124.9 314.06 130.98C330.78 137.06 343.573 146.433 352.44 159.1C361.56 171.767 365.867 188.233 365.36 208.5C365.107 218.633 362.7 228.64 358.14 238.52C353.58 248.147 346.867 257.013 338 265.12C329.133 272.973 317.987 279.433 304.56 284.5C291.133 289.567 275.427 292.353 257.44 292.86C251.867 293.113 246.927 293.24 242.62 293.24C238.567 293.24 234.387 293.113 230.08 292.86V326.3C230.08 333.393 229.953 340.107 229.7 346.44C229.447 352.773 229.067 357.587 228.56 360.88C231.347 360.627 234.893 360.5 239.2 360.5C243.507 360.247 247.687 360.12 251.74 360.12C256.047 359.867 259.087 359.74 260.86 359.74V389H148V363.92ZM230.08 264.36C232.867 264.613 235.653 264.867 238.44 265.12C241.227 265.373 244.14 265.5 247.18 265.5C261.113 265.5 272.387 263.22 281 258.66C289.867 253.847 296.327 247.007 300.38 238.14C304.433 229.02 306.46 218 306.46 205.08C306.46 192.413 304.687 182.28 301.14 174.68C297.847 167.08 293.54 161.507 288.22 157.96C282.9 154.16 277.327 151.753 271.5 150.74C265.673 149.473 260.353 148.84 255.54 148.84C250.22 148.84 245.66 149.473 241.86 150.74C238.06 152.007 235.147 154.793 233.12 159.1C231.093 163.407 230.08 169.993 230.08 178.86V264.36Z"
        fill={colors?.font || 'white'}
      />
    </svg>
  )
}