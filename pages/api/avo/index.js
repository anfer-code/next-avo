import Database from '../../../database/db'

const allAvos = async (req, res) => {
  const data = await Database.getAll()
  const length = data.length

  res.statusCode = 200
  res.setHeader('Content-type', 'application/json')

  res.end(JSON.stringify({data, length}))
}   

export default allAvos 
