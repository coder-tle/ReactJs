import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("click");
  //   console.log(this);
  //   let form = document.querySelector(".add-form");
  //   if (form.style.display === "none") {
  //     form.style.display = "block";
  //   } else {
  //     form.style.display = "none";
  //   }
  //   console.log(form);
  // };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Open"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;

// css in jss
// const headingStyle = {
//     color: 'red' ,
//     backgroundColor:'black',
// }
