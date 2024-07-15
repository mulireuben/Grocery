import Hero from '../home/hero';
import Information from '../home/information';
import RecentProduct from '../home/recentProduct';
function AppHome() {
  return (
    <div className='container'>
      <Hero />
      <RecentProduct />
      <Information />
    </div>
  );
}

export default AppHome;
