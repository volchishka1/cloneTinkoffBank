import React from 'react';
import {useStories} from './useStories';
import {ScrollView, View} from 'react-native';
import {Loader} from '../../../ui/Loader';
import {StoryItem} from './StoryItem';

export const Stories = () => {
  const {stories, isLoading} = useStories();

  return (
    <View style={{marginVertical: 28}}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map(story => (
            <StoryItem key={story._id} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
