import classes from "./Container.module.css";

const Container = (props) => {
  const classContainer = `${classes.container} ${props.className}`;
  return <div className={classContainer}>{props.children}</div>;
};

export default Container;
