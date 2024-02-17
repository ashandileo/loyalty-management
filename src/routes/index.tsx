import { createBrowserRouter } from 'react-router-dom';

import Signin from './Signin';
import Signup from './Signup';

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <Signin />
  },
  {
    path: '/sign-up',
    element: <Signup />
  }
]);

export default router;
