import React from "react";
import "./topmet.css"
import DatePicker from 'react-date-picker';
import  { useState } from 'react';
import { GoogleLogin, GoogleLogout } from "react-google-login";
const clientId ="797700426904-6dafiripn594iocspv3ujrou33ceq88h.apps.googleusercontent.com";
const Topmet=()=>{
    const [value, onChange] = useState(new Date());
    const responseGoogle = (response) => {
        console.log(response);
      }
    return(
        <div className="topmetContainer">
            <div className="topmetContainer_sub1">
                <h3>topmate</h3>
                <div className="profile_div">
                    <div className="profile_pic"><img src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="profile"/></div>
                    <div className="profile_info">
                    <h5 className="profile_name">Diwakar Bodigar</h5>
                    <h5 className="profile_infoh5">topmate.io/diwakar_badigare</h5>
                    </div>
                </div>
                <button >Publish Profile</button>
                <div className="home_div">
                    <div className="home_img">
                    <img src="https://e7.pngegg.com/pngimages/1016/542/png-clipart-black-house-house-computer-icons-home-automation-kits-real-estate-home-icon-angle-building-thumbnail.png"/>
                    </div>
                    <p>Home</p>
                </div>
                <div className="home_div">
                    <div className="home_img">
                    <img src="https://static.vecteezy.com/system/resources/previews/002/079/984/original/phone-icon-flat-style-isolated-on-grey-background-telephone-symbol-call-illustration-sign-for-web-and-mobile-app-free-vector.jpg"/>
                    </div>
                    <p>calls</p>
                </div>
                <div className="home_div">
                    <div className="home_img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwnIs409Th4szhmXg9cn1Ut62iGBRkwNgiA&usqp=CAU"/>
                    </div>
                    <p>Queries</p>
                </div>
                <div className="home_div">
                    <div className="home_img">
                    <DatePicker onChange={onChange} value={value} />
                    </div>
                    <p>Availability</p>
                </div>
                <var><div className="home_div">
                    <div className="home_img">
                    <img src="https://image.shutterstock.com/image-vector/gear-icon-service-isolated-vector-260nw-683755261.jpg"/>
                    </div>
                    <p>services</p>
                </div></var>
                <var><div className="home_div">
                    <div className="home_img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gjDJ2gdXw8SfyNEqYg9kXzrI0PlO2GVSpWXKmwpNIFA2jPKavdi581g7BguZs6fQxFk&usqp=CAU"/>
                    </div>
                    <p>payments</p>
                </div></var>
                <var><div className="home_div">
                    <div className="home_img">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/003/658/604/small/linear-analytics-icon-design-template-illustration-free-vector.jpg"/>
                    </div>
                    <p>Analytics</p>
                </div></var>
            </div>
            <div className="topmetContainer_sub2">
            <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </div>
        </div>
    )
}
export default Topmet