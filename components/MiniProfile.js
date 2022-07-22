import Image from "next/image"
// import profilePicture from "./img/profil-picture2.jpg"
import {signIn, signOut, useSession } from "next-auth/react";

function MiniProfile() {

  const {data : session } = useSession();

  // console.log(session);

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img 
      className="w-16 h-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        height={40}
        width={30}
        alt="profil picture"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.name}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      {!session ? (
        <button  onClick={signIn} className="text-blue-400 text-sm font-semibold">Sign In</button>
        
        ): (
          <button  onClick={signOut} className="text-blue-400 text-sm font-semibold">Sign out</button>
      )}
    </div>
  )
}

export default MiniProfile;