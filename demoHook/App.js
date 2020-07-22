/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DEFAULT_COUNT = 0;
const TRACK_VALUE = 3;
const App: () => React$Node = () => {

  const [count, setCount] = useState(DEFAULT_COUNT);

  // Component did mount
  useEffect(() => {
    Alert.alert('Component did mount');
    // Component will unmount

    return () => {
      console.warn('Component will unmount.')
    }
  }, []);

  // Call when count updated.
  useEffect(() => {
    if ( count === TRACK_VALUE) {
      Alert.alert('Track value');
    }
  }, [count]);

  // Called every time when function called
  useEffect(() => {
    console.warn("useEffect called with count: ", count);
  })

  return (
      <SafeAreaView style={styles.container}>
       <Text style={styles.title}>{`Bạn đã click ${count} lần`} </Text>
       <TouchableOpacity 
        onPress={() => setCount(count + 1)}
        style={styles.btn}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => setCount(DEFAULT_COUNT)}
          style={styles.btn}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default App;
