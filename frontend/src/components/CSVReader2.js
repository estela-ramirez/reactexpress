import React from 'react';
import { usePapaParse } from 'react-papaparse';

export default function ReadRemoteFile() {
  const { readRemoteFile } = usePapaParse();

  const handleReadRemoteFile = () => {
    // eslint-disable-next-line no-undef
    readRemoteFile("https://tinyurl.com/3x25ah9d", {
      complete: (results) => {
        console.log('---------------------------');
        console.log('Results:', results);
        console.log('---------------------------');
      },
    });
  };

  return <button onClick={() => handleReadRemoteFile()}>readRemoteFile</button>;
}