// Represents a grid square with a color

export default function GridSquare(props) {
  const classes = `grid-square color-${props.color}`
  return <div className={classes} />
}