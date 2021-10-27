import React from "react";
import { NavLink } from "react-router-dom";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import styles from "./cta.module.scss"; // Import css modules stylesheet as styles

const Cta = ({ title, subtitle, buttonText, buttonIcon, linkTo, imgSrc }) => {
  return (
    <div className={styles.cta}>
      <img src={imgSrc} alt={title} />
      <div className="card text-center shadow">
        <div className="card-body">
          <h5 className="card-title fs-1">{title}</h5>
          <p className="card-text fs-3 mt-4 mb-4">{subtitle}</p>
          <NavLink to={linkTo} className="btn btn-primary btn-lg">
            <FontAwesomeIcon icon={buttonIcon} fixedWidth className="me-1" />
            {buttonText}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cta;
