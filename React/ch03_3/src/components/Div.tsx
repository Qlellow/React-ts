import type { FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react'
import type { WidthHeightProps } from './WidthHeight'

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeightProps> & {
    src?: string
  }

//prettier-ignore
export const Div:FC<DivProps> = ({
  width, height, src, style:_style, ...props
}) => {
  const style = {..._style, width, height, backgroundImage: src && `url(${src})`}
  return <div {...props} style={style} />
}
