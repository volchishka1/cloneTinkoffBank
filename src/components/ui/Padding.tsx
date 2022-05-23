import React, {FC} from 'react';
import {View} from 'react-native';

export const Padding: FC<{style?: any}> = ({children, style = {}}) => {
  return <View style={{paddingHorizontal: 16, ...style}}>{children}</View>;
};
