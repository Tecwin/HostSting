import Body from "./Components/Body"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


function App() {


  return (
    
   <div className=" bg-amber-50 min-h-screen px-10 py-3 flex flex-col gap-16 lg:px-16 lg:py-10">
    <Header/>
    <Body/>
    <Footer/>
   </div>
   
  )
}

export default App
