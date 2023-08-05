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
function ImageWithThumbNail(props) {
  const Topref = useRef();
  const thumbref = useRef();
  const [isindex, setindex] = useState(0);
  const setActiveIndex = actindex => {
    setindex(actindex);
    Topref?.current?.scrollToOffset({
      offset: actindex * (width / 1.6),
      Animated: true,
    });
  };
  return (
    <SafeAreaView style={[styles.container]}>
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
            Math.floor(ev.nativeEvent.contentOffset.x / (width / 2)),
          );
        }}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Card containerStyle={styles.mainview}>
              <Card.Title style={styles.titlestyle}> {item.title}</Card.Title>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Card.Image
                source={{uri: item.img}}
                resizeMode={'cover'}
                style={{
                  borderRadius: 10,
                  height: 200,
                }}>
                <Text style={[styles.prince]}>{item.prince}</Text>
              </Card.Image>
            </Card>
          );
        }}
      />
      <FlatList
        //   ref={thumbref}
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
                  color: Color.grey,
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

export default ImageWithThumbNail;

const styles = StyleSheet.create({
  mainview: {
    width: width / 2,
    marginHorizontal: 25,
    borderRadius: 10,

    padding: 0,
  },
  avatarimg: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  FlatListstyle: {
    //width: width / 1.5,
    alignSelf: 'center',
    backgroundColor: Color.white,
  },
  conterimg: {
    height: 300,
    width: width / 1.5,
    alignSelf: 'center',
  },
  container: {
    width: width,
    backgroundColor: Color.white,
    marginTop: 10,
  },
  contnerthumbnail: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
  },
  thumbmainview: {margin: 10},
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
