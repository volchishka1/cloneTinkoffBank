import React, {FC} from 'react';
import {IFooterItem} from './types';
import {Pressable, Text} from 'react-native';
import {TypeRootStackParamList} from '../../../navigation/types';

interface NavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
}

export const NavItem: FC<NavItem> = ({item, navigate}) => {
  // const isActive = false;
  return (
    <Pressable
      style={{alignItems: 'center', width: '20%'}}
      onPress={() => navigate(item.title)}>
      <Text style={{fontWeight: '500', marginTop: 1}}>{item.title}</Text>
    </Pressable>
  );
};
