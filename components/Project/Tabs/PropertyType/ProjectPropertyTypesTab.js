import {Col, List, Row} from "reactstrap";
import React from "react";

const ProjectPropertyTypeTab = ({propertyTypesList, projectPropertyTypes}) => {
   const handleChange = (checked, property_type_id) => {
    if (checked) {
      projectPropertyTypes.push(property_type_id);
    } else {
      const propertyTypeIndex = projectPropertyTypes.indexOf(property_type_id);
      projectPropertyTypes.splice(propertyTypeIndex, 1);
    }
    console.log('The checkbox was toggled', projectPropertyTypes);
  };
  return (<>
    <Row>
      {propertyTypesList && propertyTypesList.map((propertyType, i) => {
        return (
          <Col sm="4" className="form-group">
            <label>
              <input
                type="checkbox"
                id={propertyType.id}
                defaultChecked={projectPropertyTypes?.includes(propertyType.id)}
                onChange={e => handleChange(e.target.checked, propertyType.id)}
              /> {propertyType.name}
             </label>
          </Col>
        )
      })}
    < /Row>
  </>);
}

export default ProjectPropertyTypeTab;