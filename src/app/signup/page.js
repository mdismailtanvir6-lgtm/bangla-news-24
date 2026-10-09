"use client";

import SocialsSignIn from "@/components/auth/socials/SocialsSignIn";
import { signUp, signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      ...user,
      // callbackURL: "/",    "this is not working!"
    });

    if (data) {
      toast.success("Sign Up successfull!");
      redirect("/");
    }

    if (error) {
      toast.error("Sign up failed! Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset   rounded-box w-md">
          <label className="label">নাম</label>
          <input
            name="name"
            type="text"
            className="input w-md"
            placeholder="Name"
          />

          <label className="label">ImageURL</label>
          <input
            name="image"
            type="url"
            className="input w-md"
            placeholder="Image"
          />

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>

      {/* ===== sign in with socails ======= */}
      <SocialsSignIn />
    </div>
  );
};

export default SignUpPage;
