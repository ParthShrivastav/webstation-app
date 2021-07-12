import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const ScreenContainer = ({children, removePadding}) => {
  return (
    <KeyboardAwareScrollView
      nestedScrollEnabled
      style={{
        flex: 1,
        // flexGrow: 1,
        paddingHorizontal: removePadding ? 0 : '3%',
        backgroundColor: colors.grey,
      }}
      contentContainerStyle={{flex: 1}}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export const fonts = {
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
};

export const colors = {
  black: '#000',
  yellow: '#fbb141',
  white: '#fff',
  grey: '#d3d3d3',
  blue: 'blue',
};

export const style = StyleSheet.create({
  webstationShape: {
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  pd10: {
    padding: 10,
  },
});
