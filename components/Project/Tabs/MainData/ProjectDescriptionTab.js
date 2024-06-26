import {Languages} from "../../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../../utils/ReactStarpInputsValidation";
import React from "react";

const ProjectDescriptionTab = ({errors, values, setFieldValue, touched}) => {
  return (
    <>
      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang !== "en") {
                  setFieldValue(
                    "project.project_description_" + lang,
                    values.project.project_description_en
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
              name="project.project_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.project?.project_description_en
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Project Description En"
              label="Project Description En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="project.project_description_en"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="project.project_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.project?.project_description_ar
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Project Description Ar"
              label="Project Description Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="project.project_description_ar"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="project.project_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.project?.project_description_fr
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Project Description Fr"
              label="Project Description Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="project.project_description_fr"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="project.project_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.project?.project_description_de
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Project Description De"
              label="Project Description De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="project.project_description_de"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="project.project_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.project?.project_description_ru
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Project Description Ru"
              label="Project Description Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="project.project_description_ru"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row className="gx-3">
          <Col sm="12" className="form-group">
            <Field
              name="project.project_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.project?.project_description_se
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Project Description Se"
              label="Project Description Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="project.project_description_se"/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default ProjectDescriptionTab;