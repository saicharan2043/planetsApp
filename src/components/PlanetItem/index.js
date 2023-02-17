// Write your code here
import './index.css'

const PlaneItem = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails

  return (
    <div className="item-container">
      <img src={imageUrl} className="img" alt={`planet ${name}`} />
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlaneItem
