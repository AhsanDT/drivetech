import OurWorks from '@/components/Home/OurWorks'
import Layout from '@/components/Layout/Layout'

import image from "../assets/ourwork/design2.png"



const portfolio = () => {
  return (
    <Layout>
    <OurWorks image={image}   />
    </Layout>
  )
}

export default portfolio