import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';

import { headData } from '../mock/data';
import '../style/main.scss';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default () => {
  const { lang } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <section id="hero" className="jumbotron">
        <Container>
          <Fade cascade bottom duration={1000} delay={500} distance="30px">
            <Viewer fileUrl="./PatrickLehmannResume.pdf" />
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
      </Worker>
    </>
  );
};
