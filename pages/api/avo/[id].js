import Database from '../../../database/db'

const oneAvo = async (req, res) => {
  const id = req.query.id
  const data = await Database.getById(id)


  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')

  res.status(200).json(data)

}

export default oneAvo