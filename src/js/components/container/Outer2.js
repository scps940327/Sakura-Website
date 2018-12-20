import React from "react";
import ReactDOM from "react-dom";
import MdTitle from "../presentational/MdTitle";
import TipTxt from "../presentational/TipTxt";
import DetailTxt from "../presentational/DetailTxt";
import Pictures from "../presentational/Pictures";

class Container extends React.Component {
   render() {
      return (
         <div className="container border_bottom py-5">
            <div className="txt_block">
               <MdTitle data={this.props.data.title} />
               <TipTxt data = {this.props.data.content} />
               <DetailTxt data={this.props.data.detail} />
            </div>
            {this.props.data.img.map((item, i) => 
            <Pictures key = {i} data = {item} />)}
         </div>
      );
   }
}

class Outer2 extends React.Component {
   constructor() {
      super();
      this.state = {
         data:
         [
            {
               title: ["禮賓交誼大廳 擁抱樹海莊園"],
               content: "飯店式迎賓大廳，歡迎回家住飯店",
               detail: "現代簡約的線條語彙，醇厚優雅的溫暖色澤，奏鳴出潑墨氣韻生動的空間氛圍。清透大玻璃落地剪影綠光窗景，有儒雅書香、有飯店精品，閱讀交誼淳美生活。",
               img: 
               [
                  {
                     PC: "../dist/img/banner10_01_pc.jpg",
                     M: "../dist/img/banner10_01_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner10_02_pc.jpg",
                     M: "../dist/img/banner10_02_m.jpg"
                  },
               ]
            },
            {
               title: ["大氣大闊 質感好生活"],
               content: "戶戶邊間 藏風納氣 住好住幸福",
               detail: 
               [
                  "各戶享有二~三面採光，陽光、空氣自在悠遊。",
                  "一層三戶，均質坪數，齊質鄰里，親友相招做厝邊尚好。方正格局，流暢動線，超高坪效，大尺度格局，精品設備。完美實現大戶人家的高質感生活，住起來舒心且安心。"
               ],
               img: 
               [
                  {
                     PC: "../dist/img/banner11_01_pc.jpg",
                     M: "../dist/img/banner11_01_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner11_02_pc.jpg",
                     M: "../dist/img/banner11_02_m.jpg"
                  },
               ]
            },
            {
               title: [""],
               content: "櫻花學│傢俱彩配平面圖",
               detail: 
               [
                  ""
               ],
               img: 
               [
                  {
                     PC: "../dist/img/banner12_01.jpg",
                     M: "../dist/img/banner12_01.jpg"
                  },
                  {
                     PC: "../dist/img/banner12_02.jpg",
                     M: "../dist/img/banner12_02.jpg"
                  },
                  {
                     PC: "../dist/img/banner12_03.jpg",
                     M: "../dist/img/banner12_03.jpg"
                  },
                  {
                     PC: "../dist/img/banner12_04.jpg",
                     M: "../dist/img/banner12_04.jpg"
                  },
               ]
            },
         ]
      }
   }
   render() {
      return (
         <div className="section bg_green pb-0">
            {this.state.data.map((item, i) =>
            <Container key = {i} data = {item} />)}
         </div>
      );
   }
}


export default Outer2;
ReactDOM.render(<Outer2/>, document.getElementById('Outer2'));