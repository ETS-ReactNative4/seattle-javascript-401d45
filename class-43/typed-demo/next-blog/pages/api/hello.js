// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// our route handler that can response to request at {HOST}/api/file-name
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}
