import React, { Component }  from "react";
class Card extends Component{
    constructor() {
        super();
        this.state = {
            viewList: "",
            viewGrid: "disabled",
            col: "4",
            
        };
    }
    render() {
      let arrayName = ['บ้านเดี่ยว1','บ้านเดี่ยว2','บ้านเดี่ยว3','บ้านเดี่ยว4','บ้านเดี่ยว5','บ้านเดี่ยว6','บ้านเดี่ยว7','บ้านเดี่ยว8']
      return (
        <div className="bg-blue">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                        <h3 className="left">
                            บ้านเดี่ยว
                        </h3>
                        <div className="col s12 m12 center">
                            <a onClick={ () => this.setState({viewList: "", viewGrid: "disabled", col:"4"})} className={"btn "+ this.state.viewGrid}><i className="material-icons left">view_comfy</i></a>
                            <a onClick={ () => this.setState({viewList: "disabled", viewGrid: "horizontal", col:"12"})} className={"btn "+ this.state.viewList}><i className="material-icons left">view_list</i></a>
                        </div>
                    </div>
                    {arrayName.map(name => (
                        <div className={"col s12 m"+this.state.col}>
                        <div className={"card "+this.state.viewGrid}>
                            <div className="card-image">
                                <img src="https://www.homezoomer.com/wp-content/uploads/2019/09/%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%A5%E0%B8%A2%E0%B9%8C-%E0%B8%9B%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3_1.jpg"/>
                                <span className="card-title">{name}</span>
                            </div>
                            <div className="card-content">
                                <p>สัมผัสบ้านเดี่ยวใหม่สไตล์รีสอร์ท ใน T77 community พร้อมพื้นที่สร้างไอเดีย ริมน้ำในบรรยากาศร่มรื่น เพียง 5 นาที ถึง BTS อ่อนนุช ฟรีโอน และส่วนกลาง 2 ปี.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">จองเลย</a>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Card;