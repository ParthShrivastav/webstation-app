import React, {useState, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Register/Login';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from './src/Common';
import Home from './src/screens/Route/Home';
const Stack = createStackNavigator();

const App = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [checkedSignIn, setCheckedSignIn] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await isUserLoggedIn();
    };
    getData();
  }, []);

  const isUserLoggedIn = async () => {
    const loginData = await AsyncStorage.getItem('token');
    if (loginData !== null) {
      setSignedIn(true);
      setCheckedSignIn(true);
      return true;
    }
    setSignedIn(false);
    setCheckedSignIn(true);
    return false;
  };

  if (!checkedSignIn) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={colors.yellow} size="large" />
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Root>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              // initialRouteName={signedIn ? 'Home' : 'Login'}
              initialRouteName={'Home'}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              {/* <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="AboutUs" component={AboutUs} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Root>
    </SafeAreaView>
  );
};

export default App;
