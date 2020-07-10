import React from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import sizes from '../configs/sizes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');
const Menu = [
  {title: 'Text', screen: 'Component Text'},
  {title: 'Input Text', screen: 'Component Input Text'},
  {title: 'Button', screen: 'Component Button'},
  {title: 'Check Box', screen: 'Component Check Box'},
  {title: 'Radio Button', screen: 'Component Radio Button'},
  {title: 'Dropdown', screen: 'Component Dropdown'},
  {title: 'List Item', screen: 'Component List Item'},
  {title: 'Header', screen: 'Component Header'},
  {title: 'Tab Bar', screen: 'Component Tab Bar'},
  {title: 'Progress Bar', screen: 'Component Progress Bar'},
  {title: 'Avatar', screen: 'Component Avatar'},
  {title: 'Card', screen: 'Component Card'},
  {title: 'Modal', screen: 'Component Modal'},
];

const App = ({navigation}) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.basePrimary}
      />
      <FlatList
        style={styles.listContainer}
        data={Menu}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            style={styles.list}
            onPress={() =>
              navigation.navigate(item.screen, {
                titleLine2: 'Demo Page',
                iconRight: 'information',
                onPressRight: () => Alert.alert('Component Info'),
              })
            }>
            <View style={styles.containerText}>
              <Text style={styles.textListTitle}>{item.title}</Text>
              <Text style={styles.textListDesc}>
                See Demo Component {item.title}
              </Text>
            </View>
            <Icon
              name="chevron-right-circle"
              size={sizes.iconSizeMedium}
              color={colors.basePrimary}
            />
          </TouchableWithoutFeedback>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  listContainer: {
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(12),
  },
  containerText: {flexDirection: 'column'},
  textListTitle: {
    fontSize: sizes.txtParagraph,
    color: colors.baseBlack,
    fontWeight: 'bold',
  },
  textListDesc: {
    fontSize: sizes.txtBody,
    color: colors.baseDarkGrey,
  },
  separator: {
    width: width * 0.9,
    height: RFValue(1),
    backgroundColor: colors.baseGrey,
    alignSelf: 'center',
  },
});

export default App;
