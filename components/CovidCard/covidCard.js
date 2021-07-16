
const Card = (props) => {
  return (
    <div className="flex flex-col w-32 h-36 border-2 border-gray-800 py-2 px-2 rounded-md items-center">
      <p className="font-bold text-sm text-gray-800">{props.judul}</p>
      <img src={props.img} alt={props.judul} className="h-10 w-10 my-2"></img>
      <div>
        <p className="font-bold text-sm text-gray-800">{props.jumlah}</p>
        <p className="text-sm font-bold text-gray-800 text-center my-1">Jiwa</p>
      </div>
    </div>
  );
};

export default Card