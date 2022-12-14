import React from "react";
import Footer from "../Footer";
import Header from "../Header";

interface childProp {
  children?: any;
}
const Layout: React.FC<childProp> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
