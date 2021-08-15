import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Button,
  Gap,
  Input,
  List,
  ListItem,
  Modal,
  PlainLayout,
  Text,
} from '../../components';
import DashboardImage from '../../assets/images/dashboard.png';
import HijabVector from '../../assets/images/hijab.png';

const HomePage = () => {
  const history = useHistory();

  const [openModalUsername, setOpenModalUsername] = useState(false);
  const [openModalRecent, setOpenModalRecent] = useState(false);
  const [openModalWelcome, setOpenModalWelcome] = useState(true);
  const [userName, setUserName] = useState('Fulan');

  const handleToggleModalUsername = () =>
    setOpenModalUsername(!openModalUsername);
  const handleToggleModalRecent = () => setOpenModalRecent(!openModalRecent);
  const handleChangeUsername = (e) => setUserName(e.target.value);

  useEffect(() => {
    // set window
    window.scrollTo(0, 0);
  }, []);

  return (
    <PlainLayout>
      <AppBar
        name={userName}
        onClickImage={() => {
          handleToggleModalUsername();
        }}
      />

      <Text as="h1" variant="text-grey" text="Assalamu'alaikum," />
      <Text as="h2" variant="title" text={userName} />
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
          <Text
            as="a"
            variant="tiny"
            text="Lihat semua"
            onClick={handleToggleModalRecent}
          />
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
              onClick={() => history.push('/tab-dzikir/1')}
            />
          </div>
          <div className="col-start-5 col-end-7">
            <Button
              variant="secondary"
              text="Tahmid"
              onClick={() => history.push('/tab-dzikir/2')}
            />
          </div>
          <div className="col-start-1 col-end-3">
            <Button
              variant="secondary"
              text="Takbir"
              onClick={() => history.push('/tab-dzikir/5')}
            />
          </div>
          <div className="col-start-3 col-end-5">
            <Button
              variant="secondary"
              text="Tahlil"
              onClick={() => history.push('/tab-dzikir/4')}
            />
          </div>
          <div className="col-start-5 col-end-7">
            <Button
              variant="secondary"
              text="Tasbih"
              onClick={() => history.push('/tab-dzikir/3')}
            />
          </div>
          <div className="col-start-1 col-end-6">
            <Button
              variant="secondary"
              text="Subhanallah walhamdulillah"
              onClick={() => history.push('/tab-dzikir/6')}
            />
          </div>
        </div>
      </section>

      {/* Update Name */}
      <Modal onToggle={handleToggleModalUsername} open={openModalUsername}>
        <Text variant="label" text="Ubah nama" />
        <Gap height="16px" width="10px" />
        <Input
          placeholder="Masukkan nama anda"
          value={userName}
          onChange={handleChangeUsername}
        />
      </Modal>

      {/* Welcome */}
      <Modal
        onToggle={() => setOpenModalWelcome(false)}
        open={openModalWelcome}
      >
        <div className="mx-auto mb-4" style={{ maxWidth: '400px' }}>
          <img src={HijabVector} alt="Ilustrasi jangan lupa dzikir" />
        </div>
        <Button text="Ok" onClick={() => setOpenModalWelcome(false)} />
      </Modal>

      {/* List recent read */}
      <Modal onToggle={handleToggleModalRecent} open={openModalRecent}>
        <Text variant="label" text="Yang anda baca hari ini" />
        <Gap height="16px" width="10px" />
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
      </Modal>
    </PlainLayout>
  );
};

export default HomePage;
