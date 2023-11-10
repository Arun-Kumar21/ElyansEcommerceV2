"use client";

import { useState, useEffect } from "react";

import Logo from "../../_components/Logo";
import Link from "next/link";

import { useRouter } from "next/navigation";

const login = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();

  const handleChange = (e: any) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "password") {
      setpassword(e.target.value);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = { name, email, password };

    let res: any = fetch("/api/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setname("");
    setemail("");
    setpassword("");

    router.push("http://localhost:3000/login");
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>

          <p className="mt-2 text-center text-sm leading-5 text-gray-600 dark:text-gray-200 max-w">
            Or
            <Link
              href="/login"
              className="pl-2 font-semibold text-sky-600 hover:text-sky-500"
            >
              {" "}
              Already have an account? Login
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  placeholder="Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 dark:bg-white"
                />
              </div>
            </div>

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
                  value={email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  placeholder="Email address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 dark:bg-white"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Password
                </label>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-semibold text-sky-600 hover:text-sky-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  autoComplete="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-2 dark:bg-white"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
