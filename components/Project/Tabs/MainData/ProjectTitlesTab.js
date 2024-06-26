import {Languages} from "../../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../../utils/ReactStarpInputsValidation";
import React from "react";

const ProjectTitlesTab = ({values, setFieldValue, errors, touched}) => {
    return (
        <>
            <fieldset className="form-control">
                <legend>English Data
                    <a onClick={() => {
                        Languages.map((lang, i) => {
                            if (lang != "en") {
                                setFieldValue('project.project_title_' + lang, values.project.project_title_en);
                                setFieldValue('project.project_slug_' + lang, values.project.project_slug_en);
                                setFieldValue('project.project_menu_title_' + lang, values.project.project_menu_title_en);
                            }
                        })
                    }}
                       className="btn btn-sm btn-link text-primary float-right"
                    >Apply To All Languages</a>
                </legend>
                <Row className="gx-3">
                    <Col sm="4" className="form-group">
                        <Field name='project.project_title_en' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_title_en ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Title En" label="Project Title En"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_title_en'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_slug_en' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_slug_en ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project SLug En" label="Project SLug En"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_slug_en'/>
                        </div>
                    </Col>
                    <Col sm="4" className="form-group">
                        <Field name='project.project_menu_title_en' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_menu_title_en ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Menu Title En"
                               label="Project Menu Title En"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_menu_title_en'/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                    <Col sm="4" className="form-group">
                        <Field name='project.project_title_ar' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_title_ar ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Title Ar" label="Project Title Ar"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_title_ar'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_slug_ar' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_slug_ar ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project SLug Ar" label="Project SLug Ar"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_slug_ar'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_menu_title_ar' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_menu_title_ar ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Menu Title Ar"
                               label="Project Menu Title Ar"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_menu_title_ar'/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                    <Col sm="4" className="form-group">
                        <Field name='project.project_title_fr' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_title_fr ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Title Fr" label="Project Title Fr"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_title_fr'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_slug_fr' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_slug_fr ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project SLug Fr" label="Project SLug Fr"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_slug_fr'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_menu_title_fr' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_menu_title_fr ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Menu Title Fr"
                               label="Project Menu Title Fr"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_menu_title_fr'/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Dutch Data</legend>
                <Row className="gx-3">
                    <Col sm="4" className="form-group">
                        <Field name='project.project_title_de' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_title_de ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Title De" label="Project Title De"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_title_de'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_slug_de' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_slug_de ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project SLug De" label="Project SLug De"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_slug_de'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_menu_title_de' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_menu_title_de ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Menu Title De"
                               label="Project Menu Title De"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_menu_title_de'/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                    <Col sm="4" className="form-group">
                        <Field name='project.project_title_ru' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_title_ru ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Title Ru" label="Project Title Ru"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_title_ru'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_slug_ru' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_slug_ru ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project SLug Ru" label="Project SLug Ru"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_slug_ru'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_menu_title_ru' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_menu_title_ru ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Menu Title Ru"
                               label="Project Menu Title Ru"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_menu_title_ru'/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                    <Col sm="4" className="form-group">
                        <Field name='project.project_title_se' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_title_se ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Title Se" label="Project Title Se"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_title_se'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_slug_se' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_slug_se ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project SLug Se" label="Project SLug Se"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_slug_se'/>
                        </div>
                    </Col>

                    <Col sm="4" className="form-group">
                        <Field name='project.project_menu_title_se' type="text"
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_menu_title_se ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Menu Title Se"
                               label="Project Menu Title Se"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='project.project_menu_title_se'/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
        </>
    );
}

export default ProjectTitlesTab;