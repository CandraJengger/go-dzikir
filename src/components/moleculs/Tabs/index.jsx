import React from 'react';
import { useHistory } from 'react-router-dom';
import { TabItem } from '../../atoms';

function Tabs() {
  const history = useHistory();
  return (
    <div className="fixed bottom-5 right-10 left-10 py-3 px-9 bg-secondary shadow-md rounded-xl flex justify-around">
      <TabItem type="home" onClick={() => history.push('/')} />
      <TabItem type="book" onClick={() => history.push('/quran')} />
    </div>
  );
}
export default Tabs;
