import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [pokeman, setPokeman] = useState([])
  useEffect(() => {
    
  
   
  }, [])
  
  return (
    <>
      <Head>
        <title>The Pokeman List</title>
      </Head>
        
    </>
  )
}
