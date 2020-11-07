const { defaults } = require("autoprefixer")

const TextError = (props) => {
  return(
    <>
      <div className="text-red-600 text-xs mt-2">{props.errorMessage}</div>
    </>   
  )
}

export default TextError