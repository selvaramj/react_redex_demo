import React from 'react';
import './Footer.css';
const FooterSection = () => {
  return (
    <footer className='footer'>
      <nav className='footer-main-navigation'>
        <ul className='footer-nav-links'>
          <li>
            <a href='/faq'>FAQ</a>
          </li>
          <li>
            <a href='/glossary'>Glossary</a>
          </li>
          <li>
            <a href='/termAndCondition'>Terms & Conditions</a>
          </li>
          <li>
            <a href='/helpAndSupport'>Help & Support</a>
          </li>
        </ul>
        <ul className='social-media-links'>
          <li>
            <a href='/instagram'>
              <i class='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a href='/twitter'>
              <i class='fab fa-twitter-square'></i>
            </a>
          </li>
          <li>
            <a href='/facebook'>
              <i class='fab fa-facebook-square'></i>
            </a>
          </li>
          <li>
            <a href='/linkedIn'>
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
        </ul>
      </nav>
      <div></div>
      <div className='rights-reserved'>
        <p>20011-2022 @All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
