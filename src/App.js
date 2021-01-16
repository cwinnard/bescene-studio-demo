import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ContentArea from './ContentArea';
import Header from './Header';
import TopContent from './components/top/TopContent';
import BottomContent from './components/bottom/BottomContent';


const theme = createMuiTheme({
  palette: {
    darkBackground: {
      main: '#16181D'
    }
  },
  typography: {
    h6: {
      fontSize: '14px',
      color: 'lightgrey'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContentArea>
        <Header />
        <TopContent />
        <BottomContent />
      </ContentArea>
    </ThemeProvider>
  );
}

export default App;
