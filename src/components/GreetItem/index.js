const GreetItem = props => {
  const {details, active} = props
  console.log(active !== details.buttonText)

  return (
    <li className={`${active !== details.buttonText && 'd-none'}`}>
      <img
        className="greetImage"
        src={details.imageUrl}
        alt={details.imageAltText}
      />
    </li>
  )
}

export default GreetItem
