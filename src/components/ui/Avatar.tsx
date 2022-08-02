import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface IAvatar {
  name?: string | null;
  size?: 'small' | 'large';
}

export const Avatar: FC<IAvatar> = ({name, size = 'small'}) => {
  const isSmall = size === 'small';

  return (
    <View
      style={
        isSmall
          ? {
              backgroundColor: '#d1d5db',
              borderRadius: 9999,
              width: 36,
              height: 36,
              marginRight: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }
          : {
              backgroundColor: '#d1d5db',
              borderRadius: 9999,
              width: 48,
              height: 48,
              marginRight: 12,
              alignItems: 'center',
              justifyContent: 'center',
            }
      }>
      <Text
        style={
          isSmall
            ? {color: 'white', fontSize: 18, fontWeight: '500'}
            : {color: 'white', fontSize: 20, fontWeight: '500'}
        }>
        {name?.slice(0, 1)}
      </Text>
    </View>
  );
};
