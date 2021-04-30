import { atom } from 'recoil'
import RECOIL_KEYS from '../recoil-keys'
import BaseTailwindConfig from '../../interfaces/theme'
import theme from '../../theme'

export type ThemeState = BaseTailwindConfig['theme']
export const themeStateAtom = atom<BaseTailwindConfig['theme']>({
  key: RECOIL_KEYS.user,
  default: theme
})
