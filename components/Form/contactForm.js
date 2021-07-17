import { useFormik } from "formik"
import TextError from "../Text/textError";
import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      namaLengkap: '',
      phone: '',
      email: '',
      pesan: ''
    },
    validationSchema: Yup.object({
      namaLengkap: Yup.string()
        .required('Nama Lengkap Wajib Diisi'),
      phone: Yup.string()
      .matches(phoneRegExp, 'Nomer hp tidak valid')
        .max(20, 'Tidak boleh lebih dari 20 karakter')
        .required('Nomer hp wajib diisi'),
      email: Yup.string()
        .email('Email tidak valid')
        .required('email wajib diisi'),
      pesan: Yup.string()
        .min(15, "Minimal 15 karakter")
        .max(250, 'Maksimal 250 karakter'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <div className="flex w-full md:w-1/2 lg:w-1/2 mx-auto text-red-600">
      <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">

        <div className="flex flex-col mx-auto my-3 w-full">
          <label htmlFor="namaLengkap" className="py-2 text-sm" for="name">Nama Lengkap</label>
          <input
            id="namaLengkap"
            name="namaLengkap"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.namaLengkap}
            className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="name" type="text" placeholder="Nama Lengkap"></input>
          {formik.touched.namaLengkap && formik.errors.namaLengkap ? (
            <TextError errorMessage={formik.errors.namaLengkap} />
          ) : null}
        </div>

        <div className="flex flex-col mx-auto my-3 w-full">
          <label htmlFor="phone" className="py-2 text-sm" for="phone">No Handphone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="phone" type="text" placeholder="No Handphone"></input>
          {formik.touched.phone && formik.errors.phone ? (
            <TextError errorMessage={formik.errors.phone} />
          ) : null}
        </div>

        <div className="flex flex-col mx-auto my-3 w-full">
          <label htmlFor="email" className="py-2 text-sm" for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="email" type="text" placeholder="Email"></input>
          {formik.touched.email && formik.errors.email ? (
            <TextError errorMessage={formik.errors.email} />
          ) : null}
        </div>

        <div className="flex items-start flex-col mx-auto my-3 w-full">
          <label htmlFor="pesan" className="py-2 text-sm" for="pesan">Pesan Anda</label>
          <textarea
            id="pesan"
            name="pesan"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.pesan}
            cols="25" rows="8" className="shadow appearance-none border rounded w-full py-1 px-3 text-sm focus:outline-none focus:border-orange-300" id="pesan" type="textarea" placeholder="Pesan Anda"></textarea>
          {formik.touched.pesan && formik.errors.pesan ? (
            <TextError errorMessage={formik.errors.pesan} />
          ) : null}
          <button className=" focus:bg-red-500 focus:outline-none hover:bg-red-700 bg-red-600 text-white font-bold rounded px-2 py-2 my-6 text-sm ">Kirim Pesan</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm