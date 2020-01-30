import React from "react";

const HeartIcon = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
    ></i>
  );
};

export default HeartIcon;

// class HeartIcon extends Component {
// handleClick = () => {
//   let newClickedState = this.state.clicked;
//   if (newClickedState) {
//     newClickedState = false;
//   } else newClickedState = true;
//   this.setState({ clicked: newClickedState });
// };

// render() {

// }
// render() {
//   // let classes = "fa fa-heart";
//   // if (!this.props.liked) classes += "-0";
//   return <i className="fa fa-heart-o" aria-hidden="true"></i>;
// }
