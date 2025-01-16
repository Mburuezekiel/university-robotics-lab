import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#23408f'
    },
    copyright: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
  };

  return (
    <footer className="mt-4 text-center text-lg-start text-white" style={styles.footer}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4">
      </section>

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Logo Column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                University of Oulu Robotics Lab
              </h6>
              <p className="text-center">
                <i className="fa-3x text-white fas fa-robot"></i>
              </p>
            </div>

            {/* Address Column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p>
                <a href="#!" className="text-white text-decoration-none">Postal address</a>
              </p>
              <p className="mb-2">
                P.O.Box 8000<br />
                FI-90014 University of Oulu<br />
                university.of.oulu(at)oulu.fi<br />
                Tel. +358 294 48 0000
              </p>
              <p>
                <strong>Street address</strong><br />
                Pentti Kaiteran katu 1<br />
                Linnanmaa
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {['Contact Information', 'For the media', 'Subscribe to our newsletter',
                'University of Oulu Careers', 'Invoicing information'].map((link, index) => (
                <p key={index}>
                  <a href="#!" className="text-white text-decoration-none hover:text-opacity-80">
                    {link}
                  </a>
                </p>
              ))}
            </div>

            {/* Additional Links Column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {['Accessibility statement', 'Data privacy notice', 'Campuses',
                'Emergency and safety procedures', 'City of Oulu'].map((link, index) => (
                <p key={index}>
                  <a href="#!" className="text-white text-decoration-none hover:text-opacity-80">
                    {link}
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={styles.copyright}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-white text-decoration-none ms-1 fw-bold" href="#">
          University of Oulu Robotics Lab
        </a>
      </div>
    </footer>
  );
};

export default Footer;