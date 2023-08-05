import {Avatar, Icon} from '@rneui/base';
import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IndexStyle} from '../Screens/IndexStyel';
import {Color} from '../Utils/Color';

export const HeaderComponent = props => {
  return (
    <>
      <View style={[IndexStyle.flexWithJustify]}>
        <View style={[IndexStyle.flexWithspace_Even]}>
          <Avatar
            icon={{name: 'menu', type: 'entypo', color: Color.grey, size: 25}}
            onPress={() => props.open()}
          />

          <Pressable
            style={[IndexStyle.flexWithNoSpace, styles.LocationHeader]}>
            <Avatar
              icon={{name: 'location-pin', type: 'entypo', color: Color.sky}}
            />
            <Text style={[styles.LocationHeaderTxt]}>Nairobi</Text>

            <Avatar
              icon={{name: 'down', type: 'antdesign', color: Color.grey}}
            />
          </Pressable>
        </View>
        <Pressable style={[IndexStyle.flexWithNoSpace]}>
          <Avatar
            icon={{
              name: 'wallet',
              type: 'antdesign',
              color: Color.grey,
              size: 30,
            }}
            containerStyle={styles.containerStyle}
          />

          <Text style={[styles.amounttxt]}>200</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  LocationHeaderTxt: {
    padding: '1%',
    color: Color.black,
    fontSize: 18,
  },
  LocationHeader: {
    paddingLeft: '5%',
  },
  amounttxt: {
    color: Color.white,
    fontSize: 13,
    backgroundColor: Color.pink,
    paddingHorizontal: '1%',
    paddingVertical: 0,
    borderRadius: 5,
    height: 18,
    position: 'relative',
    top: '13%',
    right: '15%',
  },
  // containerStyle: {position: 'relative', right: '-15%'},
});
