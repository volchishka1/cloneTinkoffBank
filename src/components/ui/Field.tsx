import React, {FC} from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface IField {
  onChange: (val: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
}

export const Field: FC<IField> = ({onChange, placeholder, value, isSecure}) => {
  return (
    <TextInput
      style={styles.textInput}
      showSoftInputOnFocus={false}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      secureTextEntry={isSecure}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 12,
    fontWeight: '700',
    marginTop: 12,
    padding: 12,
    width: '100%',
    backgroundColor: '#ede6e6',
  },
});
