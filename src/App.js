import './App.css';
import HomePage from './TextEditorFold/HomePage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { SnackbarProvider } from 'notistack';

function App() {
  return (<>
  <SnackbarProvider maxSnack={3} style={{ fontSize: '16px' }}>
    <HomePage/>
  </SnackbarProvider>
  </>);
}

export default App;
