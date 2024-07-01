import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { Context } from "../Context/GlobalData";
import { TrashIcon } from "react-native-heroicons/outline";
const HomeScreen = ({navigation}) => {
  const { data, DeleteBlog } = useContext(Context);
  return (
    <View>
      {data && (
  <FlatList
    data={data}
    keyExtractor={(blog) => blog.key}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={()=>navigation.navigate('Blog',{id:item.key,title:item.title,content:item.content})}>
         <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,borderBottomColor:'grey',marginVertical:10}}>
        <Text>{item.title}-{item.content}</Text>
        <TouchableOpacity onPress={()=>DeleteBlog(item.key)}>
          <TrashIcon style={{ color: 'black', width: 20 }} />
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
     
    )}
  />
)}

    </View>
  );
};

export default HomeScreen;
