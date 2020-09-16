import React from 'react'
import 'react-native-gesture-handler'
import RootNavigator from '../src/navigations'
import { Provider } from 'react-redux'
import genereateStore from './redux/store'

export default function App() {
  const store = genereateStore()
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
