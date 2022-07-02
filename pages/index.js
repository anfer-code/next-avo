import ListOfProducts from '@components/ListOfProducts'
import Link from 'next/link'

export const getStaticProps = async () => {

  const PROTOCOL = process.env.PROTOCOL
  const BACKURL = process.env.BACKURL


  const url = `${PROTOCOL}${BACKURL}/api/avo`

  console.log(url)


  const response = await fetch('https://next-avo-dun.vercel.app/api/avo')
  const { data: productList } = await response.json() 

  return {
    props: {
      productList
    }
  }
}

const Home = ({productList = []} = []) => {

  return (
    <>
      <h1>AvoStore</h1>
      <p className='Avo__index-text'>Los aguacates del puestico, en tu cocina</p>
      <Link href="yes-or-no">
        <a>¿Deberías comer un aguacate hoy?</a>
      </Link>
      <ListOfProducts products={productList} />
    </>
  )
}

export default Home