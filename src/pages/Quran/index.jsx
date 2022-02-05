import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  AppBar,
  Button,
  Gap,
  Input,
  Modal,
  PlainLayout,
  BottomNavigator,
  Text,
  SurahItem,
  JuzItem,
} from '../../components';
import { BANNER } from '../../constants/general';
import { editData, logoutUser } from '../../redux/actions/auth';
import { BASE_URL } from '../../config';

function Quran({ auth: { data }, editDzikir, logout }) {
  const history = useHistory();

  const [openModalUsername, setOpenModalUsername] = useState(false);
  const [userName, setUserName] = useState(data?.name);

  const handleToggleModalUsername = () => {
    editDzikir(data, { key: 'name', value: userName });
    setOpenModalUsername(!openModalUsername);
  };

  const handleChangeUsername = (e) => setUserName(e.target.value);

  const onLogout = () => {
    logout(() => history.replace('/login'));
    sessionStorage.removeItem(BANNER);
  };

  useEffect(() => {
    // set window
    window.scrollTo(0, 0);
  }, []);

  console.log('cok', BASE_URL);
  return (
    <PlainLayout>
      <AppBar
        name={data?.name || 'Fulan'}
        onClickImage={() => {
          handleToggleModalUsername();
        }}
        withBackIcon={false}
      />

      <BottomNavigator />

      <Text as="h1" variant="title" text="Al-Quran" />
      <Gap height="20px" width="10px" />
      <Tabs>
        <TabList className="rounded-lg max-w-max mx-auto mb-4">
          <Tab className="px-5 py-3 inline-flex justify-center items-center text-sm font-medium">
            Tampilkan Surat
          </Tab>
          <Tab className="px-5 py-3 inline-flex justify-center items-center text-sm font-medium">
            Tampilkan Juz
          </Tab>
        </TabList>

        <TabPanel>
          <section className="flex flex-col">
            {[1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 15].map((item) => (
              <SurahItem key={item} />
            ))}
            <Gap height="60px" width="10px" />
          </section>
        </TabPanel>
        <TabPanel>
          <section className="flex flex-col">
            {[1, 2, 3].map((item) => (
              <JuzItem key={item} />
            ))}
          </section>
        </TabPanel>
      </Tabs>

      {/* Update Menu */}
      <Modal onToggle={handleToggleModalUsername} open={openModalUsername}>
        <div className="mb-4">
          <Text variant="label" text="Ubah nama" />
          <Gap height="16px" width="10px" />
          <Input
            placeholder="Masukkan nama anda"
            value={userName}
            onChange={handleChangeUsername}
          />
        </div>

        <Gap height="16px" width="10px" />

        <div>
          <Text variant="label" text="Apakah anda ingin keluar ?" />
          <Gap height="16px" width="10px" />
          <Button variant="secondary" text="Ya, keluar" onClick={onLogout} />
        </div>
      </Modal>
    </PlainLayout>
  );
}

Quran.propTypes = {
  auth: PropTypes.any,
  editDzikir: PropTypes.func,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  editDzikir: (user, data) => dispatch(editData(user, data)),
  logout: (callback) => dispatch(logoutUser(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quran);
