"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter()
 
  const onLogout = async(e) => {
    e.preventDefault();
    
    const response = await axios.get('api/users/logout')
    if (response.status === 200) {
      router.push('/login');
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
              Welcome to Profile Page
            </h2>

            
            <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                  onClick={(e) => onLogout(e)}
                >
                  Logout
                </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
