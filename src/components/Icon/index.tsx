import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const PlusSquare = dynamic(() => import('./SVGs/plusSquare'))

const Icons = {
  'plus-square': PlusSquare
} as const

export type IconsNames = keyof typeof Icons

type IconProps = {
  name: IconsNames
  style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = ({ name, style }) => {
  const NewIcon = useMemo(() => Icons[name], [name])

  return <NewIcon style={style} />
}

export default Icon
