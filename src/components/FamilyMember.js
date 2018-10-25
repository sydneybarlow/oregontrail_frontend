import React, { Component } from "react";
import { Fragment, Card, Table, Image } from "react-bootstrap";
import "../App.css";

const filePath = process.env.PUBLIC_URL + "imgs/";

class FamilyMember extends Component {
  render() {
    // console.log("FAM FORM $$$", this.props);≠
    return (
      <React.Fragment>
        <Table bordered>
          <thead>
            <tr>
              {this.props.family_members.map(fm => (
                <th>
                  <Image
                    alt="Family Member Image"
                    src={`${filePath}${fm.role}.png`}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.props.family_members.map(fm => (
                <td>
                  <h3>{fm.name}</h3>
                </td>
              ))}
            </tr>
            <tr>
              {this.props.family_members.map(
                fm =>
                  fm.health === "good" ? (
                    <td>
                      <h4>❤️ {fm.health}</h4>
                    </td>
                  ) : fm.health === "fair" ? (
                    <td>
                      <h4>🧡 {fm.health}</h4>
                    </td>
                  ) : fm.health === "poor" ? (
                    <td>
                      <h4>💛 {fm.health}</h4>
                    </td>
                  ) : (
                    <td>
                      <h4>🖤 {fm.health}</h4>
                    </td>
                  )
              )}
            </tr>
            <tr>
              {this.props.family_members.map(fm => (
                <td>
                  <h4>{fm.status}</h4>
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default FamilyMember;
