import React from 'react';
import { Button, Gap, Input, Text } from '../../components/atoms';
import { PlainLayout } from '../../components/organisms';
import HijabVector from '../../assets/images/hijab.png';

const SignInPage = () => {
  return (
    <PlainLayout>
      <div className="h-screen flex flex-col justify-center items-center">
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
        <Input placeholder="Masukan nama anda" />
        <Gap height="35px" width="20px" />
        <Button text="Masuk" />
      </div>
    </PlainLayout>
  );
};

export default SignInPage;
