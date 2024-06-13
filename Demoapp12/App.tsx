import React from 'react';
import SignUp from './components/signup';
import Input from './components/Input';
import {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
function App() {
  const handleSubmit = () => {
    if (!name && !email && !password) {
      alert('Feilds are mandatory');
      return;
    } else {
      alert('success')
    }
  };
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  return (
    <>
      <SignUp />
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
      <Text>{JSON.stringify({name, email, password})}</Text>
    </>
  );
}
export default App;
