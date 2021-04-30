import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config'
import { createMuiTheme } from '@material-ui/core/styles'
import Theme from './interfaces/theme'

const tailConfig = resolveConfig(tailwindConfig as any) as Theme

export const materialTheme = createMuiTheme({
  palette: {
    primary: { main: tailConfig.theme.colors.primary },
    secondary: { main: tailConfig.theme.colors.secondary }
  }
})

export default tailConfig.theme
