import Wallet from '@/Components/user/Wallet'
import Navbar from "@/Components/user/Navbar";
import Footer from "@/Components/user/Footer";

export default function Home(){
  return (
    <div>
      <Navbar />
      <Wallet /> 
      <Footer />  
    </div>
  )
}

