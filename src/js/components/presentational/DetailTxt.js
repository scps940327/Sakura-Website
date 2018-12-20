import React from "react";

class DetailTxt extends React.Component {
   render() {
      return (
        <div className="detail_txt">{this.props.data}</div>
      );
   }
}

export default DetailTxt;