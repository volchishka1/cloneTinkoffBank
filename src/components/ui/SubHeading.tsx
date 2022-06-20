import React, {FC} from 'react';
import {Text} from 'react-native';
import {Padding} from './Padding';

export const SubHeading: FC<{text: string}> = ({text}) => {
  return (
    <Padding>
      <Text style={{fontSize: 20, fontWeight: '700', color: '#1f2937'}}>
        {text}
      </Text>
    </Padding>
  );
};
