import React from 'react';
import {AuthProvider} from './src/providers/AuthProvider';
import {Navigation} from './src/navigation/Navigation';
import {LogBox} from 'react-native';

export const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

LogBox.ignoreAllLogs();
