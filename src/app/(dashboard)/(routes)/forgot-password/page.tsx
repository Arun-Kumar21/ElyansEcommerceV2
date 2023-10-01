"use client"

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";

import Logo from "../../_components/Logo";

const ForgotPassword = () => {

  const router = useRouter();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push("/")
    }
  },[])

  return (
    <div>
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
              Forgot Password
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 dark:text-white"
                  />
                </div>
              </div>

              <div></div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Send me a reset link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
