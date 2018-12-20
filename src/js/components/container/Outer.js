import React from "react";
import ReactDOM from "react-dom";
import MainTxt from "../presentational/TitleTxt";
import DetailTxt from "../presentational/DetailTxt";
import Pictures from "../presentational/Pictures";

class Outer extends React.Component {
   constructor() {
      super();
      this.state = {
         title: ["雙北豪宅團隊",　"精工舒活健康宅"],
         detail: 
         [
            "家人是第一，櫻花深知您對家的重視", 
            "不僅幫您慎選好環境",
            "更精挑國際品牌衛浴、環保綠建材",
            "守護全家幸福"
         ],
         img: 
         [
            {
               PC: "../dist/img/banner07_01_pc.jpg",
               M: "../dist/img/banner07_01_m.jpg"
            },
            {
               PC: "../dist/img/banner07_02_pc.jpg",
               M: "../dist/img/banner07_02_m.jpg"
            },
         ]

      }
   }
   render() {
      return (
         <div className="section bg_pink pb-0">
            <div className="container border_bottom">
               <div className="txt_block">
                  <MainTxt data={this.state.title} />
                  <DetailTxt data={this.state.detail} />
               </div>
               {this.state.img.map((item, i) => 
               <Pictures key = {i} data = {item} />)}
            </div>
         </div>
      );
   }
}


export default Outer;
ReactDOM.render(<Outer/>, document.getElementById('Outer'));