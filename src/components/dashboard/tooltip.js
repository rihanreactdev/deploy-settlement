import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import {BsInfoCircle} from 'react-icons/bs'
import { UncontrolledTooltip } from 'reactstrap';
import { BasicTooltip,Directions,TooltipOnTop,TooltipOnRight,TooltipOnLeft,TooltipOnBottom,Tooltip,TooltipTitle,HoverMe,Offset,HTMLElements } from "../../constant/constant";

const TooltipsComponent = (props) => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div>
                    <div className="col-sm-12">
                        <div style={{display:'flex'}}>
                            <div className="card-body btn-showcase">
                                <div id={props.id}>{props.icon}</div>
                                <UncontrolledTooltip placement="right" target={props.id}>
                                   {props.text}
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TooltipsComponent;