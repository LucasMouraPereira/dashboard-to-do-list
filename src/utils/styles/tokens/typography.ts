import { Roboto_Mono } from 'next/font/google'

const fallback =
  '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-mono',
})

export const typography = {
  family: {
    primary: `var(--font-roboto-mono), ${fallback}`,
  },
}
