
const ContactForm = () => {
  return(
  <>
    <form className="flex flex-col w-full">

      <div className="flex flex-col mx-auto my-1 ">
        <label className="py-2 text-sm" for="name">Nama Lengkap</label>
        <input className="shadow appearance-none border rounded w-full py-1 px-3 text-sm" id="name" type="text" placeholder="Nama Lengkap"></input>
      </div>

      <div className="flex flex-col mx-auto my-1">
        <label className="py-2 text-sm" for="phone">No Handphone</label>
        <input className="shadow appearance-none border rounded w-full py-1 px-3 text-sm" id="phone" type="text" placeholder="No Handphone"></input>
      </div>

      <div className="flex flex-col mx-auto my-1">
        <label className="py-2 text-sm" for="email">Email</label>
        <input className="shadow appearance-none border rounded w-full py-1 px-3 text-sm" id="email" type="text" placeholder="Email"></input>
      </div>

      <div className="flex flex-col mx-auto my-1">
        <label className="py-2 text-sm" for="pesan">Pesan Anda</label>
        <input className="shadow appearance-none border rounded w-full py-1 px-3 text-sm" id="pesan" type="textarea" placeholder="Pesan Anda"></input>
      </div>
      <button className="flex flex-col mx-auto bg-red-600 text-white font-bold rounded px-2 py-1 my-2 text-sm">Kirim Pesan</button>
    </form>
  </>
  )
}

export default ContactForm