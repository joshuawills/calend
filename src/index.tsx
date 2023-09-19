import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './pages/private/Dashboard';
import Calendar from './pages/private/Calendar';
import Board from './pages/private/Board';
import Deadlines from './pages/private/Deadlines';
import Profile from './pages/private/Profile';
import LoginPage from './pages/public/LoginPage';
import SignupPage from './pages/public/SignupPage';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './pages/public/forgotPassword';
import Home from './pages/public/Home';

const initialState = {
  isDarkMode: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

const globalContext = createStore(reducer);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={globalContext}>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          <Route path="/board" element={<PrivateRoute><Board /></PrivateRoute>} />
          <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
          <Route path="/deadlines" element={<PrivateRoute><Deadlines /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  </Provider>
)
