import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App url="https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf" />
  </React.StrictMode>
);
