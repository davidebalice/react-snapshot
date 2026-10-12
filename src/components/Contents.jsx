import React from "react";
import classes from "./Contents.module.css";

const Contents = ({ title, message }) => {
  return (
    <>
      <div className={classes.hero}>
        <p className={classes.heroText}>
          Generate a snapshot of a webpage
          <br />
          with React and html2canvas
        </p>
      </div>

      <div className={classes.container}>
        <div className={`${classes.card} ${classes.card1}`}>
          <p className={classes.contentText}>
            Aliquip duis consequat eiusmod aliquip ipsum.
          </p>
          <div>
            <span className={classes.title}>{title}</span>
            <br />
            <span className={classes.message}>{message}</span>
          </div>
        </div>
        <div className={`${classes.card} ${classes.card2}`}>
          <p className={classes.contentText}>Et fugiat sed sit amet labore.</p>
        </div>
      </div>

      <div className={classes.container}>
        <div className={`${classes.card} ${classes.card3} ${classes.content1}`}>
          <p className={classes.contentText2}>
            <span className={classes.title2}>
              Minim ipsum duis commodo enim et.
            </span>
          </p>
        </div>
        <div className={`${classes.card} ${classes.card3} ${classes.content2}`}>
          <p className={classes.contentText2}>
            <span className={classes.title2}>
              Incididunt dolor sit aliqua exercitation duis.
            </span>
          </p>
        </div>
        <div className={`${classes.card} ${classes.card3} ${classes.content3}`}>
          <p className={classes.contentText2}>
            <span className={classes.title2}>
              Laboris sed voluptate elit laboris voluptate.
            </span>
          </p>
        </div>
        <div className={`${classes.card} ${classes.card3} ${classes.content4}`}>
          <p className={classes.contentText2}>
            <span className={classes.title2}>
              Labore veniam ut amet minim adipiscing.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contents;
