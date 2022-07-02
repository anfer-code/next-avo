const yesNo = async (req, res) => {

  let randomNum

  const random = () => {
    const num = Math.floor(Math.random() * 10)
    return num
  }

  const number = random()

  res.setHeader('Content-type', 'application/json')


  if(number % 2 === 0) {
    randomNum = true
  } else {
    randomNum = false
  }

  res.status(200).json({randomNum})

}   

export default yesNo 