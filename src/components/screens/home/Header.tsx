import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar} from '../../ui/Avatar';
import {Padding} from '../../ui/Padding';
import {useNavigation} from '@react-navigation/native';
import {ChevronSmallRight} from '../../../assets/icons/IconSvgChevronSmallRight';
import {useProfile} from '../profile/UseProfile';
import {Loader} from '../../ui/Loader';

export const Header: FC = () => {
  const {isLoading, name} = useProfile();
  const {navigate} = useNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <Padding style={styles.header}>
      <Avatar name={name} />
      <TouchableOpacity
        onPress={() => navigate('Profile')}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text style={{color: '#1f2937', fontWeight: '500', fontSize: 20}}>
          {name}
        </Text>
        <ChevronSmallRight />
      </TouchableOpacity>
    </Padding>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
