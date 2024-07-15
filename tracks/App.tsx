import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
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
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
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

const TracksMainStack = () => {
  return (
    <Stack.Navigator initialRouteName="TrackList">
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="TracksMain"
    screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="TracksMain"
      component={TracksMainStack}
      options={{
        title: 'Tracks Main',
        tabBarIcon: () => <FontAwesomeIcon icon={faLocationDot} size={20} />,
      }}
    />
    <Tab.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      options={{
        title: 'Track Create',
        tabBarIcon: () => <FontAwesomeIcon icon={faPlusCircle} size={20} />,
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        title: 'Sign Out',
        tabBarIcon: () => <FontAwesomeIcon icon={faGear} size={20} />,
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
            </Stack.Navigator>
          </ContextProvider>
        </TrackContextProvider>
      </LocationContextProvider>
    </NavigationContextProvider>
  </NavigationContainer>
);

export default App;
