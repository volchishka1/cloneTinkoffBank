import React, {FC, useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {Alert, Pressable, TextInput, View} from 'react-native';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
import {db} from '../../../firebase';

export const Field: FC = () => {
  const {user} = useAuth();
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      await addDoc(collection(db, 'message'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        text: message,
      });
    } catch (error: any) {
      Alert.alert('Err add new message', error);
    } finally {
      setMessage('');
    }
  };

  return (
    <View
      style={{
        marginTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 4,
      }}>
      <TextInput
        placeholder="Enter your message"
        onChangeText={setMessage}
        value={message}
        showSoftInputOnFocus={false}
        autoCapitalize="none"
        style={{
          color: '#f3f4f6',
          padding: 12,
          width: '83%',
          height: 10,
          borderRadius: 16,
        }}
      />
      <Pressable onPress={handleSendMessage} />
    </View>
  );
};
