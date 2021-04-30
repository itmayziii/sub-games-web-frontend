import { atom } from 'recoil'
import RECOIL_KEYS from '../recoil-keys'
import User from '../../interfaces/user'

export type UserState = User | null | undefined
export const userStateAtom = atom<UserState>({
  key: RECOIL_KEYS.user,
  default: undefined
})
