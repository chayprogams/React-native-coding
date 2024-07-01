import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Context } from "../Context/GlobalData";

const CommonForm = ({ navigation,id }) => {
  const { data,EditBlogs,AddBlog } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
 const[ids,setIds] = useState();
 const[bool,setBool] = useState(false);
  useEffect(() => {
     data.map((item)=>{
      if(item.key == id){
      setTitle(item.title)
      setContent(item.content)
      setIds(item.key);
      setBool(true);
      }else{
        setTitle()
        setContent()
        setIds();
        setBool(false)
      }
    })
  }, [data]);

  const HandleSave = () => {
    {!bool?AddBlog(title,content):EditBlogs({id:ids, title:title, content:content})}
    navigation.navigate('Home');
  };
  return (
    <View style={{ marginHorizontal: 15, marginVertical: 15, gap: 6 }}>
      <Text style={styles.text}>Title</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(input) => setTitle(input)}
        value={title}
      />
      <Text style={styles.text}>Content</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={(input) => setContent(input)}
        value={content}
      />
      <TouchableOpacity
        style={{ marginTop: 15 }}
        onPress={HandleSave}
        disabled={!title && !content}
      >
        <Text style={{ backgroundColor: 'green', color: 'white', borderRadius: 5, textAlign: 'center', paddingVertical: 10 }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 43,
  },
  text: {
    fontSize: 18
  }
});

export default CommonForm;
