import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Layout} from '../../layout/Layout';
import {services} from './data';
import {ServiceItem} from './item/ServiceItem';

export const Services: FC = () => {
  return (
    <Layout>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          lineHeight: 28,
          paddingTop: 60,
        }}>
        Minsk
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {services.map(service => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </View>
    </Layout>
  );
};
