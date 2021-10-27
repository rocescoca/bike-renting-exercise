import React from "react";
import { Switch } from "react-router-dom";
//
import Menu from "ui/components/menu";
//
import styles from "./layout.module.scss"; // Import css modules stylesheet as styles

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <header className="bg-light rounded p-3 mb-3 mb-md-0">
              <Menu />
            </header>
          </div>
          <div className="col-12 col-md-9">
            <main className="bg-light rounded p-3">
              <Switch> {children}</Switch>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
