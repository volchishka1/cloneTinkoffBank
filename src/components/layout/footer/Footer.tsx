import React, {FC} from 'react';
import {Padding} from '../../ui/Padding';
import {menu} from './menu';
import {NavItem} from './NavItem';
import {TypeRootStackParamList} from '../../../navigation/types';

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

export const Footer: FC<IFooter> = ({navigate, currentRoute}) => {
  return (
    <Padding
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderColor: '#f9fafb',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 8,
        paddingBottom: 20,
        borderTopColor: '#E1E1E1',
        borderTopWidth: 1,
      }}>
      {menu.map(item => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Padding>
  );
};
