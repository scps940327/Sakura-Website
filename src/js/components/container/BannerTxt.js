import React from "react";
import ReactDOM from "react-dom";
import MainTxt from "../presentational/TitleTxt";
import DetailTxt from "../presentational/DetailTxt";

class Container extends React.Component {
   render() {
      return(
         <div className="container txt_block">
            <MainTxt data = {this.props.data.title} />
            <DetailTxt data = {this.props.data.detail} />
         </div>
      );
   }
}

class BannerTxt extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "title": ["櫻花嚴選 幸福首選"],
               "detail": "2018櫻花建設首次前進人文深厚的三峽，就幸福坐擁大三園，不僅精挑中園國小、鳶山樹海為鄰，特別禮聘雙北豪宅設計團隊精心規劃，以健康住宅的理念，精選環保綠建材，擘畫一座可以安心住一輩子的舒活健康宅，實踐您對家人的呵護。"
            },
            {
               "title": ["中園國小旁", "鳶山樹海為鄰"],
               "detail": "千金買房，萬金買鄰，一輩子的家\n櫻花用上市品牌、近5000戶看得見的實績\n幫您精挑細選學校、綠意做鄰居"
            }
         ],
         img: "../dist/img/banner01.jpg"
      }
   }
   render() {
      return (
         <div className="section bg_pink">
            {this.state.data.map((item, i) => 
            <Container key = {i} data = {item} />)}
            <div className="img_block border_bottom max_width">
               <img src= {this.state.img} className="img-fluid" />
            </div>
         </div>
      );
   }
}


export default BannerTxt;
ReactDOM.render(<BannerTxt/>, document.getElementById('BannerTxt'));