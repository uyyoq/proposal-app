import '../styles/styles.css'
import 'swiper/swiper-bundle.min.css';

import Layout from '../components/Layout/index';


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
  
}

export default MyApp
