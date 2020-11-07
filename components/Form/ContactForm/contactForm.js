
const ContactForm = () => {
  return (
    <div className="flex w-full md:w-2/4 lg:w-2/4">
      <form className="flex flex-col w-full">

        <div className="flex flex-col mx-auto my-3 w-2/3">
          <label className="py-2 text-sm" for="name">Nama Lengkap</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="name" type="text" placeholder="Nama Lengkap"></input>
        </div>

        <div className="flex flex-col mx-auto my-3 w-2/3">
          <label className="py-2 text-sm" for="phone">No Handphone</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="phone" type="text" placeholder="No Handphone"></input>
        </div>

        <div className="flex flex-col mx-auto my-3 w-2/3">
          <label className="py-2 text-sm" for="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="email" type="text" placeholder="Email"></input>
        </div>

        <div className="flex items-start flex-col mx-auto my-3 w-2/3">
          <label className="py-2 text-sm" for="pesan">Pesan Anda</label>
          <textarea cols="25" rows="8" className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="pesan" type="textarea" placeholder="Pesan Anda"></textarea>
          <button className=" bg-red-600 text-white font-bold rounded px-2 py-2 my-6 text-sm ">Kirim Pesan</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm