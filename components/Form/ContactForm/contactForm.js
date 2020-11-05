import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nama terlalu pendek')
    .max(50, 'Nama terlalu panjang')
    .required('Nama wajib diisi'),
  email: Yup.string()
    .email('Format email salah')
    .required('Email wajib diisi'),
  phoneNumber: Yup.string()
    .min(4, 'Channel terlalu pendek')
    .max(50, 'Channel terlalu panjang').required('Email wajib diisi'),
});


const initialValues = {
  name: '',
  email: '',
  phoneNumber: ['', '']
}


const onSubmit = values => {
  console.log("Form values", values);
}

const ContactForm = () => {
  return(
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ContactSchema}
      >

        {
          ({ errors, touched }) =>
            (
              <Form>
                <div className="form-control">
                  <label htmlFor="name">Nama Lengkap</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nama Lengkap Anda"
                  />
                  <ErrorMessage component="div" className="error" name="name" />
                </div>

                <div className="form-control">
                  <label htmlFor="email">E-mail</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage component="div" className="error" name="email" />
                </div>

                <div className="form-control">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <Field
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+62"
                  />
                  <ErrorMessage component="div" className="error" name="phoneNumber" />
                </div>

              <button type="submit"> Submit </button>
              </Form>
            )
        }

      </Formik>
    </div>
  )
}

export default ContactForm