"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultData = { name: "", username: "", password: "" };

const Signup = () => {
  const [data, setData] = useState(defaultData);
  const route = useRouter();

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onRegister = async (e) => {
    e.preventDefault();
    if (!data.name || !data.username || !data.password) {
      alert("please fill all fields");
      return;
    }
    try {
      const response = await axios.post("api/users/signup", data);
      setData(defaultData);

      if (response.status === 200) {
        route.push("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white shadow-md rounded-md p-6">
            <img
              className="mx-auto h-12 w-auto"
              src="https://www.svgrepo.com/show/499664/user-happy.svg"
              alt=""
            />

            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
              Signup for an account
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    name="name"
                    type="name"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm text-black"
                    value={data.name}
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="uaername"
                  className="block text-sm font-medium text-gray-700"
                >
                  User Name
                </label>
                <div className="mt-1">
                  <input
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm text-black"
                    value={data.username}
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm text-black"
                    value={data.password}
                    onChange={(e) => onValueChange(e)}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  onClick={(e) => onRegister(e)}
                >
                  SignUp
                </button>
              </div>
            </form>
            <p classNameName="text-center mt-4">
              Already have an account?{" "}
              <Link href="/login" classNameName="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
