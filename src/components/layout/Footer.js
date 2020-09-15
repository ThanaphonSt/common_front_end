import React, { Component }  from "react";
class Footer extends Component{
  render() {
    return (
        <footer class="page-footer">
            <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Live as if you were to die tomorrow. <br/>Learn as if you were to live forever.</h5>
                    <p class="grey-text text-lighten-4">Thanaphon Saeteng</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">โปรโมชั่น</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">โครงการ</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">ความคืบหน้า</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">แบบบ้าน</a></li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2020 Copyright
                    <a class="grey-text text-lighten-4 right" href="https://github.com/ThanaphonSt">Thanaphon Saeteng</a>
                </div>
            </div>
      </footer>
    );
  }
}

export default Footer;