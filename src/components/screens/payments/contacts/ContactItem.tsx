import React, {FC} from 'react';
import {IContact} from './types';
import {Pressable, Text} from 'react-native';
import {Avatar} from '../../../ui/Avatar';

export const ContactItem: FC<{contact: IContact}> = ({contact}) => {
  return (
    <Pressable style={{marginLeft: 16, marginRight: 4, alignItems: 'center'}}>
      <Avatar name={contact.displayName} size="large" />
      <Text style={{marginTop: 4, fontSize: 12}}>{contact.displayName}</Text>
    </Pressable>
  );
};
