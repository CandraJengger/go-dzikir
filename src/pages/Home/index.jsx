import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Gap,
  Input,
  List,
  ListItem,
  Modal,
  PlainLayout,
  BottomNavigator,
  Text,
} from '../../components';
import { formatName } from '../../helpers/name';
import { BANNER } from '../../constants/general';
import { editData, logoutUser } from '../../redux/actions/auth';
import { ILDashboard, ILHijab } from '../../assets/images';

function HomePage({ auth: { data }, editDzikir, logout }) {
  const history = useHistory();

  const [openModalRecent, setOpenModalRecent] = useState(false);
  const [openModalWelcome, setOpenModalWelcome] = useState(false);
  const [openModalUsername, setOpenModalUsername] = useState(false);
  const [userName, setUserName] = useState(data?.name);
  const [total, setTotal] = useState(0);

  const handleToggleModalUsername = () => {
    editDzikir(data, { key: 'name', value: userName });
    setOpenModalUsername(!openModalUsername);
  };

  const handleToggleModalRecent = () => setOpenModalRecent(!openModalRecent);

  const handleModalWelcome = () => {
    setOpenModalWelcome(false);
    sessionStorage.setItem(BANNER, true);
  };

  const handleChangeUsername = (e) => setUserName(e.target.value);

  const onLogout = () => {
    logout(() => history.replace('/login'));
    sessionStorage.removeItem(BANNER);
  };

  useEffect(() => {
    // set window
    window.scrollTo(0, 0);

    if (!sessionStorage.getItem(BANNER)) {
      setOpenModalWelcome(true);
    } else {
      setOpenModalWelcome(false);
    }

    const totalOfCategories =
      data?.data.length > 0
        ? data?.data.reduce((acc, curr) => ({ count: acc.count + curr.count }))
        : 0;

    setTotal(totalOfCategories.count);
  }, [data?.data]);

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

      <Text as="h1" variant="text-grey" text="Assalamu'alaikum," />
      <Text as="h2" variant="title" text={formatName(data?.name || 'Fulan')} />
      <Gap height="20px" width="10px" />

      <section className="block relative h-48">
        <img src={ILDashboard} alt="Dzikir Background" className="w-full h-full object-center" />
        <div className="flex flex-col justify-center items-center absolute inset-0">
          <Text variant="dash-title" text="Total" />
          <Text variant="dash-body" text={total ? `${total}x` : '0x'} />
          <Text variant="dash-caption" text="dzikir anda hari ini" />
        </div>
      </section>

      <Gap height="28px" width="10px" />

      <section>
        <div className="flex justify-between items-end">
          <Text as="h3" variant="label" text="Yang baru anda baca" />
          <Text as="a" variant="tiny" text="Lihat semua" onClick={handleToggleModalRecent} />
        </div>
        <Gap height="16px" width="10px" />

        <ListItem
          title={data?.data[data.data.length - 1]?.dzikir || 'Belum ada'}
          label={`${data?.data[data.data.length - 1]?.count || '0'}x`}
          variant="rounded"
        />
      </section>

      <Gap height="28px" width="10px" />

      <section>
        <Text as="h3" variant="label" text="Kumpulan Dzikir" />
        <Gap height="16px" width="16px" />
        <div className="grid grid-cols-6 grid-rows-3 gap-2">
          <div className="col-start-1 col-end-4">
            <Button
              variant="secondary"
              text="Istighfar"
              onClick={() => history.push('/tab-dzikir/1')}
            />
          </div>
          <div className="col-start-4 col-end-7">
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
          <div className="col-start-1 col-end-7">
            <Button
              variant="secondary"
              text="Subhanallah walhamdulillah"
              onClick={() => history.push('/tab-dzikir/6')}
            />
          </div>
        </div>
      </section>

      <Gap height="60px" width="10px" />

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

      {/* Welcome */}
      <Modal onToggle={handleModalWelcome} open={openModalWelcome}>
        <div className="flex flex-col items-center text-center py-6">
          <div className="mx-auto mb-4" style={{ maxWidth: '186px' }}>
            <img src={ILHijab} alt="Ilustrasi jangan lupa dzikir" />
          </div>
          <Gap height="16px" width="20px" />

          <Text
            variant="label"
            text='"Hendaklah lisanmu selalu basah untuk berdzikir pada Allah"'
          />
        </div>
      </Modal>

      {/* List recent read */}
      <Modal onToggle={handleToggleModalRecent} open={openModalRecent}>
        <Text variant="label" text="Yang anda baca hari ini" />
        <Gap height="16px" width="10px" />
        <List data={data?.data} category="all" />
      </Modal>
    </PlainLayout>
  );
}

HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
