import React, {FC} from 'react';
import {ImageBackground, ImageSourcePropType, Text} from 'react-native';
import {IAccount} from '../types';

export const ImageCard: FC<{account: IAccount}> = ({
  account: {name, cardNumber},
}) => {
  const imageBlack: ImageSourcePropType = require('../../../../../assets/cards/tinkoff-black.png');
  const imageAirlines: ImageSourcePropType = require('../../../../../assets/cards/all-airlines.png');
  return (
    <ImageBackground
      source={name === 'Tinkoff Black' ? imageBlack : imageAirlines}
      resizeMode="contain"
      style={{
        justifyContent: 'flex-end',
        width: 54,
        height: 32,
        paddingBottom: 1,
        paddingLeft: 4,
      }}>
      <Text style={{color: 'white', fontWeight: '500', fontSize: 11}}>
        {cardNumber.slice(-4)}
      </Text>
    </ImageBackground>
  );
};
