import {Avatar} from '@rneui/base';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {width} from '../Helper/ConstantData';
import {styles} from '../Screens/Home/HomeStyle';
import {IndexStyle} from '../Screens/IndexStyel';
import {Color} from '../Utils/Color';
import TouchComponent from './TouchCompoent';

export const GridFlatList = props => {
  return (
    <FlatList
      style={{width: '99%', marginTop: props.marginTop}}
      numColumns={4}
      data={props.data}
      renderItem={({item}) => {
        return (
          <View
            style={{
              justifyContent: 'space-between',
              width: '25%',
              marginTop: props.itemMarginTop,
            }}>
            <Avatar
              rounded
              size={54}
              source={{uri: item.img}}
              containerStyle={[styles.NotfeelingAvatar]}
            />
            <Text style={[styles.notfeelingTitle]}>
              {item.title.split(' ')[0]}

              {item.title.split(' ')[1] && item.title.split(' ')[2]
                ? ' ' +
                  item.title.split(' ')[1] +
                  '\n' +
                  (item.title.split(' ')[2].length <= 6
                    ? item.title.split(' ')[2]
                    : item.title.split(' ')[2] + '..')
                : item.title.split(' ')[1] && '\n' + item.title.split(' ')[1]}
            </Text>
          </View>
        );
      }}
      ListFooterComponent={
        props.footer && (
          <TouchComponent
            title="View All Symptoms"
            borderRadius={5}
            borderWidth={1}
            width={'100%'}
            paddingVertical={'3%'}
            titlecolor={Color.black}
            fontSize={17}
            press={() => {
              console.log('hjgj');
            }}
          />
        )
      }
      ListHeaderComponent={
        props.Header && (
          <View style={[IndexStyle.flexWithNoSpace, {width: '93%'}]}>
            <Avatar
              rounded
              icon={{name: 'video', type: 'feather', color: Color.black}}
              iconStyle={{resizeMode: 'cover'}}
              containerStyle={[
                styles.notfeelingiconstyle,
                {marginTop: props.HeaderIconMArginTop},
              ]}
            />
            <View>
              <Text
                style={{
                  paddingTop: props.HeaderTitleTopPadding,
                  fontSize: props.HeaderTitleFontsize,
                  color: props.HeaderTitleColor,
                  paddingLeft: props.headerleft,
                  fontWeight: props.headerfontweight,
                }}>
                {props.headerTitle}
              </Text>
              <Text style={[styles.subtitle]}>{props.HeadersubTitle}</Text>
            </View>
          </View>
        )
      }
      ListHeaderComponentStyle={[
        styles.videocallheader,
        {marginBottom: props.marginBottom},
      ]}
      ListFooterComponentStyle={{marginTop: props.marginTop}}
    />
  );
};
