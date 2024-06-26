import {Languages} from "../../../../data/Languages";
import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../../utils/ReactStarpInputsValidation";
import React from "react";

const ProjectDeveloperDescriptionTab = ({errors, values, setFieldValue, touched}) => {
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
                                        "developer.project_developer_desc_" + lang,
                                        values.developer.project_developer_desc_en
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
                            name="developer.project_developer_desc_en"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.developer?.project_developer_desc_en
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Developer Description En"
                            label="Proect Developer Description En"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="developer.project_developer_desc_en"/>
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
                            name="developer.project_developer_desc_ar"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.developer?.project_developer_desc_ar
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Developer Description Ar"
                            label="Proect Developer Description Ar"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="developer.project_developer_desc_ar"/>
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
                            name="developer.project_developer_desc_fr"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.developer?.project_developer_desc_fr
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Developer Description Fr"
                            label="Proect Developer Description Fr"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="developer.project_developer_desc_fr"/>
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
                            name="developer.project_developer_desc_de"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.developer?.project_developer_desc_de
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Developer Description De"
                            label="Proect Developer Description De"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="developer.project_developer_desc_de"/>
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
                            name="developer.project_developer_desc_ru"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.developer?.project_developer_desc_ru
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Developer Description Ru"
                            label="Proect Developer Description Ru"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="developer.project_developer_desc_ru"/>
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
                            name="developer.project_developer_desc_se"
                            type="textarea"
                            rows={4}
                            component={ReactstrapInput}
                            className={`form-control ${
                                errors.developer?.project_developer_desc_se
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Enter Proect Developer Description Se"
                            label="Proect Developer Description Se"
                        />
                        <div
                            className="invalid-feedback"
                            style={{display: "block"}}
                        >
                            <ErrorMessage name="developer.project_developer_desc_se"/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
        </>
    );
}

export default ProjectDeveloperDescriptionTab;