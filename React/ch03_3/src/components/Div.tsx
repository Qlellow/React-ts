import type { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'
import type { WidthHeightProps } from './WidthHeight'

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps & PropsWithChildren<WidthHeightProps>

//prettier-ignore
export const Div:FC<DivProps> = ({
  width, height, style:_style, ...props
}) => {
  const style = {..._style, width, height}
  return <div {...props} style={style} />
}
