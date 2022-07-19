import { useEffect, useState } from "react";

function Stories() {

  const [data, setData] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/customers', {
        method: 'POST',
        body: JSON.stringify({
          limit: 100,
        }),
      })

      return response.json()
    }

    fetchData().then((data) => {
      setData(data)
    })
    console.log(data);
  }, [])

  // useEffect(() => {

  //   const suggestions = [...Array(20)].map((_, i) => ({
  //     ...faker.helpers.contextualCard(),
  //     id: i,
  //   }));
  //   console.log(suggestions);
  // }, [])



  return (
    <div>
       {/* Story */}
    </div>
  )
}

export default Stories