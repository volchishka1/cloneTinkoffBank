import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {IMessage} from './types';
import {db} from '../../../firebase';
import dayjs from 'dayjs';

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'stories'), orderBy('timestamp', 'desc')),
        snapshot => {
          setMessages(
            snapshot.docs.map(d =>
              d.data()?.timestamp
                ? ({
                    _id: d.id,
                    ...d.data(),
                    timestamp: dayjs
                      .unix(d.data()?.timestamp.seconds)
                      .format('HH:mm'),
                  } as IMessage)
                : ({
                    _id: d.id,
                    ...d.data(),
                  } as IMessage),
            ),
          );
        },
      ),
    [],
  );

  return {messages, isLoading};
};
