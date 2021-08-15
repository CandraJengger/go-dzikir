import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Button,
  Gap,
  ListItem,
  PlainLayout,
  Text,
} from '../../components';
import DashboardImage from '../../assets/images/dashboard.png';

const HomePage = () => {
  const history = useHistory();

  return (
    <PlainLayout>
      <AppBar />

      <Text as="h1" variant="text-grey" text="Assalamu'alaikum," />
      <Text as="h2" variant="title" text="Fulan bin fulan" />
      <Gap height="32px" width="10px" />

      <section className="block relative">
        <img src={DashboardImage} alt="Background" className="w-full" />
        <div className="flex flex-col justify-center items-center absolute inset-0">
          <Text variant="dash-title" text="Total" />
          <Text variant="dash-body" text="1000x" />
          <Text variant="dash-caption" text="dzikir anda hari ini" />
        </div>
      </section>

      <Gap height="28px" width="10px" />

      <section>
        <div className="flex justify-between items-center">
          <Text as="h3" variant="label" text="Yang baru anda baca" />
          <Text as="a" variant="tiny" text="Lihat semua" />
        </div>
        <Gap height="18px" width="10px" />

        <ListItem title="Istighfar" label="33x" variant="rounded" />
      </section>

      <Gap height="42px" width="10px" />

      <section>
        <Text as="h3" variant="label" text="Kumpulan Dzikir" />
        <Gap height="18px" width="16px" />
        <div className="grid grid-cols-6 grid-rows-3 gap-3">
          <div className="col-start-1 col-end-5">
            <Button
              variant="secondary"
              text="Istighfar"
              onClick={() => history.push('/tab-dzikir')}
            />
          </div>
          <div className="col-start-5 col-end-7">
            <Button
              variant="secondary"
              text="Tahmid"
              onClick={() => history.push('/tab-dzikir')}
            />
          </div>
          <div className="col-start-1 col-end-3">
            <Button
              variant="secondary"
              text="Takbir"
              onClick={() => history.push('/tab-dzikir')}
            />
          </div>
          <div className="col-start-3 col-end-5">
            <Button
              variant="secondary"
              text="Tahlil"
              onClick={() => history.push('/tab-dzikir')}
            />
          </div>
          <div className="col-start-5 col-end-7">
            <Button
              variant="secondary"
              text="Tasbih"
              onClick={() => history.push('/tab-dzikir')}
            />
          </div>
          <div className="col-start-1 col-end-6">
            <Button
              variant="secondary"
              text="Subhanallah walhamdulillah"
              onClick={() => history.push('/tab-dzikir')}
            />
          </div>
        </div>
      </section>
    </PlainLayout>
  );
};

export default HomePage;
