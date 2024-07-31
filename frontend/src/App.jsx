import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
import {BallTriangle} from "react-loader-spinner"


const App = () => {
  const [loading, setloading] = useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    },1000)
    },[])
  

  

  
  

  return (
  <>
  {
    loading ?
    <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
         <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
    :
    <div className="bg-slate-900">
    <Nav />
    <Banner />
    <About />
    <Service />
    <Contact />
    <Footer />
    
   </div>
  }
  </>
  );
};

export default App
