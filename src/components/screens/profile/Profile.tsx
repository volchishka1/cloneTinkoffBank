import React, {FC} from 'react';
import {useProfile} from './UseProfile';
import {Heading} from '../../ui/Heading';
import {Padding} from '../../ui/Padding';
import {Loader} from '../../ui/Loader';
import {Field} from '../../ui/Field';
import {Button} from '../../ui/Button';
import {useAuth} from '../../../hooks/useAuth';
import {Layout} from '../../layout/Layout';
import {useUpdateProfile} from './useUpdateProfile';
import {Text, View} from 'react-native';

export const Profile: FC = () => {
  const {logout} = useAuth();
  const {isLoading: isProfileLoading, name, setName, profile} = useProfile();

  const {isLoading, isSuccess, updateProfile} = useUpdateProfile(
    name,
    profile.docId,
  );

  return (
    <Layout>
      <Heading text="Profile" />
      <Padding>
        {isSuccess && (
          <View
            style={{
              backgroundColor: '#22c55e',
              paddingVertical: 8,
              padding: 12,
              borderRadius: 8,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              Profile updated successfully
            </Text>
          </View>
        )}
        {isProfileLoading || isLoading ? (
          <Loader />
        ) : (
          <>
            <Field onChange={setName} value={name} placeholder="Enter name" />
            <Button onPress={updateProfile} title="Update profile" />
            <Button
              onPress={logout}
              title="Logout"
              colors={['#e5e7eb', '#D6D8D8']}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};
