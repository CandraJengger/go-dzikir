import React from 'react';
import { Gap, PlainLayout, Text } from '../../components';

const NoMatch = () => {
  return (
    <PlainLayout className="flex flex-col justify-center items-center">
      <div className=" w-64 text-center">
        <Text variant="superTitle" text="OOPS 404 Not Found !!" />
        <Gap height="18px" width="10px" />
        <Text text="Kelihatannya antum sedang membuka halaman yang tidak tersedia ^_^" />
      </div>
    </PlainLayout>
  );
};

export default NoMatch;
