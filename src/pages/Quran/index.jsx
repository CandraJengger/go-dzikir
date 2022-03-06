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
  Loading,
  FloatingActionButton,
} from '../../components';
import { BANNER } from '../../constants/general';
import { editData, logoutUser } from '../../redux/actions/auth';
import { getJuz, getSurah } from '../../redux/actions/quran';
import { ICArrowTop } from '../../assets/images';
// import PrivateRoutes from '../../routes/PrivateRoutes';
// import ReadingQuran from '../ReadingQuran';

function Quran({
  auth: { data },
  quran: { dataByJuz, dataBySurah, loading },
  getDataByJuz,
  getDataBySurah,
  editDzikir,
  logout,
}) {
  const history = useHistory();

  const [openModalUsername, setOpenModalUsername] = useState(false);
  const [userName, setUserName] = useState(data?.name);
  const [showFAB, setShowFAB] = useState(false);

  const handleToggleModalUsername = () => {
    editDzikir(data, { key: 'name', value: userName });
    setOpenModalUsername(!openModalUsername);
  };

  const handleChangeUsername = (e) => setUserName(e.target.value);

  const onLogout = () => {
    logout(() => history.replace('/login'));
    sessionStorage.removeItem(BANNER);
  };

  const onClickSurahOrJuz = (id = 1, detail = {}) => {
    history.push(`/quran/type?surah=${id}`, detail);
  };

  const onScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    if (window.scrollY > 220) {
      setShowFAB(true);
    } else {
      setShowFAB(false);
    }
  };
  useEffect(() => {
    getDataByJuz();
    getDataBySurah();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      {showFAB && (
        <FloatingActionButton
          Icon={<img src={ICArrowTop} alt="Arrow top" />}
          onClick={onScrollToTop}
        />
      )}
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text as="h1" variant="title" text="Al-Quran" />
          <Gap height="20px" width="10px" />
          <Tabs>
            <TabList className="rounded-lg max-w-max mx-auto mb-4">
              <Tab className=" font-roboto px-5 py-3 inline-flex justify-center items-center text-sm font-medium">
                Tampilkan Surat
              </Tab>
              <Tab className=" font-roboto px-5 py-3 inline-flex justify-center items-center text-sm font-medium">
                Tampilkan Juz
              </Tab>
            </TabList>

            <TabPanel>
              <section className="flex flex-col">
                {dataBySurah.map((item) => (
                  <SurahItem
                    key={item.id}
                    number={item.id}
                    surah={item.name_simple}
                    nameArabic={item.name_arabic}
                    verses={item.verses_count}
                    translatedName={item.translated_name.name}
                    onClick={() => onClickSurahOrJuz(item.id, item)}
                  />
                ))}
                <Gap height="60px" width="10px" />
              </section>
            </TabPanel>
            <TabPanel>
              <section className="flex flex-col">
                {dataByJuz.map((item) => (
                  <JuzItem
                    key={item.id}
                    number={item.juz_number}
                    juz={item.juz_number}
                    verses={item.verses_count}
                  />
                ))}
                <Gap height="60px" width="10px" />
              </section>
            </TabPanel>
          </Tabs>
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

Quran.propTypes = {
  auth: PropTypes.any,
  editDzikir: PropTypes.func,
  logout: PropTypes.func,
  quran: PropTypes.any,
  getDataByJuz: PropTypes.func,
  getDataBySurah: PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  quran: state.quran,
});

const mapDispatchToProps = (dispatch) => ({
  editDzikir: (user, data) => dispatch(editData(user, data)),
  logout: (callback) => dispatch(logoutUser(callback)),
  getDataByJuz: () => dispatch(getJuz()),
  getDataBySurah: () => dispatch(getSurah()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quran);
