"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultData = { username: "", password: "" };

const Login = () => {
  const [data, setData] = useState(defaultData);
const route = useRouter()
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onRegister = async (e) => {
    e.preventDefault();
    if ( !data.username || !data.password) {
      alert("please fill all fields");
      return;
    }
    try {
      const response = await axios.post("api/users/login", data);
      setData(defaultData);
      console.log(response)
      
      if (response.status === 200) {
        route.push("/profile");
      }
      
    } catch (error) {
      if(error.response.status=== 400){
        alert("The data does not match.")
      }
      console.log(error.response.status);
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
              Login for an account
            </h2>

            <form className="space-y-6">
              

              <div>
                <label
                  htmlFor="uaername"
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
                  Login
                </button>
              </div>
            </form>
            <p className="text-center mt-4">
              Do't have an account?{" "}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
