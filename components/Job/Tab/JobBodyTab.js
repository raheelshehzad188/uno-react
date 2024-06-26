import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";
import TextEditor from "../../Editor/TextEditor";

const JobBodyTab = ({setFieldValue, errors, values, touched}) => {
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
                    "job_body_" + lang,
                    values.job_body_en
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
            <TextEditor
              name="job_body_en"
              initialValue={values.job_body_en}
              setFieldValue={setFieldValue}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_body_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Body En"
              label="Job Body En"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <TextEditor
              name="job_body_ar"
              initialValue={values.job_body_ar}
              setFieldValue={setFieldValue}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_body_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Body Ar"
              label="Job Body Ar"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <TextEditor
              name="job_body_fr"
              initialValue={values.job_body_fr}
              setFieldValue={setFieldValue}
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_body_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Body Fr"
              label="Job Body Fr"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <TextEditor
              name="job_body_de"
              initialValue={values.job_body_de}
              setFieldValue={setFieldValue}
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_body_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Body De"
              label="Job Body De"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <TextEditor
              name="job_body_ru"
              initialValue={values.job_body_ru}
              setFieldValue={setFieldValue}
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_body_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Body Ru"
              label="Job Body Ru"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <TextEditor
              initialValue={values.job_body_se}
              setFieldValue={setFieldValue}
              name="job_body_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_body_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Body Se"
              label="Job Body Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
  );
}
export default JobBodyTab;