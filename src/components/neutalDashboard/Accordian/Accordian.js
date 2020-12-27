import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import {Accordion} from 'react-bootstrap';
import {AllCloseAccordian,PrimaryColorAccordian,SecondaryColorAccordian,AccordionWithIcon,AccordionWithOpenandCloseIcon} from './AccordianComponent'
import {BasicAccordion,CollapsibleGroupItem,ColorAccordion,Add,AccordionOpenCloseIcon,AccordionWithIconOnTitle,AllCloseAccordion} from '../../../constant/constant'

const Accordian = (props) => {
    return (
        <Fragment>
        <Breadcrumb title="Accordion" parent="Base" />
        <Container fluid={true} >
        <Row>
          <Col sm="12" xl="6">
          <Accordion >
            <Card>
              <CardHeader>
                <h5>YOUR CASES</h5>
              </CardHeader>
              <CardBody>
                <div className="default-according" id="accordionclose">
                  <AllCloseAccordian subtext={props.text} count={props.count}/>
                </div>
              </CardBody>
            </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
      </Fragment>
    );
}

export default Accordian;
