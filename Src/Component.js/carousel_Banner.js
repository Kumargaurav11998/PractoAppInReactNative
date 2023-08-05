import {Avatar, Card} from '@rneui/base';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import Shimmer from 'react-native-shimmer';
import {Color} from '../Utils/Color';
function CarouselBanner(props) {
  const Topref = useRef();
  const thumbref = useRef();
  const [isindex, setindex] = useState(0);
  const setActiveIndex = actindex => {
    setindex(actindex);
    Topref?.current?.scrollToOffset({
      offset: actindex * (width / 1.1),
      Animated: true,
    });
  };
  return (
    <SafeAreaView style={[styles.container, {marginTop: props.marginTop}]}>
      <FlatList
        ListEmptyComponent={
          <>
            <Shimmer style={[styles.conterimg, {backgroundColor: Color.grey}]}>
              {/* <Text style={[styles.loadingtext]}>Daily Housing</Text> */}
            </Shimmer>
          </>
        }
        ref={Topref}
        style={[styles.FlatListstyle]}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.data}
        snapToInterval={width / 2}
        bounces={true}
        decelerationRate={0.2}
        onMomentumScrollEnd={ev => {
          setActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / (width / 1.1)),
          );
        }}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Card containerStyle={styles.mainview}>
              <Card.Image
                source={{uri: item.img}}
                resizeMode={'cover'}
                style={{
                  borderRadius: 10,
                }}></Card.Image>
            </Card>
          );
        }}
      />
      <FlatList
        ListEmptyComponent={
          <>
            <View style={[styles.contnerthumbnail]}></View>
          </>
        }
        style={[{alignSelf: 'center'}]}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        contentContainerStyle={{margin: 10}}
        renderItem={({item, index}) => {
          return (
            <View style={[styles.thumbmainview]}>
              <Avatar
                onPress={() => setActiveIndex(index)}
                icon={{
                  name: 'dot-single',
                  type: 'entypo',
                  color: Color.white,
                  size: isindex == index ? 35 : 20,
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default CarouselBanner;

const styles = StyleSheet.create({
  mainview: {
    width: width / 1.1,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: Color.sky,
    padding: 0,
    margin: 0,
  },
  avatarimg: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  FlatListstyle: {
    alignSelf: 'center',
    backgroundColor: Color.sky,
  },
  conterimg: {
    //  height: 300,
    width: width / 1.1,
    alignSelf: 'center',
  },
  container: {
    // width: width,
    backgroundColor: Color.sky,
  },
  contnerthumbnail: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
  },
  thumbmainview: {margin: 0},
  titlestyle: {
    padding: 0,
    alignSelf: 'flex-start',
    color: Color.black,
    marginBottom: 0,
  },
  subtitle: {
    color: Color.lime,
    fontWeight: '400',
    fontSize: 11,
    padding: 2,
  },
  prince: {
    color: Color.pink,
    fontWeight: '500',
    fontSize: 11,
    marginLeft: 5,
    width: '50%',
  },
});
