import React,{Fragment, useState} from 'react';
import {Card,CardHeader,CardBody} from 'reactstrap'
import {Accordion} from 'react-bootstrap';
import TooltipsComponent from '../../dashboard/tooltip';
import {FiDownload} from 'react-icons/fi'
import {GrFormView} from 'react-icons/gr'

export const AllCloseAccordian = (props) => {
    return (
      <Fragment>
        <Card>
          <CardHeader>
          <h5 className="mb-0">
              <Accordion.Toggle as={Card.Header} className="btn btn-link" color="default" eventKey="0">
                {props.subtext}<span className="digits">{props.count}</span>
              </Accordion.Toggle>
          </h5>
          </CardHeader>
          <Accordion.Collapse eventKey="0">
              <CardBody style={{display:'flex',flexDirection:'row'}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TooltipsComponent id="view" text="View" icon={<GrFormView/>}/>
                <div>View Document</div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <TooltipsComponent id="download" text="Download" icon={<FiDownload/>}/>
                <div>Download Document</div>
                </div>
              </CardBody>
          </Accordion.Collapse>
        </Card>
      </Fragment>

    );
}
