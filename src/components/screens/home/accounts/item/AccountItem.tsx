import React, {FC} from 'react';
import {IAccount} from '../types';
import {View} from 'react-native';
import {Currency} from './Currency';
import {Balance} from './Balance';
import {ImageCard} from './ImageCard';

export const AccountItem: FC<{account: IAccount}> = ({account}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 7,
      }}>
      <Currency currency={account.currency} />
      <Balance account={account} />
      <ImageCard account={account} />
    </View>
  );
};
