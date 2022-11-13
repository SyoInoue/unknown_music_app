import { atom } from 'recoil'
import InputTypeProps from './types/InputTypeProps'
//状態の管理。recoilのatomを使用。初期値。
export const inputState = atom<InputTypeProps>({
  key: 'input',
  default: {
    name: '',
    email: '',
    text: '',
  },
})
