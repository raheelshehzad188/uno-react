import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";
import TextEditor from "../../Editor/TextEditor";

const ServiceBodyTab = ({setFieldValue, errors, values, touched}) => {
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
                    "service_body_" + lang,
                    values.service_body_en
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
              initialValue={values.service_body_en}
              setFieldValue={setFieldValue}
              name="service_body_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_body_en ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Body En"
              label="Service Body En"
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
              initialValue={values.service_body_ar}
              setFieldValue={setFieldValue}
              name="service_body_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_body_ar ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Body Ar"
              label="Service Body Ar"
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
              initialValue={values.service_body_fr}
              setFieldValue={setFieldValue}
              name="service_body_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_body_fr ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Body Fr"
              label="Service Body Fr"
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
              initialValue={values.service_body_de}
              setFieldValue={setFieldValue}
              name="service_body_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_body_de ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Body De"
              label="Service Body De"
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
              initialValue={values.service_body_ru}
              setFieldValue={setFieldValue}
              name="service_body_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_body_ru ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Body Ru"
              label="Service Body Ru"
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
              initialValue={values.service_body_se}
              setFieldValue={setFieldValue}
              name="service_body_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.service_body_se ? "is-invalid" : ""
              }`}
              placeholder="Enter Service Body Se"
              label="Service Body Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
  );
}
export default ServiceBodyTab;