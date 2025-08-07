import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container" id="Footer">
      <div className="footer--link--container">
        {/* <div>
          <img src="./img/logo.svg" alt="Logoipsum" />
        </div> */}
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="mailto:shalakas@usc.edu"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                {/* Email Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/ShalakaSonawane1"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.26C2 16.53 4.87 20.14 8.84 21.5C9.34 21.59 9.5 21.29 9.5 21.04C9.5 20.82 9.49 20.2 9.49 19.46C6.73 20.09 6.14 18.13 6.14 18.13C5.68 16.9 5.03 16.58 5.03 16.58C4.12 15.94 5.1 15.95 5.1 15.95C6.11 16.02 6.63 17.07 6.63 17.07C7.53 18.68 9.03 18.2 9.61 17.94C9.7 17.3 9.96 16.87 10.24 16.63C7.95 16.38 5.53 15.5 5.53 11.77C5.53 10.69 5.93 9.84 6.59 9.19C6.49 8.94 6.13 7.95 6.69 6.57C6.69 6.57 7.56 6.29 9.5 7.6C10.33 7.37 11.23 7.26 12.13 7.26C13.03 7.26 13.93 7.37 14.76 7.6C16.7 6.29 17.57 6.57 17.57 6.57C18.13 7.95 17.77 8.94 17.67 9.19C18.33 9.84 18.73 10.69 18.73 11.77C18.73 15.51 16.3 16.38 14 16.62C14.36 16.91 14.69 17.48 14.69 18.34C14.69 19.56 14.67 20.65 14.67 21.04C14.67 21.29 14.83 21.6 15.33 21.5C19.3 20.13 22.17 16.52 22.17 12.26C22.17 6.58 17.7 2 12 2Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>


            <li>
              <a
                href="https://www.linkedin.com/in/shalakasonawane01/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
