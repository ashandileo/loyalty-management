import Footer from '../Footer';
import Header from '../Header';
import { IHomeLayout } from './Interface';

const HomeLayout = ({ children, hideHeader = false }: IHomeLayout) => {
  return (
    <>
      {!hideHeader && <Header />}
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
