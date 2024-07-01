// import { View,Text,FlatList } from "react-native"
import CommonForm from "./CommonForm"
const EditBlog = ({navigation,route}) => {
  const{id} = route.params;
  const identifier = id.id
  return (
    <>
    
    <CommonForm navigation={navigation} id={identifier}/>

    </>
  )
}

export default EditBlog
