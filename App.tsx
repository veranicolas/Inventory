import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigator } from './src/routes/MainNavigator';
import { StoreWrapper } from '@/store/provider';

function App(): JSX.Element {

  return (
    <StoreWrapper>
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
    </StoreWrapper>
    
  );
}

export default App;
