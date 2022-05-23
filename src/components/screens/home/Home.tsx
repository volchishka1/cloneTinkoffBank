import React, {FC} from 'react';
import {Text, View} from 'react-native';
import { Header } from './Header';

export const Home: FC = () => {
  return (
    <View>
      <Header />
      <Text>Home</Text>
    </View>
  );
};
