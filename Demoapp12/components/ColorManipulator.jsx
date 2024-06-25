import { TouchableOpacity,View,Text,Button } from "react-native"
import { useReducer } from "react"
import Reducer from "./ColorData"
const ColorManipulator = () => {
    const extra_increment = 15
    const[state,dispatch] = useReducer(Reducer,{'red':0,'blue':0,'green':0})
  return (
    <>
      <View>
        <Button title="more red" onPress={()=>dispatch({type:'morered',payload:extra_increment})}/>
        <Button title="less red" onPress={()=>dispatch({type:'lessred',payload:-1*extra_increment})}/>
        <Button title="more blue" onPress={()=>dispatch({type:'moreblue',payload:extra_increment})}/>
        <Button title="less blue" onPress={()=>dispatch({type:'lessblue',payload:-1*extra_increment})}/>
        <Button title="more green" onPress={()=>dispatch({type:'moregreen',payload:extra_increment})}/>
        <Button title="less green" onPress={()=>dispatch({type:'lessgreen',payload:-1*extra_increment})}/>
      </View>
      <View style={{width:100,height:100,backgroundColor:`rgb(${state.red},${state.blue},${state.green})`}}/>
    </>
  )
}

export default ColorManipulator
