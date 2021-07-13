
const Card = (props) => {
  return (
    <div className="flex flex-col w-32 h-32 border-2 border-red-500 py-2 px-2 rounded-md items-center">
      <p className="font-bold text-sm text-red-500">{props.judul}</p>
      <img src={props.img} alt={props.judul} className="h-10 w-10 my-2"></img>
      <div>
        <p className="font-bold text-sm text-red-500">{props.jumlah}</p>
      </div>
    </div>
  );
};

export default Card