export const sizes = {
  xl: 1400,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 560,
}
export type Sizes = keyof typeof sizes

export const breakpoints = {
  sizes,
  minWidth: (size: Sizes) => {
    return `@media (min-width: ${sizes[size]}px)`
  },
  maxWidth: (size: Sizes) => {
    return `@media (max-width: ${sizes[size]}px)`
  },
}
