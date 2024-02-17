import { createBrowserRouter } from 'react-router-dom';

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
  }
]);

export default router;
