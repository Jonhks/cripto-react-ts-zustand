import classes from "./Spinner.module.css";
const Spinner = () => (
  <div className={classes.containerSpiner}>
    <span className={classes.loader}></span>
  </div>
);

export default Spinner;
