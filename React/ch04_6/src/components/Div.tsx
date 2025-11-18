import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type {WidthHeight} from './WidthHeight'
import type {LeftRightTopBottom} from './LeftRightTopBottom'
import type {MinMaxWidthHeights} from './MinMaxWidthHeights'

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeights & {
    src?: string
  }

// prettier-ignore
export const Div:FC<DivProps> = ({
width, height, src, style:_style, className:_className,
left, right, top, bottom,
minWidth, maxWidth, minHeight, maxHeight,
...props
}) => {
const style = {
..._style, width, height, backgroundImage: src && `url(${src})`,
left, right, top, bottom,
minWidth, maxWidth, minHeight, maxHeight,
}
const className = ['box-border', src && 'bg-gray-300', _className].join(' ')
return <div {...props} style={style} className={className}/>
}
