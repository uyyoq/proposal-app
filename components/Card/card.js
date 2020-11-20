import Label from "../Label/label";

const Card = (props) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl">
      <img className="w-full" src={props.card} />
      <div className="flex flex-col">
        <div className="">
          <Label discount={props.sale} />
        </div>
        <div className="">
          <p className="text-gray-700 px-3 pt-2 pb-1 text-sm">{props.menu}</p>
        </div>
        <div>
          <p className="text-red-700 px-3 pb-4 font-semibold text-base">{props.price}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;