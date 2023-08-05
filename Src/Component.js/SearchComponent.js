import {Avatar, color, SearchBar} from '@rneui/base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Color} from '../Utils/Color';
function SearchbarComponent(props) {
  const [search, setSearch] = useState('');
  const [isloadingSearch, setloadingsearch] = useState(false);
  const updateSearch = search => {
    setSearch(search);
    if (search) {
      setloadingsearch(true);
      var data = props.Data.filter(item => {
        if (search == item.order_id) {
          props.getSearchData([item]);
        } else {
          props.getSearchData(props.reset);
        }
      });
      console.log(data);
    } else {
      props.getSearchData(props.reset);
      setloadingsearch(false);
    }
  };
  return (
    <SearchBar
      round
      containerStyle={[
        styles.searchcontainer,
        {backgroundColor: props.backgroundColor, width: props.width},
      ]}
      inputContainerStyle={[styles.searchinputecontainer]}
      placeholder={props.placeholder}
      placeholderTextColor={Color.white}
      onChangeText={updateSearch}
      value={search}
      showLoading={isloadingSearch}
      loadingProps={{color: Color.white}}
      spellCheck={props.spellCheck}
      inputStyle={styles.inpute}
      searchIcon={{color: Colors.white}}
    />
  );
}
export default SearchbarComponent;
const styles = StyleSheet.create({
  searchcontainer: {
    borderColor: Color.white,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 0,
  },
  searchinputecontainer: {
    backgroundColor: Color.sky,
    color: Color.white,
  },
  inpute: {
    color: Color.white,
  },
});
