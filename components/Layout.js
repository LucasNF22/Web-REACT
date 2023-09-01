//fuentes
import { Inter } from '@next/font/google';

// Configuracion de fuentes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: [ '100', '200', '300', '400', '500', '600', '700', '800'  ], 
});

import Nav from './Nav'
import Header from './Header'


const Layout = ({children}) => {
  return (
    // <div className={`page bg-site text-white bg-cover bg-no-repeat ${inter.variable} font-sora relative`}>
    <div className={`page bg-primary text-blanco bg-cover bg-no-repeat ${inter.variable} font-sora relative bg-gradient-to-r from-primary/10 via-black/30 to-black/10`}>
      {/* <TopLeftImg /> */}
      <Header />
      <Nav />
      {children}
    </div>
  )
}

export default Layout;
