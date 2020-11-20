const Label = (props) => {
  return (
    <div className="flex px-1 py-1 text-red-700">
      <div className="rounded-full px-3 py-1 font-semibold bg-yellow-400">{props.discount}</div>
    </div>
  )
}

export default Label;