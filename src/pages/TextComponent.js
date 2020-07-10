import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../configs/colors';
import sizes from '../configs/sizes';

const TextComponent = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.containerSafe}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.textHeading1}>Heading 1</Text>
          <Text style={styles.textHeading2}>Heading 2</Text>
          <Text style={styles.textHeading3}>Heading 3</Text>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.paragraph}>Paragraph</Text>
          <Text style={styles.body}>Body</Text>
          <Text style={styles.information}>Information</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerSafe: {flex: 1},
  textHeading1: {
    fontSize: sizes.txtHeading1,
    fontWeight: 'bold',
    color: colors.basePrimary,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(4),
  },
  textHeading2: {
    fontSize: sizes.txtHeading2,
    fontWeight: 'bold',
    color: colors.basePrimary,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(4),
  },
  textHeading3: {
    fontSize: sizes.txtHeading3,
    fontWeight: 'bold',
    color: colors.basePrimary,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(4),
  },
  title: {
    fontSize: sizes.txtTitle,
    color: colors.baseDarkGrey,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(4),
  },
  paragraph: {
    fontSize: sizes.txtParagraph,
    color: colors.baseDarkGrey,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(4),
  },
  body: {
    fontSize: sizes.txtBody,
    color: colors.baseDarkGrey,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(4),
  },
  information: {
    fontSize: sizes.txtInfo,
    color: colors.baseDarkGrey,
    paddingHorizontal: RFValue(16),
    paddingVertical: RFValue(4),
  },
});

export default TextComponent;
