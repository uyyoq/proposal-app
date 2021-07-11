import Navbar from "../components/Navbar/navbar"

const mati = "/icon/mati.svg"

const Covid19 = () => {
  return (
    <div>
      <div className="flex w-full items-center my-0 mx-auto" >
        <Navbar />
      </div>
     <div className="flex flex-wrap gap-x-3 gap-y-3">
       <div className="w-96 border-2 border-red-800 py-2 px-2 h-20">
         <img src={mati} alt="sedih" className="h-10 w-10"></img>
         
         
      </div>
       <div className="w-96">andri</div>
       <div className="w-96">dwi</div>
       <div className="">nini</div>
      
     </div>
    </div>
  )
}

export default Covid19