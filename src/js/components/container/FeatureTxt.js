import React from "react";
import ReactDOM from "react-dom";
import MdTitle from "../presentational/MdTitle";
import TipTxt from "../presentational/TipTxt";
import DetailTxt from "../presentational/DetailTxt";
import Pictures from "../presentational/Pictures";

class Container extends React.Component {
   render(){
      return (
         <div className="section bg_pink">
            <div className="container">
               <div className="txt_block">
                  <MdTitle data = {this.props.data.title} />
                  <TipTxt data = {this.props.data.content} />
                  <DetailTxt data = {this.props.data.detail} />
               </div>
               <div className="img_block border_bottom slick_wrapper">
                  {this.props.data.img.map((item, i) =>
                  <Pictures data = {item} key={i} />)}
               </div>
            </div>
         </div>
      );
   }
}

class FeatureTxt extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "title": ["採買很「近」"],
               "content": "近鄰三峽老街商圈，日常新鮮採買輕輕鬆鬆",
               "detail": "從公有市場早市到黃昏市場到現代連鎖超市、大賣場，日常生鮮採買應有盡有，三峽老街的深厚人文、食裝趣遊各項生活需求，機能十足。",
               img: 
               [
                  {
                     PC: "../dist/img/banner02_01_pc.jpg",
                     M: "../dist/img/banner02_01_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner02_02_pc.jpg",
                     M: "../dist/img/banner02_02_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner02_03_pc.jpg",
                     M: "../dist/img/banner02_03_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner02_04_pc.jpg",
                     M: "../dist/img/banner02_04_m.jpg"
                  },
               ]
            },
            {
               "title": ["學校有「競」"],
               "content": "中園國小旁，孩子可以睡晚一點，輕鬆上下學",
               "detail": "緊鄰科教聞名、屢屢獲頒教育獎章中園國小，孩子上下學家長免接送安全又放心，孩子每天可以睡晚一點、全家可以一起共享親子早餐時光。",
               img: 
               [
                  {
                     PC: "../dist/img/banner03_01_pc.jpg",
                     M: "../dist/img/banner03_01_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner03_02_pc.jpg",
                     M: "../dist/img/banner03_02_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner03_03_pc.jpg",
                     M: "../dist/img/banner03_03_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner03_04_pc.jpg",
                     M: "../dist/img/banner03_04_m.jpg"
                  },
               ]
            },
            {
               "title": ["環境很「靜」"],
               "content": "文教優質生活區，新大樓新名宅聚落，寧靜優質",
               "detail": "環境好，生活品質好，房子保値增値自然好！環繞中園國小生活圈，近距三峽老街，聯外動線快速串聯北二高，是三峽炙手可熱文教住宅區。",
               img: 
               [
                  {
                     PC: "../dist/img/banner04_01_pc.jpg",
                     M: "../dist/img/banner04_01_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner04_02_pc.jpg",
                     M: "../dist/img/banner04_02_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner04_03_pc.jpg",
                     M: "../dist/img/banner04_03_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner04_04_pc.jpg",
                     M: "../dist/img/banner04_04_m.jpg"
                  },
               ]
            },
            {
               "title": ["樂活有「境」"],
               "content": "鳶山森活圈，養身能量場，河濱慢跑舒心又愜意",
               "detail": "春夏更有桐花、螢火蟲步道，不僅是大人的養生場，也是孩子的自然教室，鄰近三峽河濱公園可跑步、騎單車，是市中心難得擁有舒壓身心靈的綠色休閒場域。",
               img: 
               [
                  {
                     PC: "../dist/img/banner05_01_pc.jpg",
                     M: "../dist/img/banner05_01_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner05_02_pc.jpg",
                     M: "../dist/img/banner05_02_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner05_03_pc.jpg",
                     M: "../dist/img/banner05_03_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner05_04_pc.jpg",
                     M: "../dist/img/banner05_04_m.jpg"
                  },
               ]
            },
            {
               "title": ["交通有「徑」"],
               "content": "一高一捷雙快雙交流道多線公車，上班通勤快意暢行",
               "detail": "64、65雙快速暢行雙北各大生活圈；樹林、三鶯雙交流道左右環伺；未來還有三鶯捷運線完工通車後，快速串聯黃金板南線，更有多線公車暢快連結新板府中、土城頂埔、中和景安捷運站；中園國小門口還有U BIKE站，假日逛遊三峽老街、河濱步道，樂活健身又節能減碳。",
               img: 
               [
                  {
                     PC: "../dist/img/banner06_01_pc.jpg",
                     M: "../dist/img/banner06_01_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner06_02_pc.jpg",
                     M: "../dist/img/banner06_02_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner06_03_pc.jpg",
                     M: "../dist/img/banner06_03_m.jpg"
                  },
                  {
                     PC: "../dist/img/banner06_04_pc.jpg",
                     M: "../dist/img/banner06_04_m.jpg"
                  },
               ]
            },
         ]
      }
   }
   render() {
      return (
         <div>
            {this.state.data.map((item, i) => 
            <Container key = {i} data = {item} />)}
         </div>
      );
   }
}


export default FeatureTxt;
ReactDOM.render(<FeatureTxt/>, document.getElementById('FeatureTxt'));