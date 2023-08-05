import {Avatar, Card, Icon} from '@rneui/base';
import React from 'react';
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import CarouselBanner from '../../Component.js/carousel_Banner';
import {GridFlatList} from '../../Component.js/GridFlatlistComponent';
import {HeaderComponent} from '../../Component.js/HeaderComponent';
import ImageWithThumbNail from '../../Component.js/HorizontalThumbNail';
import SearchbarComponent from '../../Component.js/SearchComponent';
import TouchComponent from '../../Component.js/TouchCompoent';
import {
  BestOfferBanner,
  CovidHelp,
  NotFeelingGood,
  SafeAndSecure,
  width,
} from '../../Helper/ConstantData';
import {Color} from '../../Utils/Color';
import {borderradious} from '../../Utils/Sizes';
import {IndexStyle} from '../IndexStyel';
import {styles} from './HomeStyle';

function HomeScreen(props) {
  const Data = [
    {
      id: 1,
      img: require('../../Assets/Image/doctor.jpg'),
      name: ' Book Doctor',
    },
    {
      id: 2,
      img: require('../../Assets/Image/doctorvideo.png'),
      name: 'Instant Video Consultant',
    },

    {
      id: 4,
      img: require('../../Assets/Image/sur.png'),
      name: 'Surgeries',
    },
    {
      id: 5,
      img: require('../../Assets/Image/pharma.png'),
      name: 'Medicines',
    },
    {
      id: 6,
      img: require('../../Assets/Image/lab.png'),
      name: 'Lab Test',
    },
    {
      id: 7,
      img: require('../../Assets/Image/insurance.png'),
      name: 'Insurance',
    },
  ];

  const DataDiesesPoster = [
    {
      id: 1,
      title: 'Introducing Plus Infinty',
      subtitle: 'All-in-one-health cover',
      prince: 'Start from KSH 1250/month',
      img: 'data:image/jpeg;base64,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',
    },
    {
      id: 2,
      title: 'Win over Diebetes',
      subtitle: 'Live a medicine free',
      prince: 'Limted',
      img: 'https://cdn-icons-png.flaticon.com/512/4861/4861675.png',
    },
    {
      id: 3,
      title: 'Safe & Precise Lasic',
      subtitle: 'Freedom from glasses frover in just 30 minutes',
      prince: 'Book Consultaion now',
      img: 'https://simg.nicepng.com/png/small/412-4124298_one-appointment-and-youll-see-why-we-are.png',
    },
    {
      id: 4,
      title: 'Covid Assistance',
      subtitle: 'Access to Covid Speciallised care & medical guidace for you',

      img: 'https://png.pngtree.com/png-vector/20200724/ourlarge/pngtree-men-wear-face-mask-illustration-png-image_2312659.jpg',
    },
  ];

  const videoCall = [
    {
      id: 1,
      img: 'https://naples.floridaweekly.com/wp-content/uploads/images/2017-11-30/16p1.jpg',
      available: '5 min',
      title: 'Genral physician',
      desc: 'consult for fever, cough, pain, headache, tiredness and more...',
    },
    {
      id: 2,
      img: 'https://naples.floridaweekly.com/wp-content/uploads/images/2017-11-30/16p1.jpg',
      available: '5 min',
      title: 'Dermatologist',
      desc: 'Get answer to hairfall, pimples skin rashes and more',
    },
  ];
  return (
    <SafeAreaView style={[IndexStyle.Container]}>
      <StatusBar backgroundColor={Color.sky} />

      {/* ======================== Header Bu Gaurav ==================== */}
      <View style={IndexStyle.HeadertopSpace}>
        <HeaderComponent open={() => props.navigation.openDrawer()} />
        <SearchbarComponent
          backgroundColor={Color.white}
          placeholder="Search..."
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top cart  booking  */}
        <FlatList
          style={[styles.topflat]}
          numColumns={3}
          data={Data}
          renderItem={({item}) => {
            return (
              <Pressable style={[styles.topcardpressable]}>
                <Card.Image
                  source={item.img}
                  resizeMode="cover"
                  containerStyle={[styles.topcard]}>
                  <View style={[styles.avatrname]}>
                    <Text
                      style={[
                        styles.avtartitle,
                        {marginTop: item.name.length <= 12 ? '8%' : 0},
                      ]}>
                      {item.name}
                    </Text>
                  </View>
                </Card.Image>
              </Pressable>
            );
          }}
        />

        {/* Feature  */}
        <View
          style={[
            IndexStyle.flexWithNoSpace,
            IndexStyle.HeadertopSpace,
            IndexStyle.HeaderleftSpace,
          ]}>
          <Avatar
            rounded
            icon={{
              name: 'staro',
              type: 'antdesign',
              color: Color.black,
              size: 25,
            }}
            containerStyle={styles.featureIcon}
          />

          <Text style={styles.FeatureTitle}>Featured Service</Text>
        </View>

        {/* Book Appointment */}

        <Avatar
          source={{
            uri: 'https://theprimacare.in/wp-content/uploads/2022/09/Homepage-Banner-Slide03-2.jpg',
          }}
          avatarStyle={styles.bookAbountimg}
          containerStyle={[styles.bookingposter, IndexStyle.HeadertopSpace]}
        />
        <ImageWithThumbNail data={DataDiesesPoster} />

        {/* Not Feeling too well ? */}

        <FlatList
          style={[styles.NotFeelingFlatlist]}
          numColumns={4}
          data={NotFeelingGood}
          renderItem={({item}) => {
            return (
              <View style={{margin: '3.5%'}}>
                <Avatar
                  rounded
                  size={54}
                  source={{uri: item.img}}
                  containerStyle={[styles.NotfeelingAvatar]}
                />
                <Text style={[styles.notfeelingTitle]}>
                  {item.title.split(' ', 3)[0]}

                  {item.title.split(' ')[1] && item.title.split(' ')[2]
                    ? ' ' +
                      item.title.split(' ')[1] +
                      '\n' +
                      (item.title.split(' ')[2].length <= 6
                        ? item.title.split(' ')[2]
                        : item.title.split(' ')[2] + '..')
                    : item.title.split(' ')[1] &&
                      '\n' + item.title.split(' ')[1]}
                </Text>
              </View>
            );
          }}
          ListFooterComponent={
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
          }
          ListHeaderComponent={
            <View style={[IndexStyle.flexWithspace_Even]}>
              <Avatar
                rounded
                icon={{name: 'video', type: 'feather', color: Color.black}}
                avatarStyle={{resizeMode: 'cover'}}
                containerStyle={styles.notfeelingiconstyle}
              />
              <View>
                <Text style={[styles.FeatureTitle]}>Not feeling too well?</Text>
                <Text style={[styles.subtitle]}>
                  Treat Common Symptoms with top Specialists
                </Text>
              </View>
            </View>
          }
          ListHeaderComponentStyle={{marginBottom: '5%'}}
          ListFooterComponentStyle={{marginTop: '5%'}}
        />

        <View style={[styles.BestOfferView]}>
          <View style={[IndexStyle.flexWithNoSpace, IndexStyle.HeadertopSpace]}>
            <Avatar
              size={45}
              rounded
              icon={{
                name: 'shopping-sale',
                type: 'fontisto',
                color: Color.white,
              }}
            />
            <View>
              <Text style={[styles.FeatureTitle, {color: Color.white}]}>
                Best Offer
              </Text>
              <Text style={[styles.subtitle, {color: Color.white}]}>
                Explore deals, Offers,health updates and more
              </Text>
            </View>
          </View>

          <CarouselBanner data={BestOfferBanner} marginTop={'5%'} />
        </View>

        <GridFlatList
          data={CovidHelp}
          Header={true}
          headerTitle="Instant Video Consulation for Covid-19 symptoms"
          HeaderIconMArginTop="1%"
          HeaderTitleColor={Color.black}
          HeaderTitleFontsize={18}
          HeaderTitleTopPadding={'1%'}
          headerleft={'2%'}
          headerfontweight={'600'}
          marginTop={'5%'}
          itemMarginTop={'3%'}
        />

        <View style={[styles.BestOfferView]}>
          <View style={[IndexStyle.flexWithNoSpace, IndexStyle.HeadertopSpace]}>
            <Avatar
              size={45}
              rounded
              icon={{
                name: 'user-nurse',
                type: 'font-awesome-5',
                color: Color.white,
              }}
            />

            <Text style={[styles.FeatureTitle, {color: Color.white}]}>
              Safe and Secure Surgeries
            </Text>
          </View>
          <CarouselBanner data={SafeAndSecure} marginTop={'5%'} />
        </View>
        {/* Instaent Video Consulation */}
        <FlatList
          ListHeaderComponent={
            <View
              style={[IndexStyle.flexWithNoSpace, IndexStyle.HeadertopSpace]}>
              <Avatar
                size={45}
                rounded
                icon={{
                  name: 'videocamera',
                  type: 'antdesign',
                  color: Color.black,
                }}
                containerStyle={styles.featureIcon}
              />

              <Text style={[styles.FeatureTitle]}>
                Instant Video Consulations with Specialists
              </Text>
            </View>
          }
          ListHeaderComponentStyle={styles.videocallheader}
          data={videoCall}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View>
                <Card containerStyle={styles.Videocallcard}>
                  <Card.Image
                    source={{uri: item.img}}
                    style={{borderRadius: borderradious.radious}}>
                    <View
                      style={[
                        IndexStyle.flexWithNoSpace,
                        IndexStyle.HeadertopSpace,
                        styles.videoCall,
                      ]}>
                      <Avatar
                        size={25}
                        rounded
                        icon={{
                          name: 'videocamera',
                          type: 'antdesign',
                          color: Color.black,
                        }}
                      />
                      <Text style={[styles.videoCallTitle]}>Video</Text>
                    </View>
                  </Card.Image>
                </Card>

                <Text style={[styles.title]}>{item.title}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
