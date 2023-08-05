import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {height, width} from '../../Helper/ConstantData';
import {Color} from '../../Utils/Color';
import {borderradious, fontSize} from '../../Utils/Sizes';

export const styles = StyleSheet.create({
  topcardpressable: {
    width: '32%',
  },
  topcard: {
    padding: 0,
    margin: 5,
    borderRadius: 15,
    elevation: 1,
    height: 130,
    //   alignItems: 'center',
  },
  topflat: {
    alignSelf: 'center',
  },
  avatrname: {
    backgroundColor: Color.white,
    position: 'absolute',
    bottom: 12,
    left: 0,
    right: 0,
    height: 40,
  },
  avtartitle: {
    textAlign: 'center',
    fontSize: 13,
    color: Color.black,
    fontWeight: '600',
  },
  FeatureTitle: {
    fontSize: 17,
    color: Color.black,
    fontWeight: '600',
    paddingLeft: '3%',
    paddingTop: '1%',
  },
  featureIcon: {
    backgroundColor: Color.silver,
  },
  bookAbountimg: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bookingposter: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    height: 130,
  },
  notfeelingiconstyle: {
    backgroundColor: Color.silver,
  },
  subtitle: {
    fontSize: 13,
    paddingLeft: '3%',
    color: Color.grey,
  },

  NotFeelingFlatlist: {
    alignSelf: 'center',
    marginTop: '5%',
    // width: '99%',
    //  backgroundColor: Color.pink,
  },
  notfeelingTitle: {
    color: Color.black,
    textAlign: 'center',
  },
  NotfeelingAvatar: {
    alignSelf: 'center',
  },
  BestOfferView: {
    marginTop: '5%',

    backgroundColor: Color.sky,
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.title,
    color: Color.black,
    fontWeight: '500',
  },
  videoCallTitle: {
    color: Color.black,
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 1.5,
  },
  videoCall: {
    backgroundColor: Color.white,
    width: '50%',
    borderRadius: borderradious.radious,
    padding: 1,
    marginLeft: 2,
  },
  Videocallcard: {
    width: width / 2.5,
    padding: 0,

    borderRadius: borderradious.radious,
  },
  videocallheader: {
    width: '92%',
    alignSelf: 'center',
  },
});
