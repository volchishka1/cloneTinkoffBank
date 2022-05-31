import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';
import {Stories} from './stories/Stories';
import {Accounts} from './accounts/Accounts';
import {ApplyNewProducts} from './apply-new-products/ApplyNewProducts';

export const Home: FC = () => {
  return (
    <View>
      {/*<Header />*/}
      <Stories />
      <Accounts />
      <ApplyNewProducts />
    </View>
  );
};
