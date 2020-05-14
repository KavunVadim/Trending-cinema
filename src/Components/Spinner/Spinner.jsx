import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={styles.loader}>
      <Loader
        type="ThreeDots"
        color="#FF8C00"
        height={100}
        width={200}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spinner;
