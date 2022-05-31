import React from 'react';
import {AuthProvider} from './src/providers/AuthProvider';
import {Navigation} from './src/navigation/Navigation';
import {LogBox} from 'react-native';
import {DataProvider} from './src/providers/DataProvider';
import {StoryContainer} from './src/components/screens/home/stories/StoryContainer';

export const App = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer />
        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
};

LogBox.ignoreAllLogs();
