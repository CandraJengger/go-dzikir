import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Gap,
  Input,
  Modal,
  PlainLayout,
  BottomNavigator,
  Text,
  VersesItem,
  Loading,
} from '../../components';
import { BANNER } from '../../constants/general';
import { editData, logoutUser } from '../../redux/actions/auth';
import { ILBackground2 } from '../../assets/images';
import { getSurahById } from '../../redux/actions/quran';

function ReadingQuran({
  auth: { data },
  editDzikir,
  logout,
  getSurah,
  quran: { loading, currentReading },
}) {
  const history = useHistory();
  const { state: surahDetail } = useLocation();

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
    if (surahDetail.id) {
      getSurah(surahDetail.id);
    }
  }, []);

  console.log(currentReading, surahDetail);

  return (
    <PlainLayout>
      <AppBar
        name={data?.name || 'Fulan'}
        onClickImage={() => {
          handleToggleModalUsername();
        }}
        withBackIcon
        onBack={() => history.push('/quran/')}
      />

      <BottomNavigator />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="text-center bg-primary h-36 w-full rounded-3xl flex flex-col items-center overflow-hidden relative ">
            <img
              src={ILBackground2}
              alt="Dzikir Background"
              className="w-full h-full object-cover"
            />
            <div className=" absolute inset-0 flex flex-col justify-center py-2 px-20">
              {/* <Text as="h1" variant="title" text="Al-Fatihah" /> */}
              <p className="text-white text-xl font-medium">{surahDetail.name_simple || ''}</p>
              <p className="text-white text-sm font-normal">
                {surahDetail.translated_name.name || ''}
              </p>
              <div className=" absolute bottom-4 right-0 left-0 text-center">
                <p className="text-white text-xs">
                  {surahDetail.revelation_place || ''} - {surahDetail.verses_count} ayat
                </p>
              </div>
            </div>
          </div>
          <Gap width="8px" height="40px" />
          <section className=" flex flex-col">
            {[1, 2, 3, 4, 5].map((item) => (
              <VersesItem key={item} />
            ))}
          </section>
        </>
      )}
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

ReadingQuran.propTypes = {
  auth: PropTypes.any,
  editDzikir: PropTypes.func,
  logout: PropTypes.func,
  getSurah: PropTypes.func,
  quran: PropTypes.any,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  quran: state.quran,
});

const mapDispatchToProps = (dispatch) => ({
  editDzikir: (user, data) => dispatch(editData(user, data)),
  logout: (callback) => dispatch(logoutUser(callback)),
  getSurah: (id) => dispatch(getSurahById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadingQuran);
