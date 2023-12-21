export default function handler(req, res) {
    // req is the request object, and res is the response object
    res.status(200).json({ message: 'Hello, API!' });
  }