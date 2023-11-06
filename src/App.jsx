import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"
function App() {
  const [data,set] = useState({
    'initialInvestment':1000,
    'annualInvestment':1200,
    'expectedReturn':6,
    'duration':10
})
const validInput = data.duration >=1;
function handleChange(inputIdentifier,newval){
  //here the + symbol used down is to convert values into integers
    set((prev)=>{
        return {
            ...prev,
            [inputIdentifier]:+newval,
    }
    })
}
  return (
    <div>
       <Header />
       <UserInput data={data} onUpdate={handleChange} />
       {validInput ? <Results input={data} /> :<p>pls enter valid duration</p>}
       
    </div>
  )
}

export default App
