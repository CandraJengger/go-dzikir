import React from 'react';
import { Button } from '../../components/atoms';
import { PlainLayout } from '../../components/organisms';

const SignInPage = () => {
  return (
    <PlainLayout>
      <div className="flex flex-col justify-center items-center">
        <Button text="Masuk" />
      </div>
    </PlainLayout>
  );
};

export default SignInPage;
