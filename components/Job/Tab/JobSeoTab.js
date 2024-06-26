import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const JobSeoTab = ({setFieldValue, errors, values, touched}) => {
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
                    "job_meta_title_" + lang,
                    values.job_meta_title_en
                  );
                  setFieldValue(
                    "job_meta_keywords_" + lang,
                    values.job_meta_keywords_en
                  );
                  setFieldValue(
                    "job_meta_description_" + lang,
                    values.job_meta_description_en
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
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_title_en"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_title_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Title En"
              label="Job Meta Title En"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_keywords_en"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_keywords_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Keywords En"
              label="Job Meta Keywords En"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_meta_description_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Description En"
              label="Job Meta Description En"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_title_ar"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_title_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Title Ar"
              label="Job Meta Title Ar"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_keywords_ar"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_keywords_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Keywords Ar"
              label="Job Meta Keywords Ar"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_meta_description_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Description Ar"
              label="Job Meta Description Ar"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_title_fr"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_title_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Title Fr"
              label="Job Meta Title Fr"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_keywords_Fr"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_keywords_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Keywords Fr"
              label="Job Meta Keywords Fr"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_meta_description_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Description Fr"
              label="Job Meta Description Fr"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_title_de"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_title_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Title De"
              label="Job Meta Title De"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_keywords_de"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_keywords_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Keywords De"
              label="Job Meta Keywords De"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_meta_description_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Description De"
              label="Job Meta Description De"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>

        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_title_ru"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_title_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Title Ru"
              label="Job Meta Title Ru"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_keywords_ru"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_keywords_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Keywords Ru"
              label="Job Meta Keywords Ru"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_meta_description_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Description Ru"
              label="Job Meta Description Ru"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_title_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_meta_title_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Title Se"
              label="Job Meta Title Se"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_keywords_se"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.job_meta_keywords_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Keywords Se"
              label="Job Meta Keywords Se"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="job_meta_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_meta_description_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Meta Description Se"
              label="Job Meta Description Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default JobSeoTab;