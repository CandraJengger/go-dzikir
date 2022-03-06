import React, { useEffect, useState, useRef } from 'react';
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
  FloatingActionButton,
} from '../../components';
import { BANNER } from '../../constants/general';
import { editData, logoutUser } from '../../redux/actions/auth';
import { ICArrowTop, ILBackground2 } from '../../assets/images';
import { getSurahById } from '../../redux/actions/quran';
import groupingIntoPartsOfTheSurah from '../../helpers/groupingIntoPartsOfTheSurah';

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
  const [showFAB, setShowFAB] = useState(false);
  const audioRef = useRef();

  const { translations: translationsOfSurah, audios: audiosOfSurah } =
    groupingIntoPartsOfTheSurah(currentReading);

  const handleToggleModalUsername = () => {
    editDzikir(data, { key: 'name', value: userName });
    setOpenModalUsername(!openModalUsername);
  };

  const handleChangeUsername = (e) => setUserName(e.target.value);

  const onLogout = () => {
    logout(() => history.replace('/login'));
    sessionStorage.removeItem(BANNER);
  };

  const handleScroll = () => {
    if (window.scrollY > 220) {
      setShowFAB(true);
    } else {
      setShowFAB(false);
    }
  };

  const handlePlayPauseAudio = (index) => {
    audioRef.current.src = audiosOfSurah[index].audio;
  };

  const onScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // set window
    window.scrollTo(0, 0);
    if (surahDetail.id) {
      getSurah(surahDetail.id);
    }

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
        withBackIcon
        onBack={() => history.push('/quran/')}
      />

      <BottomNavigator />
      {showFAB && (
        <FloatingActionButton
          Icon={<img src={ICArrowTop} alt="Arrow top" />}
          onClick={onScrollToTop}
        />
      )}

      {audiosOfSurah[0] && <audio ref={audioRef} />}
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
              <p className=" font-roboto text-white text-xl font-medium">
                {surahDetail.name_simple || ''}
              </p>
              <p className=" font-roboto text-white text-sm font-normal">
                {surahDetail.translated_name.name || ''}
              </p>
              <div className=" absolute bottom-4 right-0 left-0 text-center">
                <p className=" font-roboto text-white text-xs">
                  {surahDetail.revelation_place || ''} - {surahDetail.verses_count} ayat
                </p>
              </div>
            </div>
          </div>
          <Gap width="8px" height="40px" />
          <section className=" flex flex-col">
            {audiosOfSurah.length > 0 &&
              translationsOfSurah.length > 0 &&
              audiosOfSurah?.map((item, index) => (
                <VersesItem
                  key={item.number}
                  audio={item}
                  handlePlayPauseAudio={() => handlePlayPauseAudio(index)}
                  translation={translationsOfSurah[index]}
                  numberOfAyahs={audiosOfSurah.length}
                  audioRef={audioRef}
                  number={index}
                />
              ))}
          </section>
          <Gap width="8px" height="80px" />
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
