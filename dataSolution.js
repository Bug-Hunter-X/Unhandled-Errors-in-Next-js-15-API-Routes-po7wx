```javascript
// pages/api/dataSolution.js
export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      // Your POST logic
      const data = req.body;
      //Process the data
      res.status(200).json({ data });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```