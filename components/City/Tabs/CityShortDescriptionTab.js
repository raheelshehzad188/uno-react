import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const CityShortDescriptionTab = ({errors, values, setFieldValue, touched}) => {
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
                    "city.city_short_description_" + lang,
                    values.city.city_short_description_en
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
              name="city.city_short_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.community?.city_short_description_en
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Area Short Description En"
              label="Area Short Description En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="city.city_short_description_en"/>
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
              name="city.city_short_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.community?.city_short_description_ar
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Area Short Description Ar"
              label="Area Short Description Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="city.city_short_description_ar"/>
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
              name="city.city_short_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.community?.city_short_description_fr
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Area Short Description Fr"
              label="Area Short Description Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="city.city_short_description_fr"/>
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
              name="city.city_short_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.community?.city_short_description_de
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Area Short Description De"
              label="Area Short Description De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="city.city_short_description_de"/>
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
              name="city.city_short_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.community?.city_short_description_ru
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Area Short Description Ru"
              label="Area Short Description Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="city.city_short_description_ru"/>
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
              name="city.city_short_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${
                errors.community?.city_short_description_se
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Enter Area Short Description Se"
              label="Area Short Description Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="city.city_short_description_se"/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default CityShortDescriptionTab;