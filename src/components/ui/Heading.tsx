import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Padding} from './Padding';

export const Heading: FC<{text: string; isCenter?: boolean}> = ({
  text,
  // isCenter = false,
}) => {
  return (
    <Padding>
      <Text
        style={styles.heading}
        // isCenter ? alighItems: 'center' : ''
      >
        {text}
      </Text>
    </Padding>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: '700',
    color: '#0f0d0d',
  },
});
