import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput, ReactstrapSelect} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const JobMainDataTab = ({setFieldValue,errors,values,touched}) => {
  return(
    <>
      <Row>
        <Col sm="6" className="form-group">
          <Field
            name="job_is_active"
            component={ReactstrapSelect}
            className="form-control"
            label="Job Active Status"
            inputprops={{ options: ["", "yes", "no"] }}
          />
        </Col>
        <Col sm="6" className="form-group">
          <Field
            name="job_sorting"
            component={ReactstrapInput}
            className="form-control"
            label="Job Sorting"
          />
        </Col>
      </Row>
      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang !== "en") {
                  setFieldValue(
                    "job_title_" + lang,
                    values.job_title_en
                  );
                  setFieldValue(
                    "job_slug_" + lang,
                    values.job_slug_en
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
          <Col sm="6" className="form-group">
            <Field
              name="job_title_en"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_title_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Title En"
              label="Job Title En"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="job_slug_en"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_slug_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Slug En"
              label="Job Slug En"
            />
          </Col>
        </Row>
      </fieldset>
      <br />
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="job_title_ar"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_title_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Title Ar"
              label="Job Title Ar"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="job_slug_ar"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_slug_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Slug Ar"
              label="Job Slug Ar"
            />
          </Col>
        </Row>
      </fieldset>
      <br />
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="job_title_fr"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_title_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Title Fr"
              label="Job Title Fr"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="job_slug_fr"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_slug_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Slug Fr"
              label="Job Slug Fr"
            />
          </Col>
        </Row>
      </fieldset>
      <br />
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="job_title_de"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_title_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Title De"
              label="Job Title De"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="job_slug_de"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_slug_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Slug De"
              label="Job Slug De"
            />
          </Col>
        </Row>
      </fieldset>
      <br />
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="job_title_ru"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_title_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Title Ru"
              label="Job Title Ru"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="job_slug_ru"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_slug_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Slug Ru"
              label="Job Slug Ru"
            />
          </Col>
        </Row>
      </fieldset>
      <br />
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="job_title_se"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_title_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Title Se"
              label="Job Title Se"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="job_slug_se"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.job_slug_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Job Slug Se"
              label="Job Slug Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default JobMainDataTab;