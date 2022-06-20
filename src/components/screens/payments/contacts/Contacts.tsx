import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {useContacts} from './useContacts';
import {SubHeading} from '../../../ui/SubHeading';
import {Loader} from '../../../ui/Loader';
import {ContactItem} from './ContactItem';

export const Contacts: FC = () => {
  const {contacts, isLoading} = useContacts();
  return (
    <View style={{marginVertical: 32}}>
      <SubHeading text="Phone transfers" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          style={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {contacts.map(c => (
            <ContactItem contact={c} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
