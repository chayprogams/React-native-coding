import { View,StyleSheet } from "react-native"
const Layouts = () => {
  return (
    <>
    <View style={styles.parent}>
      <View style={styles.sheet1} />
      <View style={styles.sheet2} />
      <View style={styles.sheet3}/>
    </View>
     
    
      
    </>
  );
};
const styles = StyleSheet.create({
    parent:{
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between' 
    },
  sheet1:{
    // alignSelf:'flex-start',
     width:100,
     height:100,
     backgroundColor:'orange'
  },
  sheet2:{
    top:50,
    width:100,
    height:100,
    backgroundColor:'pink'
  },
  sheet3:{
    alignSelf:'flex-end',
    width:100,
    height:100,
    backgroundColor:'red'
  }
})
export default Layouts
