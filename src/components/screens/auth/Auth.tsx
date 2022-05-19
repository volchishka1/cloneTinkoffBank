import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {StyleCenter} from '../../../styles';
import {useAuth} from '../../../hooks/useAuth';
import {Loader} from '../../ui/Loader';
import {Field} from '../../ui/Field';
import {Button} from '../../ui/Button';

interface IData {
  email: string;
  password: string;
}

export const Auth: FC = () => {
  const {isLoading, login, register} = useAuth();

  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState(false);

  const authHandler = async () => {
    const {email, password} = data;

    if (isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }
    setData({} as IData);
  };

  return (
    <View style={StyleCenter}>
      <View style={styles.view1}>
        <View style={{width: '80%'}}>
          <Text style={styles.textReg}>{isReg ? 'Sign Up' : 'Sign In'}</Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                value={data.email}
                placeholder="Enter email"
                onChange={value => setData({...data, email: value})}
              />
              <Field
                value={data.password}
                placeholder="Enter password"
                onChange={value => setData({...data, password: value})}
                isSecure={true}
              />
              <Button onPress={authHandler} title={"Let's go"} />

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text style={styles.titleReg}>
                  {isReg ? 'Login' : 'Register'}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  textReg: {
    textAlign: 'center',
    color: '#1f2937',
    fontWeight: '700',
    fontSize: 28,
  },
  titleReg: {
    color: '#1f2937',
    opacity: 0.5,
    textAlign: 'right',
    fontSize: 15,
  },
});
