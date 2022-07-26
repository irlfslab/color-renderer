import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Blue'
},
{
  hex: '#FF88DC',
  name: 'Pink'
},
{
  hex: '#80FF72',
  name: 'Green'
},
{
  hex: '#FF6600',
  name: 'Orange'
}]

export default function ColorRenderer () {
  return colors.map(color =>
    <Color
      key={color.hex}
      name={color.name}
      hex={color.hex}
    />
  )
}