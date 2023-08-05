import React from 'react';

//import Carousel from 'react-native-anchor-carousel';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {width} from '../Helper/ConstantData';
import {Avatar} from '@rneui/base';
export const BannerSlider = () => {
  const carouselRef = React.useRef(null);
  const data = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
    },
    {
      img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <Avatar
        source={{uri: item.img}}
        containerStyle={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      />
    );
  };

  return (
    <Carousel
      layout={'default'}
      ref={c => {}}
      data={data}
      renderItem={renderItem}
      sliderWidth={width - 50}
      itemWidth={width - 50}
    />
  );
};

const styles = StyleSheet.create({
  carousel: {
    flexGrow: 0,
    height: 150,
  },
});
