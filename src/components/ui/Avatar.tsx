import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface IAvatar {
  name?: string | null;
  size?: 'small' | 'large';
}

// export const Avatar: FC<IAvatar> = ({name, size = 'small'}) => {
export const Avatar: FC<IAvatar> = ({name}) => {
  // const isSmall = size === 'small';

  return (
    <View
      style={{
        backgroundColor: '#d1d5db',
        borderRadius: 9999,
        width: 36,
        height: 36,
        marginRight: 12,
        // isSmall ? width: 9, height: 9, marginRight: 12 : width: 12, height: 12
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white'}}>{name?.slice(0, 1)}</Text>
    </View>
  );
};
