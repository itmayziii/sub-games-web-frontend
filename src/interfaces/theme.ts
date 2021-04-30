import { TailwindConfig as BaseTailwindConfig } from 'tailwindcss/tailwind-config'

export default interface TailwindConfig extends BaseTailwindConfig {
  theme: {
    colors: {
      primary: string
      secondary: string
    } & BaseTailwindConfig['theme']['colors']
  } & BaseTailwindConfig['theme']
}
