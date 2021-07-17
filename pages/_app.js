import '../styles/styles.css'
import 'swiper/swiper-bundle.min.css';
import { ReactQueryCacheProvider, QueryCache } from 'react-query'
 import { Hydrate } from 'react-query/hydration'
import Layout from '../components/Layout/index';


const queryCache = new QueryCache()

function MyApp({ Component, pageProps }) {

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
       <Hydrate state={pageProps.dehydratedState}>
       <Layout>
        <Component {...pageProps} />
      </Layout>
       </Hydrate>
     </ReactQueryCacheProvider>
  )


}

export default MyApp
