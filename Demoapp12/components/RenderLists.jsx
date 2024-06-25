import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Data from './Data';

const RenderLists = () => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RenderLists;
