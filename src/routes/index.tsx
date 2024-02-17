import { createBrowserRouter } from 'react-router-dom';

import History from './History';
import Home from './Home';
import Otp from './Otp';
import Signin from './Signin';
import Signup from './Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-in',
    element: <Signin />
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
  {
    path: '/otp',
    element: <Otp />
  },
  {
    path: '/history',
    element: <History />
  }
]);

export default router;
