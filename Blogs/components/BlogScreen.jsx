import { View, Text } from "react-native"
const BlogScreen = ({route}) => {
    const {id,title,content} = route.params;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  )
}

export default BlogScreen
