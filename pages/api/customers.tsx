// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { faker } from "@faker-js/faker";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// export default (req, res) => {
//   const limit = JSON.parse(req.body)?.limit ?? 10;

//   const customers = [...new Array(limit)].map((_, index) => {
//     return {
//       index,
//       name: faker.name.findName(),
//       city: faker.address.city(),
//     };
//   });

//   res.status(200).json(JSON.stringify(customers));
// };