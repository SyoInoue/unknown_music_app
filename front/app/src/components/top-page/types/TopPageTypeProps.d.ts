export interface ContainerItemProps {
  number: number
  title: string
  text01: string
  text02: string
  text03: string
  image: JSX.Element
}

export interface ContainerProps {
  container: ContainerItemProps[]
}
