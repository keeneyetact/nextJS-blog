import { NextApiRequest, NextApiResponse } from 'next'

// Open localhost:3000/api/hello in a browser and you will see the following output.
export default (_: NextApiRequest, res: NextApiResponse) => {
   res.status(200).json({ text: 'Welcome to TutorialsPoint' })
}