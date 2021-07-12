import React, {useRef} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {TextInput, TouchableRipple} from 'react-native-paper';
import {colors, fonts, ScreenContainer, style} from '../../Common';
import {images} from '../../images/images';
const {webstationShape, pd10} = style;

export default function Login({navigation}) {
  const _mobile = useRef(null);
  const _password = useRef(null);
  const loginPressed = () => {
    navigation.navigate('Home');
  };
  return (
    <ScreenContainer>
      <View
        style={{flex: 0.75, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{width: '100%'}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fonts.regular,
            fontSize: 16,
          }}>
          We are glad too see you here!
        </Text>
        <TextInput
          label="Mobile Number"
          autoFocus
          style={[
            webstationShape,
            {
              paddingLeft: 30,
              fontFamily: fonts.regular,
              overflow: 'hidden',
              backgroundColor: '#fff',
            },
          ]}
          underlineColor="transparent"
          theme={{colors: {primary: colors.yellow}}}
          dense
          onSubmitEditing={() => _password.current.focus()}
          returnKeyLabel="next"
          returnKeyType="next"
          keyboardType="number-pad"
        />
        <TextInput
          label="Password"
          dense
          secureTextEntry
          ref={_password}
          underlineColor="transparent"
          outlineColor={'transparent'}
          style={[
            webstationShape,
            {
              paddingLeft: 30,
              fontFamily: fonts.light,
              overflow: 'hidden',
              backgroundColor: '#fff',
              elevation: 5,
            },
          ]}
          theme={{
            colors: {primary: colors.yellow},
          }}
          onSubmitEditing={loginPressed}
          returnKeyLabel="done"
          returnKeyType="done"
        />

        <TouchableRipple
          style={[
            webstationShape,
            pd10,
            {
              backgroundColor: colors.yellow,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
          onPress={loginPressed}>
          <Text style={{fontFamily: fonts.medium, fontSize: 16}}>
            Login now
          </Text>
        </TouchableRipple>
        <Text
          style={{
            textAlign: 'right',
            fontFamily: fonts.medium,
            fontSize: 13,
            bottom: 10,
            right: 10,
          }}>
          Forgot password?
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: fonts.light,
            fontSize: 14,
          }}>
          Don't have an account?{' '}
          <Text
            style={{
              fontFamily: fonts.extraBold,
              color: colors.yellow,
            }}>
            Register here
          </Text>
        </Text>
      </View>
    </ScreenContainer>
  );
}
