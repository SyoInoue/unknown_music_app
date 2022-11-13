export interface DialogProps {
  open: boolean
  close: () => void
}
export type MyComponentProps = {
  children: React.ReactNode
  title: string
}
