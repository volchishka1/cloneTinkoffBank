import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {SubHeading} from '../../../ui/SubHeading';
import {OtherItem} from './item/OtherItem';
import {otherItem} from "./data";

export const Other: FC = () => {
  return (
    <View>
      <SubHeading text="Important transfers" />
      <ScrollView
        style={{paddingVertical: 20}}
        showsHorizontalScrollIndicator={false}
        horizontal>
        {otherItem.map(item => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
