import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Button from '../components/Button';

const ButtonComponent = ({navigation, route}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.containerSafe}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Button label={'primary button'} type={'primary'} />
          <Button label={'secondary button'} type={'secondary'} />
          <Button label={'disabled primary button'} type={'primary'} disabled />
          <Button
            label={'disabled secondary button'}
            type={'secondary'}
            disabled
          />
          <Button label={'left button'} type={'primary'} leftIcon={'upload'} />
          <Button
            label={'left button'}
            type={'secondary'}
            leftIcon={'download'}
          />
          <Button
            label={'right button'}
            type={'primary'}
            rightIcon={'upload'}
          />
          <Button
            label={'right button'}
            type={'secondary'}
            rightIcon={'download'}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerSafe: {flex: 1},
});

export default ButtonComponent;
