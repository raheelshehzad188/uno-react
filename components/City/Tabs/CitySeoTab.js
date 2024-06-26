import {Languages} from "../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React from "react";

const CitySeoTab = ({
                           errors, values, setFieldValue, touched
                       }) => {
    return (<>
        <fieldset className="form-control">
            <legend>
                English Data{" "}
                <a
                    onClick={() => {
                        Languages.map((lang, i) => {
                            if (lang !== "en") {
                                setFieldValue("seo.city_seo_meta_title_" + lang, values.seo.city_seo_meta_title_en);
                                setFieldValue("seo.city_seo_meta_keywords_" + lang, values.seo.city_seo_meta_keywords_en);
                                setFieldValue("seo.city_seo_meta_description_" + lang, values.seo.city_seo_meta_description_en);
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
                        name="seo.city_seo_meta_title_en"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_title_en ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Title En"
                        label="City Meta Title En"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_title_en'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="seo.city_seo_meta_keywords_en"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_keywords_en ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Keywords En"
                        label="City Meta Keywords En"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_keywords_en'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="seo.city_seo_meta_description_en"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_description_en ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Description En"
                        label="City Meta Description En"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_description_en'/>
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
                        name="seo.city_seo_meta_title_ar"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_title_ar ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Title Ar"
                        label="City Meta Title Ar"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_title_ar'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                      name="seo.city_seo_meta_keywords_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${errors?.seo?.city_seo_meta_keywords_ar ? "is-invalid" : ""}`}
                      placeholder="Enter City Meta Keywords Ar"
                      label="City Meta Keywords Ar"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_keywords_ar'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="seo.city_seo_meta_description_ar"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_description_ar ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Description Ar"
                        label="City Meta Description Ar"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_description_ar'/>
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
                        name="seo.city_seo_meta_title_fr"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_title_fr ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Title Fr"
                        label="City Meta Title Fr"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_title_fr'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                      name="seo.city_seo_meta_keywords_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${errors?.seo?.city_seo_meta_keywords_fr ? "is-invalid" : ""}`}
                      placeholder="Enter City Meta Keywords fr"
                      label="City Meta Keywords fr"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_keywords_fr'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="seo.city_seo_meta_description_fr"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_description_fr ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Description Fr"
                        label="City Meta Description Fr"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_description_fr'/>
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
                        name="seo.city_seo_meta_title_de"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_title_de ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Title De"
                        label="City Meta Title De"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_title_de'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                      name="seo.city_seo_meta_keywords_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${errors?.seo?.city_seo_meta_keywords_de ? "is-invalid" : ""}`}
                      placeholder="Enter City Meta Keywords de"
                      label="City Meta Keywords de"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_keywords_de'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="seo.city_seo_meta_description_de"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_description_de ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Description De"
                        label="City Meta Description De"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_description_de'/>
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
                        name="seo.city_seo_meta_title_ru"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_title_ru ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Title Ru"
                        label="City Meta Title Ru"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_title_ru'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                      name="seo.city_seo_meta_keywords_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${errors?.seo?.city_seo_meta_keywords_ru ? "is-invalid" : ""}`}
                      placeholder="Enter City Meta Keywords ru"
                      label="City Meta Keywords ru"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_keywords_ru'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="seo.city_seo_meta_description_ru"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_description_ru ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Description Ru"
                        label="City Meta Description Ru"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_description_ru'/>
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
                        name="seo.city_seo_meta_title_se"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_title_se ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Title Se"
                        label="City Meta Title Se"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_title_se'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                      name="seo.city_seo_meta_keywords_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${errors?.seo?.city_seo_meta_keywords_se ? "is-invalid" : ""}`}
                      placeholder="Enter City Meta Keywords se"
                      label="City Meta Keywords se"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_keywords_se'/>
                    </div>
                </Col>
                <Col sm="4" className="form-group">
                    <Field
                        name="seo.city_seo_meta_description_se"
                        type="textarea"
                        rows={4}
                        component={ReactstrapInput}
                        className={`form-control ${errors?.seo?.city_seo_meta_description_se ? "is-invalid" : ""}`}
                        placeholder="Enter City Meta Description Se"
                        label="City Meta Description Se"
                    />
                    <div className="invalid-feedback" style={{display: "block"}}>
                        <ErrorMessage name='seo.city_seo_meta_description_se'/>
                    </div>
                </Col>
            </Row>
        </fieldset>
    </>);
}

export default CitySeoTab;