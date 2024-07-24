import Hero from '../home/hero';
import Information from '../home/information';
import ProductCategories from '../home/productCategories';
import RecentProduct from '../home/recentProduct';
import SaleProduct from '../home/saleProducts';
import TopBrands from '../home/topBrands';
function AppHome() {
  return (
    <div className='container'>
      <Hero />
      <RecentProduct />
      <Information />
      <ProductCategories />
      <SaleProduct />
      <TopBrands />
    </div>
  );
}

export default AppHome;
