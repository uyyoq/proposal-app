import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = yup.object().shape({
  fullName: yup.string().required("Nama lengkap wajib diisi"),
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  phone: yup
    .string()
    .matches(phoneRegExp, "No handphone tidak valid")
    .required("No hp wajib diisi"),

  pesan: yup
    .string()
    .required("Pesan wajib diisi")
    .min(10, "Pesan min 10 char")
    .max(150, "max 150 char"),
});

export { ContactSchema as default };
