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
              required: true,
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
            {...register("phone", {required: true})}
          />
          {errors.phone && (
            <p className="text-red-500 error mt-1 text-xs">
              {errors.phone.message}
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
            {...register("message", { required: true})}
          />
          {errors.message && (
            <p className="text-red-500 error mt-1 text-xs">
              {errors.message.message}
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
