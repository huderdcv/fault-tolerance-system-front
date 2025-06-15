import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeContentMain } from './components/HomeContentMain';
import { SocialSidebar } from './components/SocialSidebar';

function App() {
  return (
    <>
      {/* <!-- home
    ================================================== --> */}
      <main class="s-home s-home--particles">
        <div id="particles-js" class="home-particles"></div>

        <div class="gradient-overlay"></div>

        <div class="home-content">
          <Header />

          <HomeContentMain />

          <SocialSidebar />

          <Footer />

          <div class="home-content__line"></div>
        </div>
        {/* <!-- end home-content --> */}
      </main>
      {/* <!-- end s-home --> */}

      {/* <!-- info */}
      {/* ================================================== --> */}
      <a class="info-toggle" href="#0">
        <span class="info-menu-icon"></span>
      </a>

      {/* <!-- end s-info --> */}

      {/* <!-- preloader */}
      {/* ================================================== --> */}
      <div id="preloader">
        <div id="loader">
          <div class="line-scale-pulse-out">
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
