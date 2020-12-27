import React, {Fragment, useState} from 'react';
import { User } from 'react-feather';
import {Link} from "react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const LoginUserMenu = () => {
  const [showList, updateShowList] = useState(false);
  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }
  console.log(showList)
    return (
        <Fragment>
            <li style={{listStyleType: "none"}} className="onhover-dropdown" onClick={() => updateShowList(!showList)}>
                <div style={{ paddingLeft:'25px', paddingRight: '25px' }} className="media align-items-center">
                    <div className="f6 link dim ph3 pv2 mb2 dib white w-100"
                         style={{backgroundColor: 'rgb(103, 185, 83)', borderRadius: '30px', fontWeight: "bold"}}>
                    LOGIN
                    </div>
                </div>
                {detectMob() && showList &&
                <ul className="profile-dropdown p-20 tl " style={{marginLeft: "5rem"}}>
                    <li><Link style={{color: "rgb(103, 185, 83)"}} to="/userlogin"><User />User</Link></li>
                    <li><Link style={{color: "rgb(103, 185, 83)"}} to="/neutrallogin"><User />Neutral</Link></li>
                </ul>}
                <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                    <li><Link style={{color: "rgb(103, 185, 83)"}} to="/userlogin"><User />User</Link></li>
                    <li><Link style={{color: "rgb(103, 185, 83)"}} to="/neutrallogin"><User />Neutral</Link></li>
                </ul>
            </li>
        </Fragment>
    );
};


export default LoginUserMenu;
