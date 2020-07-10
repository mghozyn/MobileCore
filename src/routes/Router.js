/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import sizes from '../configs/sizes';
import App from '../pages/App';
import ButtonComponent from '../pages/ButtonComponent';
import TextComponent from '../pages/TextComponent';

const Stack = createStackNavigator();

const StackScreen = [
  {name: 'Landing Page', component: App},
  {name: 'Component Text', component: TextComponent},
  {name: 'Component Input Text', component: ButtonComponent},
  {name: 'Component Button', component: ButtonComponent},
  {name: 'Component Check Box', component: ButtonComponent},
  {name: 'Component Radio Button', component: ButtonComponent},
  {name: 'Component Dropdown', component: ButtonComponent},
  {name: 'Component List Item', component: ButtonComponent},
  {name: 'Component Header', component: ButtonComponent},
  {name: 'Component Tab Bar', component: ButtonComponent},
  {name: 'Component Progress Bar', component: ButtonComponent},
  {name: 'Component Avatar', component: ButtonComponent},
  {name: 'Component Card', component: ButtonComponent},
  {name: 'Component Modal', component: ButtonComponent},
];

function Router() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing Page">
          {StackScreen.map((item, index) => (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={({navigation, route}) => ({
                headerBackTitleVisible: false,
                headerTitleAlign: 'left',
                headerStyle: {
                  backgroundColor: colors.basePrimary,
                },
                headerTintColor: colors.baseWhite,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerLeft: () => HeaderLeft(navigation, route),
                headerRight: () => HeaderRight(navigation, route),
                headerTitle: () => HeaderCenter(navigation, route),
              })}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const HeaderLeft = (navigation, route) => {
  let iconHeaderLeft;
  if (route.params !== undefined && route.params.iconLeft) {
    let {iconLeft, onPressLeft} = route.params;
    iconHeaderLeft = (
      <Icon
        name={iconLeft}
        size={sizes.iconSizeLarge}
        color={colors.baseWhite}
        onPress={() =>
          onPressLeft ? onPressLeft : Alert.alert('Undefined onPressLeft')
        }
        style={{marginLeft: RFValue(8)}}
      />
    );
  } else if (navigation.canGoBack()) {
    iconHeaderLeft = (
      <Icon
        name={'chevron-left'}
        size={sizes.iconSizeLarge}
        color={colors.baseWhite}
        onPress={() => navigation.goBack()}
        style={{marginLeft: RFValue(8)}}
      />
    );
  }
  return iconHeaderLeft;
};

const HeaderCenter = (navigation, route) => {
  let headerTitle;
  let title = route.name;
  if (route.params !== undefined && route.params.titleLine2) {
    let titleLine2 = route.params.titleLine2;
    headerTitle = (
      <View style={styles.containerHeaderTitle}>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerTitleLine2}>{titleLine2}</Text>
      </View>
    );
  } else {
    headerTitle = (
      <Text style={[styles.headerTitle, {marginLeft: RFValue(4)}]}>
        {title}
      </Text>
    );
  }
  return headerTitle;
};

const HeaderRight = (navigation, route) => {
  let iconHeaderRight;
  if (route.params !== undefined && route.params.iconRight) {
    let {iconRight, onPressRight} = route.params;
    iconHeaderRight = (
      <Icon
        name={iconRight}
        size={sizes.iconSizeLarge}
        color={colors.baseWhite}
        onPress={
          onPressRight
            ? onPressRight
            : () => Alert.alert('Undefined onPressRight')
        }
        style={{marginRight: RFValue(8)}}
      />
    );
  }
  return iconHeaderRight;
};

const styles = StyleSheet.create({
  containerHeaderTitle: {marginLeft: RFValue(-8)},
  headerTitle: {
    fontSize: sizes.txtParagraph,
    fontWeight: 'bold',
    color: colors.baseWhite,
  },
  headerTitleLine2: {
    fontSize: sizes.txtBody,
    color: colors.baseWhite,
  },
});

export default Router;
