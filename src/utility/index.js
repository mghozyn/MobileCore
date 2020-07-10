import AsyncStorage from '@react-native-community/async-storage';

const utility = {
  sortByKey: function (array, key) {
    try {
      if (array) {
        return array.sort(function (a, b) {
          var x = a[key];
          var y = b[key];
          return x < y ? -1 : x > y ? 1 : 0;
        });
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  },
  resetStackApps: async function (navigation) {
    const keys = await AsyncStorage.getAllKeys();
    try {
      await AsyncStorage.multiRemove(keys);
      navigation.reset({
        index: 0,
        routes: [{name: 'App'}],
      });
    } catch (e) {
      console.log(e);
    }
  },
};

export default utility;
