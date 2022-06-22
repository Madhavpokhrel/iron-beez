import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
      <footer className="app__footer">
        <div className="app__footer-container"> 
            <div className="app__footer-row">
                <div className="app__footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">program</a></li>
                    </ul>
                </div>
                <div className="app__footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className="app__footer-col">
                    <h4>online shop</h4>
                    <ul>
                    <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className="app__footer-col">
                    <h4>follow us</h4>
                    <ul>
                    <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </footer>
  )
}

export default Footer