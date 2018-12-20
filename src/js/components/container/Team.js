import React from "react";
import ReactDOM from "react-dom";
import MainTxt from "../presentational/TitleTxt";
import MdTitle from "../presentational/MdTitle";
import TipTxt from "../presentational/TipTxt";
import DetailTxt from "../presentational/DetailTxt";
import Album from "../presentational/Album";

class Container extends React.Component {
	render(){
		const TeamImgStyle = {
			width: "70%",
			maxWidth: "250px"
		};

		return(
			<div className="container border_bottom pt-5">
				<div className="row">
					<div className="col-md-6 align-items-end">
						<div className="py-4">
							<div className="md_title">
								<span>{this.props.data.title[0]}</span>
								<span className="h2 px-3">{this.props.data.title[1]}</span>
							</div>
							<TipTxt data = {this.props.data.content} />
						</div>
						<div className="img_block">
							<img src = {this.props.data.img} style={TeamImgStyle}/>
						</div>
						<DetailTxt data = {this.props.data.detail} />
					</div>
					<div className="col-md-6 align-items-end">
						<Album data={this.props.data.album} />
					</div>
				</div>
            </div>
		)
	}
}

class Team extends React.Component {
   constructor() {
      super();
      this.state = {
         data:
         [
         	{
         		title: ["豪宅設計大師","蔡智勸"],
         		content: "以學養灌溉，以美學涵養，打造三峽人文心建築",
         		img: "../dist/img/banner08_01_m.jpg",
         		detail: "作品遍及北市大安、新北地區的蔡智勸建築師，以簡約現代的建築創造空間的舒適價值，讓每個家庭都能擁有上好條件的採光、通風，讓您與家人、與自然都能自在舒展。",
         		album: [
         			"../dist/img/banner08_02_m.jpg",
         			"../dist/img/banner08_03_m.jpg",
         			"../dist/img/banner08_04_m.jpg",
         		]
         	},
         	{
         		title: ["花博設計大師","邱光平"],
         		content: "以自然森態共生，規劃一座離城很近 \A 離PM2.5很遠健康宅",
         		img: "../dist/img/banner09_01_m.jpg",
         		detail: "高綠覆率是最天然的清淨機，萬頃鳶山如大自然能量療癒場，無限風姿四季更迭的自然即景，設計師以最大的角度迎翠攬綠，框景如畫，感受大自然的溫柔律動。",
         		album: [
         			"../dist/img/banner09_02_m.jpg",
         			"../dist/img/banner09_03_m.jpg",
         			"../dist/img/banner09_04_m.jpg",
         		]
         	},
         ]

      }
   }
   render() {
      return (
         <div className="section pb-0">
            {this.state.data.map((item, i) =>
            <Container key = {i} data = {item} />)}
         </div>
      );
   }
}


export default Team;
ReactDOM.render(<Team/>, document.getElementById('Team'));