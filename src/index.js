import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/UserContext';
import { FormStepProvider } from './contexts/FormStepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
        <FormStepProvider>
          <App />
        </FormStepProvider>
      </UserProvider>
  </React.StrictMode>
);
