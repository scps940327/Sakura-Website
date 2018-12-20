import React from "react";
import PropTypes from "prop-types";

class Album extends React.Component {
   render() {
      return (
      	    <div className="fotorama" data-nav="thumbs" data-width="100%" data-thumbwidth="80" data-thumbheight="80">
		        {this.props.data.map((item, i) => 
		        <img src={item} key = {i} />)}
		    </div>
      );
   }
}

export default Album;