import React, {FC, Fragment} from 'react';
import {Loader} from '../../../ui/Loader';
import {Padding} from '../../../ui/Padding';
import {useAccounts} from './useAccounts';
import {Text, View} from 'react-native';
import {AccountItem} from './item/AccountItem';

export const Accounts: FC = () => {
  const {accounts, isLoading} = useAccounts();

  return (
    <Padding>
      {isLoading ? (
        <Loader />
      ) : accounts.length ? (
        accounts.map((account, index) => (
          <Fragment key={account._id}>
            <AccountItem account={account} />
            {index + 1 !== accounts.length && (
              <View
                style={{
                  borderBottomColor: '#E0E1E2',
                  borderBottomWidth: 1,
                  marginBottom: 24,
                }}
              />
            )}
          </Fragment>
        ))
      ) : (
        <Text>You don't have card</Text>
      )}
    </Padding>
  );
};
