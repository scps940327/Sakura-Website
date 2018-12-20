import React from "react";
import PropTypes from "prop-types";

class MainTxt extends React.Component {
   render() {
      return (
      	<div className="lg_title">
      		{this.props.data.map((item, i) => 
      		<div key = {i}>{item}</div>)}
      	</div>
      );
   }
}

MainTxt.propTypes = {
	data: PropTypes.array.isRequired,
}

export default MainTxt;