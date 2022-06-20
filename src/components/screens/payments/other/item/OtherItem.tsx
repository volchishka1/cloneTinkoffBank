import React, {FC} from 'react';
import {IOtherItem} from '../types';
import {Pressable, Text} from 'react-native';
import {Icon} from './Icon';
import {BOX_SHADOW} from '../../../../../styles';

export const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
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
      ]}>
      <Icon iconName={item.iconName} />
      <Text style={{fontSize: 12, marginTop: 6}}>{item.title}</Text>
    </Pressable>
  );
};
