import StoreMenu from 'renderer/components/StoreMenu';
// import RightSidebar from 'renderer/Layout/components/RightSidebar';
import Layout from 'renderer/Layout/Layout';
import AddProduct from './AddProduct';
// import icon from '../../../assets/icon.svg';

function Welcome() {
  return (
    <Layout>
      <StoreMenu />
      <AddProduct />
    </Layout>
  );
}

export default Welcome;
