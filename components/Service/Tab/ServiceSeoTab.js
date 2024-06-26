import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const ServiceSeoTab = ({setFieldValue, errors, values, touched}) => {
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
                    "service_meta_title_" + lang,
                    values.service_meta_title_en
                  );
                  setFieldValue(
                    "service_meta_keywords_" + lang,
                    values.service_meta_keywords_en
                  );
                  setFieldValue(
                    "service_meta_description_" + lang,
                    values.service_meta_description_en
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
              name="service_meta_title_en"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_title_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Title En"
              label="Service Meta Title En"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_keywords_en"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_keywords_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta keywords En"
              label="Service Meta keywords En"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_meta_description_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Description En"
              label="Service Meta Description En"
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
              name="service_meta_title_ar"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_title_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Title Ar"
              label="Service Meta Title Ar"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_keywords_ar"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_keywords_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta keywords ar"
              label="Service Meta keywords ar"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_meta_description_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Description Ar"
              label="Service Meta Description Ar"
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
              name="service_meta_title_fr"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_title_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Title Fr"
              label="Service Meta Title Fr"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_keywords_ar"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_keywords_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta keywords ar"
              label="Service Meta keywords ar"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_meta_description_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Description Fr"
              label="Service Meta Description Fr"
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
              name="service_meta_title_de"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_title_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Title De"
              label="Service Meta Title De"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_keywords_de"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_keywords_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta keywords de"
              label="Service Meta keywords de"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_meta_description_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Description De"
              label="Service Meta Description De"
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
              name="service_meta_title_ru"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_title_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Title Ru"
              label="Service Meta Title Ru"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_keywords_ru"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_keywords_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta keywords ru"
              label="Service Meta keywords ru"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_meta_description_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Description Ru"
              label="Service Meta Description Ru"
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
              name="service_meta_title_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_meta_title_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Title Se"
              label="Service Meta Title Se"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_keywords_se"
              component={ReactstrapInput}
              type="textarea"
              rows={4}
              className={`form-control ${
                errors.service_meta_keywords_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta keywords se"
              label="Service Meta keywords se"
            />
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="service_meta_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_meta_description_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Meta Description Se"
              label="Service Meta Description Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default ServiceSeoTab;