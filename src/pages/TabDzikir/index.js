import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  AppBar,
  Button,
  Gap,
  Input,
  List,
  ListItem,
  Modal,
  PlainLayout,
  TabCount,
  Text,
} from '../../components';
import dataDzkir from '../../data';
import { GlobalContext } from '../../context/Provider';
import { nanoid } from 'nanoid';
import addData from '../../context/actions/addData';
import { BANNER } from '../../constants/general';
import logoutUser from '../../context/actions/logoutUser';
import editData from '../../context/actions/editData';
import getUser from '../../context/actions/getUser';

const TabDzikirPage = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();
  const {
    authState: { data },
    authDispatch,
  } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [lafadz, setLafadz] = useState({});
  const [total, setTotal] = useState(0);
  const [openModalUsername, setOpenModalUsername] = useState(false);
  const [userName, setUserName] = useState(data?.name);

  const handleToggleModalUsername = () => {
    editData(data, { key: 'name', value: userName })(authDispatch);
    setOpenModalUsername(!openModalUsername);
  };

  const handleOpenTabCount = () => {
    setOpen(!open);
  };
  const handleChangeUsername = (e) => setUserName(e.target.value);

  const onLogout = () => {
    logoutUser()(authDispatch)(() => history.replace('/login'));
    sessionStorage.removeItem(BANNER);
  };

  const handleCloseTabCount = () => {
    if (open) {
      if (count > 0) {
        setCount(0);

        const dzikir = {
          id: nanoid(),
          dzikir: lafadz?.header,
          time: new Date(),
          count,
        };

        addData(data, dzikir)(authDispatch);
      }

      const newData =
        data?.data.length > 0
          ? data?.data.filter((item) => item.dzikir === lafadz?.header)
          : [];

      const totalOfCategories =
        newData.length > 0
          ? newData.reduce((acc, curr) => ({ count: acc.count + curr.count }))
          : 0;

      setTotal(totalOfCategories.count);
      setOpen(!open);
    }
  };
  const handleIncrement = () => setCount((prevCount) => prevCount + 1);

  useEffect(() => {
    const filterDzikir = dataDzkir.filter((item) => parseInt(id) === item.id);
    setLafadz(filterDzikir[0]);

    const newData =
      data?.data.length > 0
        ? data?.data.filter((item) => item.dzikir === lafadz?.header)
        : [];

    const totalOfCategories =
      newData.length > 0
        ? newData.reduce((acc, curr) => ({ count: acc.count + curr.count }))
        : 0;

    setTotal(totalOfCategories.count);

    // set window
    window.scrollTo(0, 0);
  }, [id, data?.data, lafadz?.header]);

  return (
    <PlainLayout>
      <AppBar
        name={data?.name || 'Fulan'}
        onClickImage={() => {
          handleToggleModalUsername();
        }}
        withBackIcon
        onBack={() => history.push('/')}
      />

      <section onClick={handleCloseTabCount}>
        <Text variant="label" text="Lafadz" />
        <Gap height="18px" width="20px" />
        <div className="text-right mb-4">
          <Text variant="text-arabic" text={lafadz?.arabic} />
          <Gap height="8px" width="20px" />
          <Text variant="text-dark" text={lafadz?.arabic_read} />
        </div>
        <Text variant="text-grey" text={lafadz?.translation} />

        <Gap height="18px" width="20px" />

        <Button text="Mulai" onClick={handleOpenTabCount} />
      </section>

      <Gap height="42px" width="20px" />

      <section>
        <Text variant="label" text="Hari ini" />
        <Gap height="8px" width="20px" />
        <List data={data?.data} category={lafadz?.header} />
      </section>

      <Gap height="32px" width="20px" />

      <section>
        <Text variant="label" text="Total" />
        <Gap height="18px" width="20px" />
        <ListItem
          title={lafadz.header}
          label={total ? `${total}x` : '0x'}
          variant="rounded"
        />
      </section>

      <TabCount open={open} count={count} onTab={handleIncrement} />

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
        <div>
          <Text variant="label" text="Apakah anda ingin keluar ?" />
          <Gap height="16px" width="10px" />
          <Button variant="secondary" text="Ya, keluar" onClick={onLogout} />
        </div>
      </Modal>
    </PlainLayout>
  );
};

export default withRouter(TabDzikirPage);
