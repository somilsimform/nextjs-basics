// export default function handler(req, res) {
//     // req is the request object, and res is the response object
//     res.status(200).json({ message: 'Hello, API!' });
// }

// export default function handler(_, res) {
//     res.status(200).json({ allProducts: [] });
//   }

import { NextResponse } from 'next/server';

export async function GET(Request) {
  // return new Response(JSON.stringify({ name: 'Home API route' }), {
  //   status: 200,
  // });
  return NextResponse.json({ name: 'Home API route' }, { status: 200 });
}
// 7q9c0kp3gqR8DO5U