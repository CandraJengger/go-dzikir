import React from 'react';
import { Button, Gap, ListItem, PlainLayout, Text } from '../../components';

const TabDzikirPage = () => {
  return (
    <PlainLayout>
      <section>
        <Text variant="label" text="Lafadz" />
        <Gap height="18px" width="20px" />
        <Button text="Mulai" />
      </section>

      <Gap height="42px" width="20px" />

      <section>
        <Text variant="label" text="Hari ini" />
      </section>

      <Gap height="32px" width="20px" />

      <section>
        <Text variant="label" text="Total" />
        <Gap height="18px" width="20px" />
        <ListItem title="Istighfar" label="33px" variant="rounded" />
      </section>
    </PlainLayout>
  );
};

export default TabDzikirPage;
