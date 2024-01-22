import { ThemeProvider } from 'styled-components';

import { theme } from './styles/Theme.styles';
import GlobalStyles from './styles/Global.styles';

import StepIndicator from './components/StepIndicator/StepIndicator';
import Form from './components/Form/Form';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='app-wrapper'>
        <div className='form-card'>
          <StepIndicator />
          <Form />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
