import { atom } from 'recoil'
import RECOIL_KEYS from '../recoil-keys'
import theme from '../../theme'
import tailwindConfig from '../../tailwind.config'

export type ThemeState = typeof tailwindConfig['theme']
export const themeStateAtom = atom<typeof tailwindConfig['theme']>({
  key: RECOIL_KEYS.theme,
  default: theme
})
