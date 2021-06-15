import React from "react";

function Footer() {
    return (
    <footer role="contentinfo" className="footer">
        <div className="row">
          <ul className="footer__social-links">
            <li>
              <a href="https://github.com/almurawski15" title="Link to Github Profile">
                <img src="./public/assets/github.svg" className="footer__social-image" alt="Github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/alexandra-murawski-8a312769/" title="Link to LinkedIn Profile">
                <img src="./public/assets/linkedin.svg" className="footer__social-image" alt="Github" />
              </a>
            </li>   
          </ul>
          <br />
        </div></footer>    
    );
}

export default Footer;