import React from "react"


const mati = "/icon/mati.svg"
const dirawat = "/icon/dirawat.svg"
const positif = "/icon/positif.svg"
const sembuh = "/icon/sembuh.svg"

const Covid19 = () => {
  return (
    <React.Fragment>
      <h1 className="font-bold text-lg mt-5 text-yellow-500">Indonesia Corona Live Data</h1>
    
     
      <div className="flex flex-wrap mt-10 gap-x-3 gap-y-3">
      
        <div className="flex flex-col w-32 h-32 border-2 border-red-500 py-2 px-2 rounded-md items-center">
          <p className="font-bold text-sm text-red-500">Meninggal</p>
          <img src={mati} alt="mati" className="h-10 w-10 my-2"></img>
          <div>
            <p className="font-bold text-sm text-red-500">1000000</p>
          </div>
        </div>
       
        <div className="flex flex-col w-32 h-32 border-2 border-red-500 py-2 px-2 rounded-md items-center">
          <p className="font-bold text-sm text-red-500">Dirawat</p>
          <img src={dirawat} alt="dirawat" className="h-10 w-10 my-2"></img>
          <div>
            <p className="font-bold text-sm text-red-500">346324140</p>
          </div>
        </div>

        <div className="flex flex-col w-32 h-32 border-2 border-red-500 py-2 px-2 rounded-md items-center">
          <p className="font-bold text-sm text-red-500">Positif</p>
          <img src={positif} alt="positif" className="h-10 w-10 my-2"></img>
          <div>
            <p className="font-bold text-sm text-red-500">34587632</p>
          </div>
        </div>

        <div className="flex flex-col w-32 h-32 border-2 border-red-500 py-2 px-2 rounded-md items-center">
          <p className="font-bold text-sm text-red-500">Sembuh</p>
          <img src={sembuh} alt="sembuh" className="h-10 w-10 my-2"></img>
          <div>
            <p className="font-bold text-sm text-red-500">7658493</p>
          </div>
        </div>

      </div>

      <p className="text-sm mt-3 text-gray-600">Update terakhir:</p>

    </React.Fragment>

  )
}

export default Covid19