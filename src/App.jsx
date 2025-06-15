import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeContentMain } from './components/HomeContentMain';
import { SocialSidebar } from './components/SocialSidebar';

function App() {
  return (
    <>
      {/* <!-- home
    ================================================== --> */}
      <main className="s-home s-home--particles">
        <div id="particles-js" className="home-particles"></div>

        <div className="gradient-overlay"></div>

        <div className="home-content">
          <Header />

          <HomeContentMain />

          <SocialSidebar />

          <Footer />

          <div className="home-content__line"></div>
        </div>
        {/* <!-- end home-content --> */}
      </main>
      {/* <!-- end s-home --> */}

      {/* <!-- info */}
      {/* ================================================== --> */}
      <a className="info-toggle" href="#0">
        <span className="info-menu-icon"></span>
      </a>

      {/* <!-- end s-info --> */}

      {/* <!-- preloader */}
      {/* ================================================== --> */}
      <div id="preloader">
        <div id="loader">
          <div className="line-scale-pulse-out">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
