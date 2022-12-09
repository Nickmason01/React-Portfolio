import React from "react";
import "../styles/navBar.css";

const styles = {
  navbarStyle: {
    background: "#FFFAFF",
    fontColor: "#edca82",
    alignItems: "right",
    hover: "#D8315B",
  },
  navStyle: {
    justifyContent: "flex-end",
    opacity: "50",
  },
  pStyle: {
    cursor: "pointer"
  },
};

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul style={styles.navStyle} className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z" />
          </svg>
        </a>
      </li>
      <li className="nav-item">
        <p style={styles.pStyle}
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </p>
      </li>
      <li className="nav-item">
        <p style={styles.pStyle}
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </p>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavBar;

// function showNavbar({currentPage, handlePageChange}) {
//   return (
//     <Navbar style={styles.navStyle} expand="lg" className = 'navbar'>
//       <Container style={styles.navbarStyle} className = "navbar">
//         <Navbar.Brand href="/">
//         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z"/></svg>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/About" onClick={() => handlePageChange('About')}
//             className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</Nav.Link>
//             <Nav.Link href="/resume">Resume</Nav.Link>
//             <NavDropdown title="Projects" id="basic-nav-dropdown">
//               <NavDropdown.Item href="/Project-1">Project-1</NavDropdown.Item>
//               <NavDropdown.Item href="/Project-2">
//                 Project-2
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Project-3">Project-3</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
