import {Col, Row} from "reactstrap";
import React from "react";

const CommunityFacilityTab = ({facilities, communityFacilities}) => {
  console.log(communityFacilities)
  const handleChange = (checked, facility_id) => {
    if (checked) {
      communityFacilities.push(facility_id);
    } else {
      const facilityIndex = communityFacilities.indexOf(facility_id);
      communityFacilities.splice(facilityIndex, 1);
    }
    console.log('The checkbox was toggled', communityFacilities);
  };
  return (<>
    <Row>
      {facilities && facilities.map((facility, i) => {
        return (
          <Col sm="4" className="form-group">
            <label>
              <input
                type="checkbox"
                defaultChecked={communityFacilities?.includes(facility.facility_id)}
                onChange={e => handleChange(e.target.checked, facility.facility_id)}
              /> {facility.facility_title}
            </label>
          </Col>
        )
      })}
    < /Row>
  </>);
}

export default CommunityFacilityTab;