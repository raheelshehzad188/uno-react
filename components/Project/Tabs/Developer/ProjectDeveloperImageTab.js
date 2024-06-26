import React, {useEffect, useState} from "react";
import {Col, Row} from "reactstrap";
import {Languages} from "../../../../data/Languages";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../../utils/ReactStarpInputsValidation";

const ProjectDeveloperImageTab = ({
                                      developerData
                                      , errors
                                      , values
                                      , setFieldValue
                                      , touched
                                  }) => {
    const [developerImage, setDeveloperImage] = useState("");
 
    useEffect(() => {
        setDeveloperImage(developerData?.project_developer_image);
    }, [developerData]);

    return (
        <>
            <Row className="gx-3">
                <Col sm="6" className="form-group">
                    <div className="mb-3">
                        <label className="label-color form-label">
                            Project Developer Image
                        </label>
                        <input
                            type="file"
                            className={`form-control ${
                                errors.project_developer_image && touched.project_developer_image
                                    ? "is-invalid"
                                    : ""
                            }`}
                            placeholder="Project Developer Image"
                            onChange={(event) => {
                                setFieldValue('project_developer_image', event.target.files[0]);
                                setDeveloperImage(URL.createObjectURL(event.target.files[0]));
                            }}
                        />
                    </div>
                </Col>
                <div className="form-group col-sm-1">
                    <img src={developerImage} width="70" height="70"/>
                </div>
                
            </Row>

            <fieldset className="form-control">
                <legend>English Data <a onClick={() => {
                    Languages.map((lang, i) => {
                        if (lang != "en") {
                            setFieldValue('developer.project_developer_image_alt_' + lang, values.developer.project_developer_image_alt_en);
                            setFieldValue('developer.project_developer_image_title_' + lang, values.developer.project_developer_image_title_en);
                        }
                    })
                }} className="btn btn-sm btn-link text-primary float-right">Apply To All Languages</a>
                </legend>
                <Row>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_alt_en'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_alt_en ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Alt En" label="Project Developer Image Alt En"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_alt_en'/>
                        </div>
                    </Col>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_title_en'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_title_en ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Title En"
                               label="Project Developer Image Title En"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_title_en'/>
                        </div>
                    </Col>
                </Row></fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_alt_ar'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_alt_ar ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Alt Ar" label="Project Developer Image Alt Ar"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_alt_ar'/>
                        </div>
                    </Col>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_title_ar'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_title_ar ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Title Ar"
                               label="Project Developer Image Title Ar"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_title_ar'/>
                        </div>
                    </Col>
                </Row></fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>French Data</legend>
                <Row>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_alt_fr'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_alt_fr ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Alt Fr" label="Project Developer Image Alt Fr"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_alt_fr'/>
                        </div>
                    </Col>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_title_fr'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_title_fr ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Title Fr"
                               label="Project Developer Image Title Fr"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_title_fr'/>
                        </div>
                    </Col>
                </Row></fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Dutch Data</legend>
                <Row>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_alt_de'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_alt_de ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Alt De" label="Project Developer Image Alt De"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_alt_de'/>
                        </div>
                    </Col>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_title_de'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_title_de ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Title De"
                               label="Project Developer Image Title De"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_title_de'/>
                        </div>
                    </Col>
                </Row></fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_alt_ru'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_alt_de ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Alt Ru" label="Project Developer Image Alt Ru"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_alt_ru'/>
                        </div>
                    </Col>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_title_ru'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_title_ru ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Title Ru"
                               label="Project Developer Image Title Ru"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_title_ru'/>
                        </div>
                    </Col>
                </Row></fieldset>
            <br/>
            <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_alt_se'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_alt_se ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Alt Se" label="Project Developer Image Alt Se"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_alt_se'/>
                        </div>
                    </Col>
                    <Col sm="6" className="form-group">
                        <Field name='developer.project_developer_image_title_se'
                               component={ReactstrapInput}
                               className={`form-control ${
                                   errors.project?.project_developer_image_title_se ? "is-invalid" : ""
                               }`}
                               placeholder="Enter Project Developer Image Title Se"
                               label="Project Developer Image Title Se"
                        />
                        <div className="invalid-feedback" style={{display: "block"}}>
                            <ErrorMessage name='developer.project_developer_image_title_se'/>
                        </div>
                    </Col>
                </Row>
            </fieldset>
        </>
    );
}

export default ProjectDeveloperImageTab;