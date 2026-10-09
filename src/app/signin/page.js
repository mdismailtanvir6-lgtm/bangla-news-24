"use client";

import SocialsSignIn from "@/components/auth/socials/SocialsSignIn";
import { signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await signIn.email({
      ...user,
      // callbackURL: "/",    "this is not working!"
    });

    if (data) {
      toast.success("Sign In successfull!");
      redirect("/");
    }

    if (error) {
      toast.error("Sign in failed! Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h2 className="text-2xl font-bold text-red-700">সাইন ইন</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset   rounded-box w-md">
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
            সাইন ইন করুন
          </button>
        </fieldset>
      </form>

      {/* ===== sign in with socails ======= */}
      <SocialsSignIn />
    </div>
  );
};

export default SignInPage;
