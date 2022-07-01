import FormBuy from '@components/FormBuy'
import Image from 'next/image'
import style from './style.module.css'

const InfoAguacate = ({ avo } = {}) => {
  console.log("Hi", avo)
  return (
    <div className={style.Avo__Container}>
      <Image
        src={`${avo.image}`}
        alt={avo?.name}
        width={300}
        height={300}
      />
      <div className={style.Avo__Text}>
        <h2>{avo?.name}</h2>
        <p>{avo?.price}</p>
        <span>{avo?.sku}</span>
        <FormBuy avo={avo} />
      </div>
    </div>
  )
}

export default InfoAguacate