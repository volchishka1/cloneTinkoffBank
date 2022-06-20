import React, {FC} from 'react';
import {IContact} from './types';
import {Pressable, Text} from 'react-native';
import {Avatar} from '../../../ui/Avatar';
import {handleTransfer} from '../handleTransfer';
import {useAccounts} from '../../home/accounts/useAccounts';

export const ContactItem: FC<{contact: IContact}> = ({contact}) => {
  const {accounts} = useAccounts();
  return (
    <Pressable
      style={{marginLeft: 16, marginRight: 4, alignItems: 'center'}}
      onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}>
      <Avatar name={contact.displayName} size="large" />
      <Text style={{marginTop: 4, fontSize: 12}}>{contact.displayName}</Text>
    </Pressable>
  );
};
