import React from 'react';
import Dither from './src/components/common/Dither';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}>
      <Dither />
    </div>
  </React.StrictMode>
);
