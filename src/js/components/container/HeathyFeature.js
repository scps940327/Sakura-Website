import React from "react";
import ReactDOM from "react-dom";
import MdTitle from "../presentational/MdTitle";
import TipTxt from "../presentational/TipTxt";
import DetailTxt from "../presentational/DetailTxt";
import Pictures from "../presentational/Pictures";

class Container extends React.Component {
   render() {
      return (
         <div className="container py-5">
            <div className="pb-4">
               <img src = {this.props.data.img[0]} className="img-fluid" />
            </div>
            <div className="row">
               <div className="col-md-6">
                  <MdTitle data={this.props.data.title} />
                  <TipTxt data = {this.props.data.content} />
                  <DetailTxt data={this.props.data.detail} />
               </div>
               <div className="col-md-6">
                  <img src = {this.props.data.img[1]} className="img-fluid" />
               </div>
            </div>
         </div>
      );
   }
}

class HeathyFeature extends React.Component {
   constructor() {
      super();
      this.state = {
         data:
         [
            {
               title: ["無毒無臭味，防過敏原","家有小孩最安心"],
               content: "青葉銀立淨環保綠建材",
               detail: "精選榮獲綠建材標章、無添加甲醛、鉛、汞等重金屬，具淨化空氣、防過敏原青葉銀離子乳膠漆；每戶加裝無納離子全效淨水器（英國原裝進口濾心），各戶水管更提供脈衝清洗服務，加強除垢，全面淨化水質，確保用水清潔，保護全家健康。",
               img: 
               [
                  "../dist/img/banner13_01.jpg",
               ]
            },
            {
               title: ["七星級杜拜帆船飯店", "同品牌衛浴"],
               content: "換新住好，就該如此享受，精品味輕奢華",
               detail:"唯一榮獲七星級杜拜帆船飯店指名採用～美標衛浴（American Standard），同時也是國內各大五星級飯店如圓山、喜來登、福華、晶華等一致選用，還有志玲姊姊推薦的大雅廚具，搭配台日合作的林內三機，精品味超時尚。",
               img: 
               [
                  "../dist/img/banner13_02.jpg",
                  "../dist/img/banner13_03.jpg",
               ]
            }
         ]
      }
   }
   render() {
      return (
         <div className="section">
            {this.state.data.map((item, i) =>
            <Container key = {i} data = {item} />)}
         </div>
      );
   }
}


export default HeathyFeature;
ReactDOM.render(<HeathyFeature/>, document.getElementById('HeathyFeature'));