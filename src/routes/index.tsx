import { createBrowserRouter } from 'react-router-dom';

import Signin from './Signin';

const router = createBrowserRouter([
  {
    path: '/Signin',
    element: <Signin />
  }
]);

export default router;
