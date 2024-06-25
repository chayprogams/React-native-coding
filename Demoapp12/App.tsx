import React from 'react';
import SignUp from './components/signup';
import Input from './components/Input';
import {useState} from 'react';
import RenderLists from './components/RenderLists';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RenderColors from './components/RenderColors';
import ColorManipulator from './components/ColorManipulator';
import axios from 'axios';
import Layouts from './components/Layouts';
const navigator = createNativeStackNavigator();
const url = 'https://www.course-api.com/axios-tutorial-post';
const Screens = ({navigation}) => {
  const handleSubmit = async() => {
    if (!name && !email && !password) {
      alert('Feilds are mandatory');
      return;
    } else {
       try{
        const response = await axios.post(url,{name,email,password});
        console.log(response.data);
      } catch (error) {
        console.log(error);
       }
      alert('success');
    }
    navigation.navigate('RenderLists', {name});
  };
  const RenderColors = () => {
    navigation.navigate('RenderColors');
  };
  const RenderColormanipulator = () => {
    navigation.navigate('RenderColorManipulator');
  };
  const CreateLayout = () => {
    navigation.navigate('CreateLayout');
  };
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  return (
    <>
      <Input name="Name" value={name} setValue={setName} />
      <Input name="Email" value={email} setValue={setEmail} />
      <Input
        name="Password"
        value={password}
        setValue={setPasword}
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          borderRadius: 24,
          marginBottom: 20,
          height: 50,
          justifyContent: 'center',
          marginHorizontal: 45,
        }}>
        <Text style={{textAlign: 'center'}} onPress={handleSubmit}>
          Submit
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 24,
          marginBottom: 20,
          height: 50,
          justifyContent: 'center',
          marginHorizontal: 45,
        }}>
        <Text style={{textAlign: 'center'}} onPress={RenderColors}>
          Navigate to color generator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 24,
          marginBottom: 20,
          height: 50,
          justifyContent: 'center',
          marginHorizontal: 45,
        }}>
        <Text style={{textAlign: 'center'}} onPress={RenderColormanipulator}>
          Navigate to color manipulator
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 24,
          marginBottom: 20,
          height: 50,
          justifyContent: 'center',
          marginHorizontal: 45,
        }}>
        <Text style={{textAlign: 'center'}} onPress={CreateLayout}>
          Create Layout
        </Text>
      </TouchableOpacity>
      <Text>{JSON.stringify({name, email, password})}</Text>
    </>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <navigator.Navigator initialRouteName="signup">
        <navigator.Screen name="signup" component={Screens} />
        <navigator.Screen name="RenderLists" component={RenderLists} />
        <navigator.Screen name="RenderColors" component={RenderColors} />
        <navigator.Screen
          name="RenderColorManipulator"
          component={ColorManipulator}
        />
        <navigator.Screen name="CreateLayout" component={Layouts} />
      </navigator.Navigator>
    </NavigationContainer>
  );
};
export default App;
