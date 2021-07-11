import React from "react";

const mati = "/icon/mati.svg";
const dirawat = "/icon/dirawat.svg";
const positif = "/icon/positif.svg";
const sembuh = "/icon/sembuh.svg";

const data = [
  {
    judul: "Meninggal",
    jumlah: "12121222",
    img: mati,
  },
  {
    judul: "Positif",
    jumlah: "12122",
    img: positif,
  },

  // ..... dan seterusnya
];

const Card = ({ judul, jumlah, img }) => {
  return (
    <div className="flex flex-col w-32 h-32 border-2 border-red-500 py-2 px-2 rounded-md items-center">
      <p className="font-bold text-sm text-red-500">{judul}</p>
      <img src={img} alt={judul} className="h-10 w-10 my-2"></img>
      <div>
        <p className="font-bold text-sm text-red-500">{jumlah}</p>
      </div>
    </div>
  );
};

const Covid19 = () => {
  return (
    <React.Fragment>
      <h1 className="font-bold text-lg mt-5 text-yellow-500">
        Indonesia Corona Live Data
      </h1>

      <div className="flex flex-wrap mt-10 gap-x-3 gap-y-3">
        {data.map((x, i) => {
          return <Card key={i} jumlah={x.jumlah} judul={x.judul} img={x.img} />;
        })}
      </div>

      <p className="text-sm mt-3 text-gray-600">Update terakhir:</p>
    </React.Fragment>
  );
};

export default Covid19;
