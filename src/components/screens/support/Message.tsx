import React, {FC} from 'react';
import {IMessage} from './types';
import {View, Text} from 'react-native';
import {useAuth} from '../../../hooks/useAuth';

export const Message: FC<{message: IMessage}> = ({message}) => {
  const {user} = useAuth();

  const isMsgByAuthUser = user?.uid === message.userId;

  return (
    <View
      style={
        isMsgByAuthUser
          ? {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#3b82f6',
              alignSelf: 'flex-end',
              marginVertical: 8,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }
          : {
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#e5e7eb',
              alignSelf: 'flex-start',
              marginVertical: 8,
              paddingVertical: 8,
              paddingHorizontal: 12,
            }
      }>
      <Text style={isMsgByAuthUser ? {color: '#ffffff'} : {color: '#1f2937'}}>
        {message.text}
      </Text>
      <Text
        style={
          isMsgByAuthUser
            ? {color: '#ffffff', marginLeft: 8, opacity: 0.7, fontSize: 10}
            : {color: '#374151', marginLeft: 8, opacity: 0.7, fontSize: 10}
        }>
        {message.timestamp}
      </Text>
    </View>
  );
};
