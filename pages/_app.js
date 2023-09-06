
import '../styles/globals.css';

// Componentes
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// Router
import { useRouter } from 'next/router';

// Framer Motion
import { AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return(
    <Layout  >
      <AnimatePresence mode='wait'>
        <div key={router.route} className='h-full bg-primary'>
          <Transition />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
