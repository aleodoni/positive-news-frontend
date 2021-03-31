import Header from 'components/Header';
import Footer from 'components/Footer';

import { InfoType } from '@/models/info';

const Layout: React.FC<InfoType> = ({ children, title, description, by }) => {
  return (
    <div
      className="
      flex
      max-w-5xl
      mx-auto"
    >
      <div
        className="
        flex
        flex-grow
        w-full
        flex-col"
      >
        <Header title={title} />
        <div className="flex flex-col px-4">{children}</div>
        <Footer description={description} by={by} />
      </div>
    </div>
  );
};

export default Layout;
