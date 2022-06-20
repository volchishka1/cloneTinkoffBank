import React, {FC} from 'react';
import {IOtherItem} from '../types';
import {Pressable, Text} from 'react-native';
import {Icon} from './Icon';
import {BOX_SHADOW} from '../../../../../styles';
import {handleTransfer} from '../../handleTransfer';
import {useAccounts} from '../../../home/accounts/useAccounts';

const CASH_CARD_NUMBER = '6455 9435 2470 9547';

export const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
  const {accounts} = useAccounts();
  return (
    <Pressable
      style={[
        {
          marginLeft: 16,
          borderRadius: 12,
          padding: 8,
          width: 96,
          height: 96,
          backgroundColor: 'white',
        },
        BOX_SHADOW,
      ]}
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}>
      <Icon iconName={item.iconName} />
      <Text style={{fontSize: 12, marginTop: 6}}>{item.title}</Text>
    </Pressable>
  );
};
