import React, {FC} from 'react';
import {Image, View, Text} from 'react-native';

export const Header: FC = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        marginBottom: 8,
        marginTop: 48,
      }}>
      <Image
        source={require('../../../assets/image/mini-logo.png')}
        style={{marginRight: 8, width: 80, height: 80, borderRadius: 999}}
      />
      <View>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 20,
            color: '#1f2937',
            fontWeight: '500',
          }}>
          Support
        </Text>
        <Text style={{fontSize: 14, lineHeight: 16, color: '#6b7280'}}>
          We are there 24/7
        </Text>
      </View>
    </View>
  );
};
