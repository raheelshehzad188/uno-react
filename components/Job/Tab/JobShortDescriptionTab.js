import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const JobShortDescriptionTab =({setFieldValue,errors,values,touched})=>{
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
                    "job_short_description_" + lang,
                    values.job_short_description_en
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
              name="job_short_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_short_description_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Short Description En"
              label="Job Short Description En"
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
              name="job_short_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_short_description_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Short Description Ar"
              label="Job Short Description Ar"
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
              name="job_short_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_short_description_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Short Description Fr"
              label="Job Short Description Fr"
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
              name="job_short_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_short_description_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Short Description De"
              label="Job Short Description De"
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
              name="job_short_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_short_description_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Short Description Ru"
              label="Job Short Description Ru"
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
              name="job_short_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_short_description_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Short Description Se"
              label="Job Short Description Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
    );
}
export default JobShortDescriptionTab;