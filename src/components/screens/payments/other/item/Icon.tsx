import React, {FC} from 'react';
import {View} from 'react-native';
import {IFooterItem} from '../../../../layout/footer/types';

interface IIcon extends Pick<IFooterItem, 'iconName'> {}

export const Icon: FC<IIcon> = ({iconName}) => {
  return (
    <View
      style={{
        borderRadius: 9999,
        backgroundColor: '#3b82f6',
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/*<AntDesign name={iconName}></AntDesign>*/}
    </View>
  );
};
