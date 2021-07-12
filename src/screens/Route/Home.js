import React from 'react';
import {Text, Image, ScrollView, FlatList, View} from 'react-native';
import {colors, fonts, ScreenContainer, style} from '../../Common';
import Swiper from 'react-native-swiper';
import {images} from '../../images/images';
import Icon from 'react-native-vector-icons/Ionicons';
const {light, medium, regular, bold} = fonts;
function Home() {
  return (
    <ScrollView>
      <Swiper style={{flex: 1}} showsButtons>
        <View style={{flex: 1}}>
          <Image
            source={images.samosa}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <Image
            source={images.res1}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
        <View style={{flex: 1}}>
          <Image
            source={images.res2}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
      </Swiper>

      <View style={{flex: 2, marginTop: '3%'}}>
        <View style={{flex: 1}}>
          <Text style={{fontFamily: medium}}>Recharges and bill payments</Text>
          <View style={{flexDirection: 'rownpx rea'}}>
            <>
              <IconBox
                iconName="phone-portrait"
                category={'Prepaid/Postpaid'}
              />
              <IconBox iconName="tv" category="DTH" />
              <IconBox iconName="phone-portrait" category="Electricity" />
              <IconBox iconName="phone-portrait" category="Gas" />
              <IconBox iconName="phone-portrait" category="Bank Transfer" />
            </>
          </View>
          {/* <ScrollView
            nestedScrollEnabled
            // horizontal
            contentContainerStyle={{
              //   flex: 1,
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // style={{flex: 1, flexGrow: 1}}
          ></ScrollView> */}
        </View>

        <View style={{flex: 1}}>
          <Text style={{fontFamily: medium}}>Food Delivery</Text>
          <Swiper style={{flex: 1}} showsButtons>
            <View style={{flex: 1}}>
              <Image
                source={images.samosa}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 1}}>
              <Image
                source={images.res1}
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View style={{flex: 1}}>
              <Image
                source={images.res2}
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
              />
            </View>
          </Swiper>
        </View>

        <View style={{flex: 1}}>
          <Text style={{fontFamily: medium}}>Recharges and bill payments</Text>
          <ScrollView
            nestedScrollEnabled
            // horizontal
            contentContainerStyle={{
              //   flex: 1,
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // style={{flex: 1, flexGrow: 1}}
          >
            <IconBox iconName="phone-portrait" category={'Prepaid/Postpaid'} />
            <IconBox iconName="tv" category="DTH" />
            <IconBox iconName="phone-portrait" category="Electricity" />
            <IconBox iconName="phone-portrait" category="Gas" />
            <IconBox iconName="phone-portrait" category="Bank Transfer" />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;

const IconBox = ({iconName, category}) => {
  return (
    <View
      style={[
        {
          padding: 10,
          backgroundColor: '#fff',
          //   flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: '3%',
          borderWidth: 1,
          borderColor: colors.yellow,
          width: 100,
        },
        style.webstationShape,
      ]}>
      <Icon name={iconName} color={colors.grey} size={25} />
      <Text style={{fontFamily: regular, fontSize: 12, color: colors.black}}>
        {category}
      </Text>
    </View>
  );
};
