import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import sizes from '../configs/sizes';

const onPressButton = (button) => {
  return Alert.alert('Information', `Button ${button} Clicked`);
};

const ButtonComponent = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.containerSafe}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonPrimaryContainer]}
            onPress={() => onPressButton('Primary')}>
            <Text style={[styles.textButton, styles.textPrimary]}>Primary</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonSecondaryContainer]}
            onPress={() => onPressButton('Secondary')}>
            <Text style={[styles.textButton, styles.textSecondary]}>
              Secondary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled
            style={[
              styles.buttonContainer,
              styles.buttonPrimaryDisabledContainer,
            ]}>
            <Text style={[styles.textButton, styles.textPrimaryDisabled]}>
              Disabled
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled
            style={[
              styles.buttonContainer,
              styles.buttonSecondaryDisabledContainer,
            ]}>
            <Text style={[styles.textButton, styles.textSecondaryDisabled]}>
              Disabled
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonWithIconContainer,
              styles.buttonPrimaryContainer,
            ]}
            onPress={() => onPressButton('Upload Image')}>
            <Icon
              name="upload"
              color={colors.baseWhite}
              size={sizes.iconSizeMedium}
            />
            <Text style={[styles.textWithIconButton, styles.textPrimary]}>
              Upload Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonWithIconContainer,
              styles.buttonSecondaryContainer,
            ]}
            onPress={() => onPressButton('Download Image')}>
            <Icon
              name="download"
              color={colors.basePrimary}
              size={sizes.iconSizeMedium}
            />
            <Text style={[styles.textWithIconButton, styles.textSecondary]}>
              Download Image
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerSafe: {flex: 1},
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(8),
    margin: RFValue(8),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
  },
  buttonWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RFValue(8),
    margin: RFValue(8),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
  },
  textButton: {
    fontSize: sizes.txtBody,
    fontWeight: 'bold',
  },
  textWithIconButton: {
    fontSize: sizes.txtBody,
    fontWeight: 'bold',
    marginLeft: RFValue(16),
  },
  buttonPrimaryContainer: {
    backgroundColor: colors.basePrimary,
  },
  textPrimary: {
    color: colors.baseWhite,
  },
  buttonSecondaryContainer: {
    borderColor: colors.basePrimary,
    borderWidth: RFValue(2),
  },
  textSecondary: {
    color: colors.basePrimary,
  },
  buttonPrimaryDisabledContainer: {
    backgroundColor: colors.baseGrey,
  },
  textPrimaryDisabled: {
    color: colors.baseWhite,
  },
  buttonSecondaryDisabledContainer: {
    borderColor: colors.baseGrey,
    borderWidth: RFValue(2),
  },
  textSecondaryDisabled: {
    color: colors.baseGrey,
  },
});

export default ButtonComponent;
