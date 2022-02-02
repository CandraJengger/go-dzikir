import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Gap, Input, Text } from '../../components/atoms';
import { PlainLayout } from '../../components/organisms';
import HijabVector from '../../assets/images/hijab.png';
import { BANNER } from '../../constants/general';
import { loginUser } from '../../redux/actions/auth';

function SignInPage({ login }) {
  const history = useHistory();

  const [name, setName] = useState('');

  const [isMobile, setIsMobile] = useState(false);

  const start = () => {
    if (name !== '') {
      login(name, () => history.replace('/'));
    }
  };

  useEffect(() => {
    sessionStorage.removeItem(BANNER);

    if (window.innerWidth > 512) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return isMobile ? (
    <PlainLayout className="flex flex-col justify-end">
      <div className=" h-full flex flex-col justify-center items-center">
        <div style={{ maxWidth: '186px' }}>
          <img src={HijabVector} alt="Ilustrasi jangan lupa dzikir" />
        </div>
        <div className="text-center">
          <Gap height="14px" width="20px" />

          <Text as="h1" text="Sudah berdzikirkah" variant="superTitle" />
          <Text as="h1" text="anda hari ini ?" variant="superTitle" />
          <Gap height="16px" width="20px" />

          <Text text="Catat dzikirmu setiap hari." />
          <Gap height="37px" width="20px" />
        </div>
        <Input
          placeholder="Masukan nama anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Gap height="35px" width="20px" />
        <Button text="Masuk" onClick={start} />
      </div>
    </PlainLayout>
  ) : (
    <PlainLayout className="flex flex-col justify-center items-center">
      <div className=" w-64 text-center">
        <Text variant="superTitle" text="OOPS !!" />
        <Gap height="18px" width="10px" />
        <Text text="Kelihatannya antum sedang menggunakan perangkat Desktop atau Tablet ya :).." />
        <Text text="Agar dapat menggunakan web apps ini, tolong antum buka melalui perangkat mobile. Syukron ^_^" />
      </div>
    </PlainLayout>
  );
}

SignInPage.propTypes = {
  login: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  login: (username, callback) => dispatch(loginUser(username, callback)),
});

export default connect(null, mapDispatchToProps)(SignInPage);
