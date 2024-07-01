import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import ContextProvider from './Context/GlobalData';
import BlogScreen from './components/BlogScreen';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import {PlusIcon, PencilIcon} from 'react-native-heroicons/outline';
import React from 'react';
import {TouchableOpacity} from 'react-native';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('New Blog')}>
              <PlusIcon style={{width: 30}} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Blog"
        component={BlogScreen}
        options={({navigation, route}) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Edit Blog', {id: route.params})
              }>
              <PencilIcon style={{width: 30}} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="New Blog" component={CreateBlog} />
      <Stack.Screen name="Edit Blog" component={EditBlog} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
