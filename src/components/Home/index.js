import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState('Идет загрузка...');
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/home');
      const json = await response.json();
      setData(JSON.stringify(json));
    })();
  }, []);
  return <h1>ЧУИ МЫ ДОМА</h1>;
}
