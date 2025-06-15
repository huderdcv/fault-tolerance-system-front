function App() {
  return (
    <>
      {/* <!-- home
    ================================================== --> */}
      <main class="s-home s-home--particles">
        <div id="particles-js" class="home-particles"></div>

        <div class="gradient-overlay"></div>

        <div class="home-content">
          <div class="home-logo">
            <a href="index-particles.html">
              <img src="images/logo.svg" alt="Homepage" />
            </a>
          </div>

          <div class="row home-content__main">
            <div class="col-eight home-content__text pull-right">
              <h3>Página de inicio</h3>

              <div class="home-content__subscribe">
                <form id="mc-form" class="group" novalidate="true">
                  <input
                    type="email"
                    value=""
                    name="usuario"
                    class="usuario"
                    id="mc-email"
                    placeholder="Nombre de usuario"
                    required=""
                  />
                  <input type="submit" name="subscribe" value="Agregar" />
                  <label for="mc-email" class="subscribe-message"></label>
                </form>
              </div>
              <h1>Lista de usuarios</h1>

              <table>
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EMAIL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>13534FF3</td>
                    <td>Luis Sanchez</td>
                    <td>luis.sanchez@gmail.com</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>3R4EWR34</td>
                    <td>Carmen Huamán</td>
                    <td>carmen.rosa@gmail.com</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>34RE4TRED4</td>
                    <td>Pedro Ramirez</td>
                    <td>pedro.r@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!-- end home-content__text --> */}

            <div class="col-four home-content__counter">
              <h3>Solicitando a</h3>

              <div class="home-content__clock">
                <div class="top">
                  <div class="time days">
                    S1
                    <span>x</span>
                  </div>
                </div>
              </div>
              {/* <!-- end home-content__clock --> */}
            </div>
            {/* <!-- end home-content__counter --> */}
          </div>
          {/* <!-- end home-content__main --> */}

          <ul class="home-social">
            <li>
              <a href="#0">
                <i class="fab fa-facebook-f" aria-hidden="true"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i class="fab fa-twitter" aria-hidden="true"></i>
                <span>Twiiter</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i class="fab fa-instagram" aria-hidden="true"></i>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i class="fab fa-behance" aria-hidden="true"></i>
                <span>Behance</span>
              </a>
            </li>
            <li>
              <a href="#0">
                <i class="fab fa-dribbble" aria-hidden="true"></i>
                <span>Dribbble</span>
              </a>
            </li>
          </ul>
          {/* <!-- end home-social --> */}

          <div class="row home-copyright">
            <span>Copyright Count 2025</span>
            <span>
              Design by
              <a href="https://www.styleshout.com/">styleshout</a>
            </span>
          </div>
          {/* <!-- end home-copyright --> */}

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
