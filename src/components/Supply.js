import React, { Component } from "react";
import { Fragment, Card, Grid, Col, Row, Image } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class Supply extends Component {
  render() {
    // console.log("supplies", this.props.supplies);
    return (
      <React.Fragment>
        <Grid>
          <Row>
            {this.props.supplies.map(supply => (
              <Col lg={3}>
                <Image
                  alt="supply name"
                  src={`${filePath}${supply.name}.png`}
                />
              </Col>
            ))}
            <Col lg={3}>
              <Image alt="bag of money" src={`${filePath}money.png`} />
            </Col>
            <Col lg={3}>
              <Image alt="sun" src={`${filePath}days.png`} />
            </Col>
          </Row>
          <Row>
            {this.props.supplies.map(supply => (
              <Col lg={3}>
                <h3>{supply.name}</h3>
              </Col>
            ))}
            <Col lg={3}>
              <h3>money</h3>
            </Col>
            <Col lg={3}>
              <h3>days</h3>
            </Col>
          </Row>
          <Row>
            {this.props.supplies.map(
              supply =>
                supply.name === "food" ? (
                  <Col lg={3}>
                    <h4>{supply.amount} lbs</h4>
                  </Col>
                ) : (
                  <Col lg={3}>
                    <h4>{supply.amount} boxes</h4>
                  </Col>
                )
            )}
            <Col lg={3}>
              <h4>${this.props.money}</h4>
            </Col>
            <Col lg={3}>
              <h4>{this.props.days}</h4>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>

      // <React.Fragment>
      //   <Table bordered>
      //     <thead>
      //       <tr>
      //         {this.props.family_members.map(fm => (
      //           <th>
      //             <Image
      //               alt="Family Member Image"
      //               src={`${filePath}${fm.role}.png`}
      //             />
      //           </th>
      //         ))}
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //         {this.props.family_members.map(fm => (
      //           <td>
      //             <h3>{fm.name}</h3>
      //           </td>
      //         ))}
      //       </tr>
      //       <tr>
      //         {this.props.family_members.map(fm => (
      //           <td>
      //             <h4>{fm.health}</h4>
      //           </td>
      //         ))}
      //       </tr>
      //       <tr>
      //         {this.props.family_members.map(fm => (
      //           <td>
      //             <h4>{fm.status}</h4>
      //           </td>
      //         ))}
      //       </tr>
      //     </tbody>
      //   </Table>
      // </React.Fragment>
    );
  }
}

export default Supply;
