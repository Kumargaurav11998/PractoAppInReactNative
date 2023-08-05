import {Avatar, Divider} from '@rneui/base';
import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {IndexStyle} from '../../Screens/IndexStyel';
import {Color} from '../../Utils/Color';
import {styles} from './CustomDrawerStyle';
import {CustomDrawerPage} from './DrawerItem';
function CustomDrawer({...Props}) {
  const move = async item => {
    // item.route
    //   ? Props.navigation.replace(item.route)
    //   : Props.navigation.navigate(item.route);

    Props.navigation.navigate(item.route);
  };
  return (
    <>
      <View style={[IndexStyle.Container, styles.constner]}>
        <FlatList
          ListHeaderComponent={
            <>
              <View
                style={[
                  IndexStyle.flexWithJustify,
                  {width: '95%', alignSelf: 'center'},
                ]}>
                <Avatar
                  rounded
                  size={50}
                  icon={{
                    name: 'hospital-user',
                    type: 'font-awesome-5',
                    color: Color.white,
                    size: 20,
                  }}
                  containerStyle={styles.userstyle}
                />
                <View>
                  <Text style={[styles.usernametxt]}>User Name</Text>
                  <Text style={[styles.editxt]}>View & Edit Profile</Text>
                  <Text style={[styles.completeProfile]}>5% completed</Text>
                </View>
                <Avatar
                  icon={{
                    name: 'right',
                    type: 'antdesign',
                    color: Color.silver,
                  }}
                  containerStyle={[styles.righticon]}
                />
              </View>
              <Divider style={[IndexStyle.HeadertopSpace]} />
              <Pressable
                style={[
                  IndexStyle.flexWithJustify,
                  {width: '90%', alignSelf: 'center'},
                ]}>
                <View>
                  <View style={[IndexStyle.flexWithNoSpace]}>
                    <Text style={[styles.practotxt]}>Practo</Text>
                    <Text style={[styles.plustxt]}>Plus</Text>
                  </View>
                  <Text style={[styles.completeProfile]}>
                    Health Plan for your family
                  </Text>
                </View>
                <Avatar
                  icon={{
                    name: 'right',
                    type: 'antdesign',
                    color: Color.silver,
                  }}
                  containerStyle={[styles.righticon]}
                />
              </Pressable>

              <Divider style={[IndexStyle.HeadertopSpace]} />
            </>
          }
          showsVerticalScrollIndicator={false}
          style={{marginTop: '5%'}}
          data={CustomDrawerPage}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => move(item)}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                  alignSelf: 'center',
                  marginTop: '10%',
                }}>
                {/* <Image source={item.icon} style={[styles.iconimage]}></Image> */}
                <Avatar
                  icon={{
                    name: item.name,
                    type: item.type,
                    color: Color.white,
                    size: 30,
                  }}
                  containerStyle={[styles.righticondrawer]}
                />
                <Text style={[styles.textstyle]}>{item.title}</Text>
                <Avatar
                  icon={{
                    name: 'right',
                    type: 'antdesign',
                    color: Color.silver,
                  }}
                  containerStyle={[styles.righticondrawer]}
                />
              </View>
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <Text style={[styles.versiontextstyle]}>Version : 0.0.1</Text>
          }
          ListFooterComponentStyle={{
            marginTop: '10%',
          }}
        />
      </View>
    </>
  );
}
export default CustomDrawer;
