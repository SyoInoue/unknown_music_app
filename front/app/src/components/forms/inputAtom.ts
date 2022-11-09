import { atom } from 'recoil'
import InputProps from './inputProps'
//状態の管理。recoilのatomを使用。初期値。
export const inputState = atom<InputProps>({
  key: 'input',
  default: {
    name: '',
    email: '',
    text: '',
  },
})
