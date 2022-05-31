import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {IAccount} from '../types';
import 'intl';
import 'intl/locale-data/jsonp/en';

export const Balance: FC<{account: IAccount}> = ({
  account: {balance, currency, name},
}) => {
  return (
    <View style={{width: '70%'}}>
      <Text style={{fontSize: 15}}>{name}</Text>
      <Text style={{fontWeight: 'bold', marginTop: 2, fontSize: 15}}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency',
        }).format(balance)}
      </Text>
    </View>
  );
};
