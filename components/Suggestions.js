import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react"

export const Suggestions = () => {
    
  const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
    var suggestions = [];
    for (var i = 1; i <= 5; i++) {
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
    console.log(JSON.stringify(suggestions, null, "\t"));
  }, []);


  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((profile) => (
          <div key={profile.id} className="fex items-center justify-between mt-3">

            <img className="h-10 w-10 rounded-full border p-[2px]" src={profile.avatar} alt="" />

            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{profile.username}</h2>
              <h3 className="text-xs text-gray-400">I'am {profile.name}</h3>
            </div>
            
            <button className="text-blue-400 text-xs">Follow</button>
          </div>
        ))
      }
    </div>
  )
}
