import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {Layout} from '../../layout/Layout';

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
    </Layout>
  );
};
