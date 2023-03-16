import Image from 'next/image'
import loader from "../../assets/loader.gif"
const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
    <Image src={loader} alt="loader" />
    </div>

  )
}

export default Loader