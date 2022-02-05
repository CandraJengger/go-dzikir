import React from 'react';
import { useHistory } from 'react-router-dom';
import { TabItem } from '../../atoms';

function BottomNavigator() {
  const history = useHistory();
  return (
    <div className="fixed bottom-5 right-10 left-10 py-3 px-9 bg-secondary shadow-md rounded-xl flex justify-around max-w-sm mx-auto">
      <TabItem type="home" onClick={() => history.replace('/')} />
      <TabItem type="book" onClick={() => history.replace('/quran')} />
    </div>
  );
}
export default BottomNavigator;
