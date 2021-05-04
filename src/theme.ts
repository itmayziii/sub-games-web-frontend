import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config'
import { createMuiTheme } from '@material-ui/core/styles'

const tailConfig = resolveConfig(tailwindConfig as any) as unknown as typeof tailwindConfig

export const materialTheme = createMuiTheme({
  palette: {
    primary: { main: tailConfig.theme.colors.primary.DEFAULT },
    secondary: { main: tailConfig.theme.colors.secondary.DEFAULT }
  }
})

export default tailConfig.theme
