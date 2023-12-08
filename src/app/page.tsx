import Script from "next/script";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <!--================ Start Home Banner Area =================--> */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hallo</h3>
                  <h1 className="text-uppercase">Ich bin anderas</h1>
                  <h5 className="text-uppercase">web developer</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#">
                      <span>Hire Me</span>
                    </a>
                    <a className="primary_btn tr-bg" href="#">
                      <span>Get CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className="" src="img/banner/home-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Home Banner Area =================--> */}
      {/* <!--================ Start About Us Area =================--> */}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src="img/about-us.png" alt="" />
              </div>
            </div>

            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>
                  Über mich
                  <br />
                </h2>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Ich bin Andreas, ein Fullstack-Entwickler aus Österreich. Meine Expertise liegt in
                  der Entwicklung von Websites, Webapps und Mobile-Apps. Derzeit arbeite ich als
                  externer Freelancer für ein renommiertes Unternehmen in Österreich. Zusätzlich
                  unterstütze ich kleine und mittlere Unternehmen sowie Privatpersonen in ihrer
                  Vision, digitale Produkte zu erschaffen und umzusetzen.
                </p>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Für mich steht eine angenehme und unkomplizierte Zusammenarbeit sowie persönlicher
                  Austausch an erster Stelle. Dadurch bin ich in der Lage, optimal auf deine Wünsche
                  einzugehen. Wenn du einen erfahrenen Entwickler suchst, der mit Leidenschaft und
                  Engagement bei der Sache ist, zögere nicht, mich zu kontaktieren.
                </p>
                {/* <a className="primary_btn" href="#">
                  <span>Download CV</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End About Us Area =================--> */}
      {/* <!--================ Srart Brand Area =================--> */}
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/react.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/vuejs.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/angular.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/flutter.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/django.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/docker.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/ionic.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/skills/python.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="img/brands/logo9.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span className="lage">x7</span>
                  <span className="smll">Jahre Branchen Erfahrung</span>
                </div>
                <div className="call-now d-flex">
                  <div>
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="ml-15">
                    <p>Telefon</p>
                    <h3>(+43)-676-945-7566</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Brand Area =================--> */}
      {/* <!--================ Start Features Area =================--> */}
      <section className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>Service Angebot </h2>
                <p>
                  Mit meiner Erfahrung im Grafikdesign und SEO kann ich dir helfen, dein Produkt von
                  Anfang bis Ende zu gestalten und zu optimieren. Das beinhaltet sowohl das Design
                  der Benutzeroberfläche (UX/UI) als auch die eigentliche Entwicklung, abgerundet
                  mit SEO-Optimierungen, damit dein Produkt nicht nur gut aussieht, sondern auch
                  leicht im Internet gefunden werden kann.
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s2.png" alt="" />
                <h4>UI/ux design</h4>
                <p>Gestaltung von coolen und benuterfreundlichen Frontend User Interfaces.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s1.png" alt="" />
                <h4>Web Design</h4>
                <p>Design und Entwicklung von state-of-the-art Websites und Web-Apps.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s3.png" alt="" />
                <h4>Mobile Apps</h4>
                <p>Gestaltung und Entwicklung ansprechender Apps für iOS und Android.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="img/services/s4.png" alt="" />
                <h4>SEO Optimierung</h4>
                <p>
                  Google Optimierungen für eine verbesserte Auffindbarkeit in der großen digitalen
                  Welt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Features Area =================--> */}
      {/* <!--================Start Portfolio Area =================--> */}
      <section className="portfolio_area" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>Meine jüngsten Projekte</h2>
              </div>
            </div>
          </div>
          {/* <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">
                all
              </li>
              <li data-filter=".popular">popular</li>
              <li data-filter=".latest"> latest</li>
              <li data-filter=".following">following</li>
              <li data-filter=".upcoming">upcoming</li>
            </ul>
          </div> */}

          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p2.png" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p2.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Cyberbelt</a>
                    </h4>
                    <p>React, Tailwind</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p1.png" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p1.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Studio Of Arts</a>
                    </h4>
                    <p>Flutter, iOS & Android</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p3.png" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p3.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">aiEndoscopic</a>
                    </h4>
                    <p>React, NextJS, Tailwind </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p4.png" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p4.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">Bookingdoc</a>
                    </h4>
                    <p>ASP.NET Core, JavaScript, Bootstrap</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p6.png" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p6.png" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">om MATapp</a>
                    </h4>
                    <p>Flutter, iOS & Android</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p5.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p5.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">multiply fowl</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p7.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p7.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">green heaven</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all following">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p8.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p8.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>fly male</h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all upcoming">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p9.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p9.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross"></span>
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="portfolio-details.html">season face</a>
                    </h4>
                    <p>Animated, portfolio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================End Portfolio Area =================--> */}
      {/* <!--================ Start Testimonial Area =================--> */}
      <div className="testimonial_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>client say about me</h2>
                <p>
                  Is give may shall likeness made yielding spirit a itself togeth created after sea
                  is in beast <br />
                  beginning signs open god you&apos;re gathering ithe
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="testi_slider owl-carousel">
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>
                        Him, made can&apos;t called over won&apos;t there on divide there male fish
                        beast own his day third seed sixth seas unto. Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>
                        Him, made can&apos;t called over won&apos;t there on divide there male fish
                        beast own his day third seed sixth seas unto. Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>
                        Him, made can&apos;t called over won&apos;t there on divide there male fish
                        beast own his day third seed sixth seas unto. Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>
                        Him, made can&apos;t called over won&apos;t there on divide there male fish
                        beast own his day third seed sixth seas unto. Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t1.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Elite Martin</h4>
                      <p>
                        Him, made can&apos;t called over won&apos;t there on divide there male fish
                        beast own his day third seed sixth seas unto. Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testi_item">
                <div className="row">
                  <div className="col-lg-4">
                    <img src="img/testimonials/t2.jpg" alt="" />
                  </div>
                  <div className="col-lg-8">
                    <div className="testi_text">
                      <h4>Davil Saden</h4>
                      <p>
                        Him, made can&apos;t called over won&apos;t there on divide there male fish
                        beast own his day third seed sixth seas unto. Saw from{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--================ End Testimonial Area =================--> */}z
    </>
  );
}
