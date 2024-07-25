import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/common/Header';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AppAbout from './components/pages/about';
import AppContact from './components/pages/contact';
import AppFaq from './components/pages/faq';
import AppShop from './components/pages/shop';
import AppHome from './components/pages/home';
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/footerCopyright';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <Router>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<AppHome />} />
              <Route path='/About' element={<AppAbout />} />
              <Route path='/Shop' element={<AppShop />} />
              <Route path='/Faq' element={<AppFaq />} />
              <Route path='/Contact' element={<AppContact />} />
            </Routes>
          </Content>
        </Router>

        <Footer>
          <FooterWidget />
          <FooterCopyright />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
