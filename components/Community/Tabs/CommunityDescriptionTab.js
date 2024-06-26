import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const CommunityDescriptionTab = ({
                                   setFieldValue,
                                   values,
                                   errors,
                                   touched
                                 }) => {
  return(
    <>

      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang != "en") {
                  setFieldValue("main_data.community_short_description_" + lang, values.main_data.community_short_description_en);
                  setFieldValue("main_data.community_description_" + lang, values.main_data.community_description_en);
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
              name="main_data.community_short_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_short_description_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Short Description En"
              label="Community Short Description En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_short_description_en"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_description_en ? "is-invalid" : ""}`}
              placeholder="Enter About Community Description En"
              label="Community About Description En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_description_en"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_short_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_short_description_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Short Description Ar"
              label="Community Short Description Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_short_description_ar"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_description_ar ? "is-invalid" : ""}`}
              placeholder="Enter About Community Description Ar"
              label="Community About Description Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_description_ar"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_short_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_short_description_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Short Description Fr"
              label="Community Short Description Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_short_description_fr"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_description_fr ? "is-invalid" : ""}`}
              placeholder="Enter About Community Description Fr"
              label="Community About Description Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_description_fr"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_short_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_short_description_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Short Description De"
              label="Community Short Description De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_short_description_de"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_description_de ? "is-invalid" : ""}`}
              placeholder="Enter About Community Description De"
              label="Community About Description De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_description_de"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_short_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_short_description_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Short Description Ru"
              label="Community Short Description Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_short_description_ru"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_description_ru ? "is-invalid" : ""}`}
              placeholder="Enter About Community Description Ru"
              label="Community About Description Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_description_ru"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row className="gx-3">
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_short_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_short_description_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Short Description Se"
              label="Community Short Description Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_short_description_se"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_description_se ? "is-invalid" : ""}`}
              placeholder="Enter About Community Description Se"
              label="Community About Description Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_description_se"/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default CommunityDescriptionTab;