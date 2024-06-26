import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const CommunitySeoTab = ({
                           setFieldValue,
                           values,
                           errors,
                           touched
                         }) => {
  return (
    <>
      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang != "en") {
                  setFieldValue("seo.community_seo_meta_description_" + lang, values.seo.community_seo_meta_description_en);
                  setFieldValue("seo.community_seo_meta_title_" + lang, values.seo.community_seo_meta_title_en);
                  setFieldValue("seo.community_seo_meta_keywords_" + lang, values.seo.community_seo_meta_keywords_en);
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
              name="seo.community_seo_meta_title_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_title_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Title En"
              label="Community Meta Title En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_title_en"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_keywords_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_keywords_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Keywords En"
              label="Community Meta Keywords En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_keywords_en"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_description_en"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_description_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Description En"
              label="Community Meta Description En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_description_en"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_title_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_title_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Title Ar"
              label="Community Meta Title Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_title_ar"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_keywords_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_keywords_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Keywords Ar"
              label="Community Meta Keywords Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_keywords_ar"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_description_ar"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_description_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Description Ar"
              label="Community Meta Description Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_description_ar"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_title_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_title_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Title Fr"
              label="Community Meta Title Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_title_fr"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_keywords_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_keywords_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Keywords fr"
              label="Community Meta Keywords Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_keywords_fr"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_description_fr"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_description_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Description Fr"
              label="Community Meta Description Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_description_fr"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_title_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_title_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Title De"
              label="Community Meta Title De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_title_de"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_keywords_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_keywords_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Keywords de"
              label="Community Meta Keywords de"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_keywords_de"/>
            </div>
          </Col>
           <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_description_de"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_description_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Description De"
              label="Community Meta Description De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_description_de"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_title_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_title_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Title Ru"
              label="Community Meta Title Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_title_ru"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_keywords_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_keywords_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Keywords ru"
              label="Community Meta Keywords ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_keywords_ru"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_description_ru"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_description_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Description Ru"
              label="Community Meta Description Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_description_ru"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row className="gx-3">
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_title_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_title_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Title Se"
              label="Community Meta Title Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_title_se"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_keywords_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_keywords_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Keywords se"
              label="Community Meta Keywords se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_keywords_se"/>
            </div>
          </Col>
          <Col sm="4" className="form-group">
            <Field
              name="seo.community_seo_meta_description_se"
              type="textarea"
              rows={4}
              component={ReactstrapInput}
              className={`form-control ${errors.seo?.community_seo_meta_description_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Meta Description Se"
              label="Community Meta Description Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="seo.community_seo_meta_description_se"/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default CommunitySeoTab;