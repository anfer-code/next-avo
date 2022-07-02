import Link from 'next/link'
import { useEffect, useState } from 'react'

export const getServerSideProps = async (params) => {
  const PROTOCOL = process.env.PROTOCOL
  const BACKURL = process.env.BACKURL

  const url = `${PROTOCOL}${BACKURL}/api/yes-no`

  const response = await fetch('https://next-avo-dun.vercel.app/api/yes-no')
  const { randomNum } = await response.json()

  return {
    props: {
      randomNum
    }
  }

}


const YesOrNo = ({ randomNum }) => {

  const [loading, setLoading] = useState(false)
  const [newNumber, setNewNumber] = useState(randomNum)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        fetch('/api/yes-no')
          .then(res => res.json())
          .then(({ randomNum }) => {
            setLoading(false)
            console.log(randomNum)
            setNewNumber(randomNum)
          })
      }, 1000)
    }
  }, [loading])


  return (
    <div className='yesOrNo'>
      <h1>Could I eat some avocados today?</h1>
      {loading ? <h3>Cargando</h3> : <h3>{newNumber ? 'YES' : 'NO'}</h3>}
      <div>
        <button
          disabled={loading}
          onClick={() => setLoading(true)}
        >Try again</button>
        <Link href='/'>
          <a>Volver al inicio</a>
        </Link>
      </div>
    </div>
  )
}

export default YesOrNo