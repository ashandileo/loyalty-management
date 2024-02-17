import Footer from '../Footer';
import Header from '../Header';
import { IHomeLayout } from './Interface';

const HomeLayout = ({ children }: IHomeLayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
