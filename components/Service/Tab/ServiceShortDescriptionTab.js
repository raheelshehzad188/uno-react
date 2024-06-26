import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const ServiceShortDescriptionTab =({setFieldValue,errors,values,touched})=>{
  return (
    <>
      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang != "en") {
                  setFieldValue(
                    "service_short_description_" + lang,
                    values.service_short_description_en
                  );
                }
              });
            }}
            className="btn btn-sm btn-link text-primary float-right"
          >
            Apply To All Languages
          </a>
        </legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="service_short_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_short_description_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Short Description En"
              label="Service Short Description En"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="service_short_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_short_description_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Short Description Ar"
              label="Service Short Description Ar"
            />
          </Col>
         </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="service_short_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_short_description_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Short Description Fr"
              label="Service Short Description Fr"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="service_short_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_short_description_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Short Description De"
              label="Service Short Description De"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="service_short_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_short_description_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Short Description Ru"
              label="Service Short Description Ru"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="service_short_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_short_description_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Short Description Se"
              label="Service Short Description Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
    );
}
export default ServiceShortDescriptionTab;