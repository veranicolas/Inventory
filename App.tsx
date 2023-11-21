import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/routes/MainNavigator';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <View style={{display:'flex', flex:1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <MainNavigator />
      </View>
    </NavigationContainer>
  );
}

export default App;
