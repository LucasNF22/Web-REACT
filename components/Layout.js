//fuentes
import { Inter } from '@next/font/google';

// Configuracion de fuentes
const sora = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800'  ], 
});

import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'

const Layout = ({children}) => {
  return (
    <div className={'page bg-site text-white bg-cover bg-no-repeat'}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  )
}

export default Layout;
