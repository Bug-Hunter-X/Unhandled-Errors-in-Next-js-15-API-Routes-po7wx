```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Some logic here that might throw an error
  if (req.method === 'POST') {
    try {
      // Your POST logic
      const data = req.body;
      //Process the data
      res.status(200).json({ data });
    } catch (error) {
      //This will only catch errors in the POST logic
      console.error('Error processing POST request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    //This will not catch errors in the else statement
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
```