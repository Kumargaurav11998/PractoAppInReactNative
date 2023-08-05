import {color} from '@rneui/base';
import {StyleSheet} from 'react-native';
import {Color} from '../../Utils/Color';

export const styles = StyleSheet.create({
  userstyle: {
    borderWidth: 1.5,
    borderColor: Color.white,
    padding: 1,
    marginTop: '3%',
  },
  usernametxt: {
    fontSize: 20,
    color: Color.white,
  },
  constner: {
    backgroundColor: Color.sky,
  },
  iconimage: {
    width: 25,
    height: 25,
  },
  textstyle: {
    color: Color.white,
    paddingLeft: '5%',
    fontSize: 20,
  },
  versionstyle: {
    backgroundColor: Color.appbackgroundcolor,
  },
  versiontextstyle: {
    color: Color.silver,
    textAlign: 'center',
  },
  iconimageView: {
    borderColor: Color.white,
    borderWidth: 0.5,
    borderRadius: 100 / 2,
    padding: 1,
  },
  profileimage: {
    width: 50,
    height: 50,
  },
  editxt: {
    color: Color.yellow,
    fontSize: 16,
  },
  completeProfile: {
    color: Color.silver,
  },
  righticon: {
    marginTop: '8%',
  },
  practotxt: {
    color: Color.white,
    fontSize: 17,
    marginTop: '5%',
  },
  plustxt: {
    backgroundColor: Color.pink,
    color: Color.white,
    marginTop: '5%',
    marginLeft: '5%',
    fontSize: 15,
    paddingHorizontal: 5,
  },
  righticondrawer: {},
});
