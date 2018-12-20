import React from "react";

class Pictures extends React.Component {
   render() {
      return (
      	<div className="img_block">
	        <picture>
		        <source srcSet={this.props.data.M} media="(max-width: 767px)" />
		        <source srcSet={this.props.data.PC} media="(min-width: 768px)" />
		        <img src={this.props.data.PC} alt="My default image" className="img-fluid" />
		    </picture>
		</div>
      );
   }
}

export default Pictures;