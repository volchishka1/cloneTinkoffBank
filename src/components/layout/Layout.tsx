import React, {FC} from 'react';
import {View, ScrollView} from 'react-native';
import {StyleCenter} from '../../styles';

interface ILayout {
  isScrollView?: boolean;
}

export const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <View style={StyleCenter}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};
