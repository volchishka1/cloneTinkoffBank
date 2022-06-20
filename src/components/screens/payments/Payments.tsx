import React, {FC} from 'react';
import {Layout} from '../../layout/Layout';
import {Heading} from '../../ui/Heading';
import {Other} from './other/Other';
import {Contacts} from './contacts/Contacts';

export const Payments: FC = () => {
  return (
    <Layout>
      <Heading text="Payment" />
      <Contacts />
      <Other />
    </Layout>
  );
};
