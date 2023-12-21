// export default function handler(req, res) {
//     // req is the request object, and res is the response object
//     res.status(200).json({ message: 'Hello, API!' });
// }

// import { NextResponse } from 'next/server';

// export async function GET(Request) {
//   // return new Response(JSON.stringify({ name: 'Home API route' }), {
//   //   status: 200,
//   // });
//   return NextResponse.json({ name: 'Home API route' }, { status: 200 });
// }
// // 7q9c0kp3gqR8DO5U

// export default async function handler(req, res) {
//     // Example: Fetch data from an external API
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
  
//     res.status(200).json(data);
//   }

export default function handler(_, res) {
  res.status(200).json({ allProducts: [] });
}