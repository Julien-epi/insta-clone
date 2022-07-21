import Image from "next/image"
import profilePicture from "./img/profil-picture2.jpg"

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Image 
      className="w-16 h-16 rounded-full border p-[2px]"
        src={profilePicture}
        height={40}
        width={30}
        alt="profil picture"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">Julien</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
    </div>
  )
}

export default MiniProfile;