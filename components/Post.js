import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

import profilPicture from "./img/profil-picture2.jpg";
import profilPicture1 from "./img/profil-picture3.jpg";


import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}

      <div className="flex items-center p-5">
        <Image
        className="rounded-full object-contain border p-1 mr-3"
          src={profilPicture}
          height={40}
          width={35}
          alt="profile picture"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}

      <Image
        className="object-cover w-full"
          src={profilPicture1}
  
          alt="profile picture"
        />

      {/* Buttons */}

      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
}

export default Post;
