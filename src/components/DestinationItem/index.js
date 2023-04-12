import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="item-card">
      <img src={imgUrl} alt={name} className="img" />
      <p className="name"> {name} </p>
    </li>
  )
}
export default DestinationItem
