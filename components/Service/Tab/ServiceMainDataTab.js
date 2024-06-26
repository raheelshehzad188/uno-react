import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput, ReactstrapSelect} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const ServiceMainDataTab = ({setFieldValue,errors,values,touched}) => {
  return(
    <>
      <Row>
        <Col sm="4" className="form-group">
          <Field
            name="service_show_in_home"
            component={ReactstrapSelect}
            className="form-control"
            label="Service Show Home"
            inputprops={{ options: ["", "yes", "no"] }}
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="service_is_active"
            component={ReactstrapSelect}
            className="form-control"
            label="Service Active Status"
            inputprops={{ options: ["", "yes", "no"] }}
          />
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="service_sorting"
            component={ReactstrapInput}
            className="form-control"
            label="Service Sorting"
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
                    "service_title_" + lang,
                    values.service_title_en
                  );
                  setFieldValue(
                    "service_slug_" + lang,
                    values.service_slug_en
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
              name="service_title_en"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_title_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Title En"
              label="Service Title En"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_slug_en"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_slug_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Slug En"
              label="Service Slug En"
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
              name="service_title_ar"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_title_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Title Ar"
              label="Service Title Ar"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_slug_ar"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_slug_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Slug Ar"
              label="Service Slug Ar"
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
              name="service_title_fr"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_title_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Title Fr"
              label="Service Title Fr"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_slug_fr"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_slug_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Slug Fr"
              label="Service Slug Fr"
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
              name="service_title_de"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_title_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Title De"
              label="Service Title De"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_slug_de"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_slug_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Slug De"
              label="Service Slug De"
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
              name="service_title_ru"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_title_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Title Ru"
              label="Service Title Ru"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_slug_ru"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_slug_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Slug Ru"
              label="Service Slug Ru"
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
              name="service_title_se"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_title_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Title Se"
              label="Service Title Se"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_slug_se"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_slug_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Slug Se"
              label="Service Slug Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default ServiceMainDataTab;