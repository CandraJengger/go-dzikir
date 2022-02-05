import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
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
} from '../../components';
import { BANNER } from '../../constants/general';
import { editData, logoutUser } from '../../redux/actions/auth';

function ReadingQuran({ auth: { data }, editDzikir, logout }) {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);

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

      <Text as="h1" variant="title" text="Al-Quran" />

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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  editDzikir: (user, data) => dispatch(editData(user, data)),
  logout: (callback) => dispatch(logoutUser(callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadingQuran);
