import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './screens/SigninScreen';
import Signup from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';
import TrackCreateScreen from './screens/TrackCreateScreen';
import TrackDetailScreen from './screens/TrackDetailScreen';
import TrackListScreen from './screens/TrackListScreen';
import {ContextProvider} from './Context/GlobalContext';
import {NavigationContextProvider} from './NavigationContext';
import DefaultScreen from './screens/DefaultScreen';
import {LocationContextProvider} from './Context/LocationContext';
import {TrackContextProvider} from './Context/TrackContext';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={DefaultScreen} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
const TracksMain = () => {
  <Tab.Navigator initialRouteName="TrackList">
    <Tab.Screen name="TrackList" component={TrackListScreen} />
    <Tab.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Tab.Navigator>;
};

const MainTabNavigator = () => (
  <Tab.Navigator initialRouteName="TrackCreate">
    <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        title: 'Sign Out',
      }}
    />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <NavigationContextProvider>
      <LocationContextProvider>
        <TrackContextProvider>
          <ContextProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Auth" component={AuthStack} />
              <Stack.Screen name="Main" component={MainTabNavigator} />
              <Stack.Screen name="TracksMain" component={TracksMain} />
            </Stack.Navigator>
          </ContextProvider>
        </TrackContextProvider>
      </LocationContextProvider>
    </NavigationContextProvider>
  </NavigationContainer>
);

export default App;
