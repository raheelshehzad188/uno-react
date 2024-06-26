import {Col, List, Row} from "reactstrap";
import React from "react";

const ProjectFacilityTab = ({facilities, projectFacilities}) => {
  console.log(projectFacilities)
  const handleChange = (checked, facility_id) => {
    if (checked) {
      projectFacilities.push(facility_id);
    } else {
      const facilityIndex = projectFacilities.indexOf(facility_id);
      projectFacilities.splice(facilityIndex, 1);
    }
    console.log('The checkbox was toggled', projectFacilities);
  };
  return (<>
    <Row>
      {facilities && facilities.map((facility, i) => {
        return (
          <Col sm="4" className="form-group">
            <label>
              <input
                type="checkbox"
                defaultChecked={projectFacilities?.includes(facility.facility_id)}
                onChange={e => handleChange(e.target.checked, facility.facility_id)}
              /> {facility.facility_title}
            </label>
          </Col>
        )
      })}
    < /Row>
  </>);
}

export default ProjectFacilityTab;