import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";

const RenderColors = () => {
  const [colors, setColors] = useState([]);

  const updateState = () => {
    setColors([...colors, generateColors()]);
  };
  return (
    <>
      <TouchableOpacity onPress={updateState}>
        <Text style={{ textAlign: 'center', margin: 25, fontSize: 24, color: 'grey' }}>
          Add Colors
        </Text>
      </TouchableOpacity>

     
        <FlatList data={colors} keyExtractor={(item) => item.id} renderItem={({item})=>{
            return   <View style={{ width: 100, height: 100, backgroundColor: item.color }} />
        }} />
      
    </>
  );
};
const generateColors = ()=>{
const red = Math.floor(Math.random()*256);
const green = Math.floor(Math.random()*256);
const blue = Math.floor(Math.random()*256);
return { id: Math.random()*10, color: `rgb(${red},${green},${blue})` };
}
const styles = StyleSheet.create({

})
export default RenderColors