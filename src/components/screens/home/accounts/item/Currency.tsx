import React, {FC} from 'react';
import {View} from 'react-native';
import {TypeCurrency} from '../types';

export const Currency: FC<{currency: TypeCurrency}> = ({}) => {
  return (
    <View
      style={{
        borderRadius: 9999,
        backgroundColor: '#3b82f6',
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: 22,
          height: 22,
          borderRadius: 9999,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#EDF4FE',
        }}
      />
    </View>
  );
};
