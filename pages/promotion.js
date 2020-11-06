import Navbar from "../components/Navbar/navbar"

const Promotion = () => {
  return (
    <div className="flex items-center pt-24 w-3/4 my-0 mx-auto">
      <Navbar />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 self-center gap-6 items-center justify-items-center mx-4 md:mx-16 lg:mx-28">
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion1.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion2.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion3.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion4.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion5.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion6.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion7.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion8.jpg" />
        </div>
        <div>
          <img className="w-auto h-auto" src="/promotion/promotion9.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Promotion
