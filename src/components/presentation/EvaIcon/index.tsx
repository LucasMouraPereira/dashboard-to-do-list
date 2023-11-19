import Icon from 'react-eva-icons'

type EvaIconProps = {
  name: string
  size: 'small' | 'medium' | 'large' | 'xlarge'
  fill: string
  animation: {
    type: 'zoom' | 'pulse' | 'shake' | 'flip'
    hover: boolean
    Infinity: boolean
  }
}

export const EvaIcon = ({ name, size, fill, animation }: EvaIconProps) => {
  return <Icon name={name} size={size} fill={fill} animation={animation} />
}
