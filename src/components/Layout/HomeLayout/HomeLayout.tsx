import Footer from '../Footer';
import Header from '../Header/Header';
import { IHomeLayout } from './Interface';

const HomeLayout = ({ children, hideHeader, lightHeader }: IHomeLayout) => {
  return (
    <>
      {!hideHeader && <Header lightHeader={lightHeader} />}
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
