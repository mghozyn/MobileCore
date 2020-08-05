import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../configs/colors';
import sizes from '../configs/sizes';

const Button = ({
  label,
  type,
  disabled,
  leftImage,
  rightImage,
  leftIcon,
  rightIcon,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  let btnStyles = [styles.btnContainer, styles.buttonContainer];
  let txtStyles = [styles.txtButton];

  // Primary Button Style
  if (type === 'primary') {
    btnStyles.push([styles.buttonPrimaryContainer]);
    txtStyles.push([styles.textPrimary]);

    // Secondary Button Style
  } else if (type === 'secondary') {
    btnStyles.push([styles.buttonSecondaryContainer]);
    txtStyles.push([styles.textSecondary]);
  }

  // Disabled Primary Button Style
  if (disabled && type === 'primary') {
    btnStyles.push([styles.buttonPrimaryDisabledContainer]);
    txtStyles.push([styles.textPrimaryDisabled]);

    // Disabled Secondary Button Style
  } else if (disabled && type === 'secondary') {
    btnStyles.push([styles.buttonSecondaryDisabledContainer]);
    txtStyles.push([styles.textSecondaryDisabled]);
  }

  // Left Icon Button Style
  if (leftIcon) {
    txtStyles.push([styles.textLeftIcon]);
  }

  // Right Icon Button Style
  if (rightIcon) {
    btnStyles.push([styles.buttonRightIconContainer]);
  }

  // Add custom styling from props
  btnStyles.push(buttonStyle);
  txtStyles.push(textStyle);

  return (
    <TouchableOpacity disabled={disabled} style={btnStyles} onPress={onPress}>
      {leftIcon && (
        <Icon
          name={leftIcon}
          color={type === 'primary' ? colors.baseWhite : colors.basePrimary}
          size={sizes.iconSizeMedium}
        />
      )}
      {leftImage}
      <Text style={txtStyles}>{label}</Text>
      {rightImage}
      {rightIcon && (
        <Icon
          name={rightIcon}
          color={type === 'primary' ? colors.baseWhite : colors.basePrimary}
          size={sizes.iconSizeMedium}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSafe: {flex: 1},
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RFValue(8),
    margin: RFValue(8),
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
  },
  buttonPrimaryContainer: {
    backgroundColor: colors.basePrimary,
  },
  buttonSecondaryContainer: {
    borderColor: colors.basePrimary,
    borderWidth: RFValue(2),
  },
  buttonPrimaryDisabledContainer: {
    backgroundColor: colors.baseGrey,
  },
  buttonSecondaryDisabledContainer: {
    borderColor: colors.baseGrey,
    borderWidth: RFValue(2),
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  buttonRightIconContainer: {
    justifyContent: 'space-between',
  },
  txtButton: {
    fontSize: sizes.txtBody,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textPrimary: {
    color: colors.baseWhite,
  },
  textSecondary: {
    color: colors.basePrimary,
  },
  textPrimaryDisabled: {
    color: colors.baseWhite,
  },
  textSecondaryDisabled: {
    color: colors.baseGrey,
  },
  textLeftIcon: {
    marginLeft: RFValue(16),
  },
});

export default Button;
