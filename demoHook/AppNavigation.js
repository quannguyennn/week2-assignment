import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation, route}) {
    console.log(navigation);

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (route.params?.value) {
            setCount(route.params?.value);
        }
    }, route.params?.value)

    const updateCountValue = (value) => {
        setCount(value);
    }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detail1', {
            userName: 'Nguyen Van A',
            updateCountValue: updateCountValue,
        })}>
            <Text>{`Count is: ${count}`}</Text>
          <Text>Go To Detail 1</Text>
        </TouchableOpacity>
      </View>
  );
}

function DetailsScreen1({navigation, route}) {
    // const {userName, updateCountValue} = route.params; 
    const userName = route.params?.userName;
    const updateCountValue = route.params?.updateCountValue;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen 1</Text>
            <Text>{`userName: ${userName}`}</Text>
            <TouchableOpacity onPress={() => updateCountValue(3)}> 
            <Text>
            Update value of HOmeScreen
            </Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Detail2')}>
          <Text>Go to Detail 2</Text>
        </TouchableOpacity>
        </View>
      );
}

function DetailsScreen2({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen 2</Text>
        <TouchableOpacity onPress={() => navigation.push('Detail1')}>
        <Text>Go to Detail 1</Text>
      </TouchableOpacity>
      </View>
    );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home screen'}}/>
        <Stack.Screen name="Detail1" component={DetailsScreen1} options={{title: 'Message screen 1'}} />
        <Stack.Screen name="Detail2" component={DetailsScreen2} options={{title: 'Message screen 2'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;