// // Open localhost:3000/api/user in a browser and you will see the following output.
// export default (req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({ name: 'Robert' }))
//  }


// // Open http://localhost:3000/api/user?counter=1 in a browser and you will see the following output
// export default (req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({ query: req.query }))
//  }

// // Open http://localhost:3000/api/user in a browser and you will see the following output.
// export default (req, res) => {
//     res.status(200).json({ name: 'Robert' });
//  }