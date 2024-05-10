import React from "react";
import { useForm } from "react-hook-form";


function contacts() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
    <div className="flex h-screen items-center justify-center ">
      <div className='w-[600px]'>
            <div  className="modal-box">
            <div className="text-xl font-bold mt-3 mb-3">
      <h1>Please fill out this form so that we can reach out to you.</h1>
      </div>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br/>
            <input type="text" placeholder="Enter your name"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("name", { required: true })}/>
            <br/>
            {errors.name && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
            )}
            </div>

            <div className="mt-4 space-y-2">
            <span>Email</span>
            <br/>
            <input type="email" placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none" {...register("email", { required: true })}/>
            <br/>
            {errors.email && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
            )}
            </div>
            <div className="mt-4 space-y-2">
            <span>Message</span>
            <br/>
            <textarea className="textarea textarea-bordered border-white px-3 py-1 w-80 outline-none" placeholder="Type your message" {...register("message", { required: true })} />
            <br/>
            {errors.message && (
            <span className="text-sm text-red-500">
              This field is required
            </span>
            )}
            </div>
            <button className="mt-4 px-4 py-2 btn btn-success text-white">Submit</button>
            </form>
            </div>
            </div>
    </div>
    </>
  );
}

export default contacts;
