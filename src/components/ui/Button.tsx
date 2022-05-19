import React, {FC} from 'react';
import {Text, TouchableHighlight} from 'react-native';

interface IButton {
  onPress: () => void;
  title: string;
  colors: [string, string];
}

export const Button: FC<IButton> = ({
  onPress,
  title,
  colors = ['#fcd34d', '#FBBF24'],
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={{
        backgroundColor: colors[0],
        borderRadius: 12,
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
        paddingTop: 12,
        paddingBottom: 12,
      }}>
      <Text style={{textAlign: 'center', color: '#292524'}}>{title}</Text>
    </TouchableHighlight>
  );
};
