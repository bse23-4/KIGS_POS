import StoreMenu from 'renderer/components/StoreMenu';
import RightSidebar from 'renderer/Layout/components/RightSidebar';
import Layout from 'renderer/Layout/Layout';
// import icon from '../../../assets/icon.svg';

function Welcome() {
  return (
    <Layout>
      <StoreMenu />
      <RightSidebar />
    </Layout>
  );
}

export default Welcome;
