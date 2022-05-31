import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {db} from '../../../../firebase';
import {IStory} from './types';

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'stories'), orderBy('timestamp', 'desc')),
        snapshot => {
          setStories(
            snapshot.docs.map(
              d =>
                ({
                  _id: d.id,
                  ...d.data(),
                } as IStory),
            ),
          );
        },
      ),
    [],
  );

  return {stories, isLoading};
};
