import React, {FC} from 'react';
import {Text, View} from 'react-native';

export const Percent: FC<{percent: number}> = ({percent}) => {
  return (
    <View
      style={{
        width: 0,
        height: 0,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        borderStyle: 'solid',
        borderRightWidth: 27,
        borderTopWidth: 27,
        borderRightColor: 'transparent',
        borderTopColor: '#AAEF00',
        transform: [{rotate: '90deg'}],
      }}>
      <Text
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          fontSize: 10,
          transform: [{rotate: '-40deg'}],
          top: -34,
          left: 7,
        }}>
        {percent + '%'}
      </Text>
    </View>
  );
};
