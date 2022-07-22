import { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";

import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  const { data: session } = useSession();

  useEffect(() => {
    var suggestions = [];
    for (var i = 1; i <= 20; i++) {
      suggestions.push({
        id: i,
        name: faker.name.findName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      });
    }
    setSuggestions(suggestions);
    // console.log(JSON.stringify(suggestions, null, "\t"));
  }, []);

  return (
    <>
      <div
        className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border 
      rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
      >
        {session && (
          <Story img={session.user.image} username={session.user.name} />
        )}

        {suggestions.map((profile) => (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        ))}
      </div>
    </>
  );
}

export default Stories;
