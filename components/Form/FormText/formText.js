import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactSchema from "../schema/__contact_schema";

const FormText = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(ContactSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 mx-auto justify-center item-center">
      <form>
        <div className="flex flex-col w-full mx-auto my-3">
          <label className="py-2 text-sm"> Nama Lengkap </label>
          <input
            className="shadow appearance-none border rounded py-1 px-3 text-sm focus:outline-white focus:border-orange-300 w-full"
            type="text"
            name="fullName"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <p className="text-red-500 error mt-1 text-xs">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col mx-auto my-3">
          <label className="py-2 text-sm"> Email </label>
          <input
            className="shadow appearance-none border rounded py-1 px-3 text-sm focus:outline-none focus:border-orange-300 w-full"
            type="email"
            name="email"
            {...register("email", {
              required: "Email Wajib Diisi!",
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <p className="text-red-500 error mt-1 text-xs">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col mx-auto my-3">
          <label className="py-2 text-sm" htmlFor="">
            {" "}
            No Handphone{" "}
          </label>
          <input
            className="shadow appearance-none border rounded py-1 px-3 text-sm focus:outline-none focus:border-orange-300 w-full "
            type="tel"
            name="phone"
            {...register("phone", {
              required: "No Hp Wajib Diisi!",
              maxLength: 13,
              minLength: 10,
              pattern:
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            })}
          />
          {errors.phone?.type === "pattern" && (
            <p className="text-red-500 error mt-1 text-xs">
              No Hp Tidak Valid!
            </p>
          )}
          {errors.phone?.type === "maxLength" && (
            <p className="text-red-500 error mt-1 text-xs">
              No Hp Tidak Valid!
            </p>
          )}
          {errors.phone?.type === "minLength" && (
            <p className="text-red-500 error mt-1 text-xs">
              No Hp Tidak Valid!
            </p>
          )}
          {errors.phone?.type === "required" && (
            <p className="text-red-500 error mt-1 text-xs">
              No Hp Wajib Diisi!
            </p>
          )}
        </div>

        <div className="flex flex-col mx-auto my-3">
          <label className="py-2 text-sm" htmlFor="">
            {" "}
            Pesan Anda{" "}
          </label>
          <textarea
            className="shadow appearance-none border rounded py-1 px-3 text-sm focus:outline-none focus:border-orange-300 w-full"
            type="text"
            name="message"
            {...register("message", { required: true, minLength: 15 })}
          />
          {errors.message?.type === "required" && (
            <p className="text-red-500 error mt-1 text-xs">
              Pesan Wajib Diisi!
            </p>
          )}
          {errors.message?.type === "minLength" && (
            <p className="text-red-500 error mt-1 text-xs">
              Isi Pesan Minimal 15 karakter!
            </p>
          )}
        </div>

        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className=" focus:bg-red-500 mt-1  bg-red-600 text-white font-bold rounded py-1 px-3 text-sm focus:outline-none focus:border-orange-300 px-2 py-2 my-6 text-sm "
        >
          Kirim Pesan
        </button>

        <style jsx>
          {`
            .error:before {
              display: inline;
              content: "⚠ ";
            }
          `}
        </style>
      </form>
    </div>
  );
};

export default FormText;
