import {StyleSheet} from 'react-native';
import {Color} from '../Utils/Color';

export const IndexStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  flexWithJustify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexWithspace_Even: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  flexWithNoSpace: {
    flexDirection: 'row',
  },
  HeadertopSpace: {
    marginTop: '5%',
  },
  HeaderleftSpace: {
    marginLeft: '5%',
  },
});
