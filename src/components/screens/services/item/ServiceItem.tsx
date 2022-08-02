import React, {FC} from 'react';
import {IService} from '../types';
import {Text, View} from 'react-native';
import {Percent} from './Percent';
import LinearGradient from 'react-native-linear-gradient';
import {IconSvgMoney} from '../../../../assets/icons/IconSvgMoney';
import {getRandomGradient} from "./getRandomGradient";

export const ServiceItem: FC<{service: IService}> = ({service}) => {
  return (
    <View style={{marginBottom: 16}}>
      <View
        style={{
          borderRadius: 12,
          overflow: 'hidden',
          width: 56,
          height: 56,
          marginHorizontal: 16,
        }}>
        <LinearGradient
          colors={getRandomGradient()}
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Percent percent={service.percent} />
          <IconSvgMoney />
          {/*<MaterialIcons name={service.iconName} size={30} color='#fff' />*/}
        </LinearGradient>
      </View>
      <Text style={{textAlign: 'center', fontSize: 12, marginTop: 6}}>
        {service.title}
      </Text>
    </View>
  );
};
