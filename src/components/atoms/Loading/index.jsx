import React from 'react';

function Loading() {
  return (
    <div className=" absolute inset-0 flex justify-center items-center z-0">
      <svg
        className="animate-bounce h-7 w-7 mr-3 bg-primary rounded-full shadow-xl"
        viewBox="0 0 28 28"
      />
    </div>
  );
}

export default Loading;
