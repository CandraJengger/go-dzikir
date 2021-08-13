import React from 'react';
import { Button, Gap, Label, PlainLayout, Text } from '../../components';
import DashboardImage from '../../assets/images/dashboard.png';

const HomePage = () => {
  return (
    <PlainLayout>
      <div className="flex justify-end">
        <span className="w-8 h-8 flex justify-center items-center text-sm bg-secondary text-background rounded-full">
          FU
        </span>
      </div>

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
        <Gap height="24px" width="10px" />
        <div className="flex justify-between items-center py-4 px-4 w-full rounded-2xl bg-background duration-300 border-2 accent">
          <Text as="a" variant="text-primary" text="Istighfar" />
          <Label text="33x" />
        </div>
      </section>

      <Gap height="42px" width="10px" />

      <section>
        <Text as="h3" variant="label" text="Kumpulan Dzikir" />
        <Gap height="24px" width="16px" />
        <div className="grid grid-cols-6 grid-rows-3 gap-3">
          <div className="col-start-1 col-end-5">
            <Button variant="secondary" text="Istighfar" />
          </div>
          <div className="col-start-5 col-end-7">
            <Button variant="secondary" text="Tahmid" />
          </div>
          <div className="col-start-1 col-end-3">
            <Button variant="secondary" text="Takbir" />
          </div>
          <div className="col-start-3 col-end-5">
            <Button variant="secondary" text="Tahlil" />
          </div>
          <div className="col-start-5 col-end-7">
            <Button variant="secondary" text="Tasbih" />
          </div>
          <div className="col-start-1 col-end-6">
            <Button variant="secondary" text="Subhanallah walhamdulillah" />
          </div>
        </div>
      </section>
    </PlainLayout>
  );
};

export default HomePage;
