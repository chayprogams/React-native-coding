import { useContext } from "react"
import { Context } from "../Context/GlobalContext"
import { useEffect } from "react"
const DefaultScreen = () => {
    const {trylocalsignin} = useContext(Context)
    useEffect(()=>{
      trylocalsignin();
    },[])
  return (
    <>
      
    </>
  )
}

export default DefaultScreen
