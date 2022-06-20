import React, {FC} from 'react';
import {Text} from 'react-native';
import {Padding} from './Padding';

export const Heading: FC<{text: string; isCenter?: boolean}> = ({
  text,
  isCenter = false,
}) => {
  return (
    <Padding>
      <Text
        style={
          isCenter
            ? {
                fontWeight: '700',
                color: '#0f0d0d',
                paddingTop: 50,
                fontSize: 30,
                alignItems: 'center',
              }
            : {
                fontWeight: '700',
                color: '#0f0d0d',
                paddingTop: 50,
                fontSize: 30,
              }
        }>
        {text}
      </Text>
    </Padding>
  );
};
