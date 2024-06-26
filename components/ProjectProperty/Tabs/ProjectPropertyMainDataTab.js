import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput, ReactstrapSelect} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const ProjectPropertyMainDataTab = ({projectPropertyData, propertyTypes, errors, values, setFieldValue, touched}) => {
  return (
    <>
      <Row>
        <Col sm="4" className="form-group">
          <Field name='project_property_property_type_id' type="text"
                 component={ReactstrapSelect}
                 inputprops={{options: propertyTypes}}
                 className={`form-control ${
                   errors.project_property_property_type_id ? "is-invalid" : ""
                 }`}
                 placeholder="Enter Property Type" label="Property Type"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_sorting"
            type="number"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_sorting ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Sorting"
            label="Project Property Sorting"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_count_rooms"
            type="number"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_count_rooms ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Count Rooms"
            label="Project Property Count Rooms"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_number_of_bath"
            type="number"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_number_of_bath ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Count Bath"
            label="Project Property Count Bath"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_area_range"
            type="number"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_area_range ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Area Range"
            label="Project Property Area Range"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_is_active"
            component={ReactstrapSelect}
            className="form-control"
            label="Project Property Type active"
            inputprops={{ options: ["", "yes", "no"] }}
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_title_en"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_title_en ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Title En"
            label="Project Property Title En"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_title_ar"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_title_ar ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Title Ar"
            label="Project Property Title Ar"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_title_fr"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_title_fr ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Title Fr"
            label="Project Property Title Fr"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_title_de"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_title_de ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Title De"
            label="Project Property Title De"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_title_ru"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_title_ru ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Title Ru"
            label="Project Property Title Ru"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_title_se"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_title_se ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Title Se"
            label="Project Property Title Se"
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="project_property_location"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${
              errors.project_property_location ? "is-invalid" : ""
            }`}
            placeholder="Enter Project Property Location"
            label="Project Property Location"
          />
        </Col>
      </Row>
    </>
  );
}

export default ProjectPropertyMainDataTab;