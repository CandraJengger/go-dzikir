import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  AppBar,
  Button,
  Gap,
  List,
  ListItem,
  PlainLayout,
  TabCount,
  Text,
} from '../../components';
import data from '../../data';

const TabDzikirPage = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [lafadz, setLafadz] = useState({});

  const handleToggleTabCount = () => {
    setOpen(!open);
    setCount(0);
  };
  const handleIncrement = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    const filter = data.filter((item) => parseInt(id) === item.id);
    setLafadz(filter[0]);

    // set window
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <PlainLayout>
      <AppBar withBackIcon onBack={() => history.push('/home')} />

      <section onClick={handleToggleTabCount}>
        <Text variant="label" text="Lafadz" />
        <Gap height="18px" width="20px" />
        <div className="text-right mb-4">
          <Text variant="text-arabic" text={lafadz?.arabic} />
          <Gap height="8px" width="20px" />
          <Text variant="text-dark" text={lafadz?.arabic_read} />
        </div>
        <Text variant="text-grey" text={lafadz?.translation} />

        <Gap height="18px" width="20px" />

        <Button text="Mulai" onClick={handleToggleTabCount} />
      </section>

      <Gap height="42px" width="20px" />

      <section>
        <Text variant="label" text="Hari ini" />
        <Gap height="8px" width="20px" />
        <List
          data={[
            {
              id: 1,
              time: '10:20 WIB',
              count: 50,
            },
            {
              id: 2,
              time: '10:20 WIB',
              count: 50,
            },
            {
              id: 3,
              time: '10:20 WIB',
              count: 50,
            },
            {
              id: 4,
              time: '10:20 WIB',
              count: 50,
            },
            {
              id: 5,
              time: '10:20 WIB',
              count: 50,
            },
            {
              id: 6,
              time: '10:20 WIB',
              count: 50,
            },
          ]}
        />
      </section>

      <Gap height="32px" width="20px" />

      <section>
        <Text variant="label" text="Total" />
        <Gap height="18px" width="20px" />
        <ListItem title="Istighfar" label="33px" variant="rounded" />
      </section>

      <TabCount open={open} count={count} onTab={handleIncrement} />
    </PlainLayout>
  );
};

export default withRouter(TabDzikirPage);
