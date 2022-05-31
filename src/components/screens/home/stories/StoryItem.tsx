import React, {FC} from 'react';
import {IStory} from './types';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {useData} from '../../../../hooks/useData';

export const StoryItem: FC<{story: IStory}> = ({story}) => {
  const {setActiveStories} = useData();

  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 16,
          marginLeft: 16,
          borderStyle: 'solid',
          borderColor: '#60a5fa',
          padding: 2,
          borderWidth: 1,
        }}>
        <ImageBackground
          source={{uri: story.images[0]}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'flex-end',
          }}
          imageStyle={{borderRadius: 14}}>
          <Text style={{color: 'white', fontSize: 12, margin: 8}}>
            {story.heading}
          </Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};
