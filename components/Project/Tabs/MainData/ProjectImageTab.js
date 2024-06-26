import {Col, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import {Languages} from "../../../../data/Languages";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../../utils/ReactStarpInputsValidation";

const ProjectImageTab = ({
                           projectData
                           , errors
                           , values
                           , setFieldValue
                           , touched
                         }) => {
  const [projectCategoryImage, setProjectCategoryImage] = useState("");
  const [project_floor_plan_file, set_project_floor_plan_file] = useState("");
  const [projectLogo, setProjectLogo] = useState("");

  useEffect(() => {
    set_project_floor_plan_file(projectData?.project?.project_floor_plan_file);
    setProjectLogo(projectData?.project?.project_logo);
    setProjectCategoryImage(projectData?.project?.project_category_image);
  }, [projectData]);

  return (
    <>
      <Row className="gx-3">
        <Col sm="6" className="form-group">
          <div className="mb-3">
            <label className="label-color form-label" style={{"width": "90%"}}>
              <span>Project Floor Plan File</span>
              <span style={{"float": "right"}}><a target="_blank" href={project_floor_plan_file} style={{"display": "block"}}> View File</a></span>
            </label>
             <input
              type="file"
              className={`form-control ${
                errors.project_floor_plan_file && touched.project_floor_plan_file
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Project Category Image"
              onChange={(event) => {
                setFieldValue('project_floor_plan_file', event.target.files[0]);
              }}
            />
          </div>
        </Col>

        <Col sm="5" className="form-group">
          <div className="mb-3">
            <label className="label-color form-label">
              Project Logo
            </label>
            <input
              type="file"
              className={`form-control ${
                errors.project_logo && touched.project_logo
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Project Logo"
              onChange={(event) => {
                setFieldValue('project_logo', event.target.files[0]);
                setProjectLogo(URL.createObjectURL(event.target.files[0]));
              }}
            />
          </div>
        </Col>
        <div className="form-group col-sm-1">
          <img src={projectLogo} width="70" height="70" style={{
            background: "gray",
            padding: "5px"
          }}/>
        </div>
        <Col sm="5" className="form-group">
          <div className="mb-3">
            <label className="label-color form-label">
              Project Category Image
            </label>
            <input
              type="file"
              className={`form-control ${
                errors.project_category_image && touched.project_category_image
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Project Category Image"
              onChange={(event) => {
                setFieldValue('project_category_image', event.target.files[0]);
                setProjectCategoryImage(URL.createObjectURL(event.target.files[0]));
              }}
            />
          </div>
        </Col>
        <div className="form-group col-sm-1">
          <img src={projectCategoryImage} width="70" height="70"/>
        </div>
      </Row>

      <fieldset className="form-control">
        <legend>English Data <a onClick={() => {
          Languages.map((lang, i) => {
            if (lang != "en") {
              setFieldValue('project.project_category_image_alt_' + lang, values.project.project_category_image_alt_en);
              setFieldValue('project.project_category_image_title_' + lang, values.project.project_category_image_title_en);
            }
          })
        }} className="btn btn-sm btn-link text-primary float-right">Apply To All Languages</a>
        </legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_alt_en'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_alt_en ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Alt En" label="Project Category Image Alt En"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_alt_en'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_title_en'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_title_en ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Title En"
                   label="Project Category Image Title En"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_title_en'/>
            </div>
          </Col>
        </Row></fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_alt_ar'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_alt_ar ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Alt Ar" label="Project Category Image Alt Ar"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_alt_ar'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_title_ar'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_title_ar ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Title Ar"
                   label="Project Category Image Title Ar"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_title_ar'/>
            </div>
          </Col>
        </Row></fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_alt_fr'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_alt_fr ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Alt Fr" label="Project Category Image Alt Fr"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_alt_fr'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_title_fr'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_title_fr ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Title Fr"
                   label="Project Category Image Title Fr"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_title_fr'/>
            </div>
          </Col>
        </Row></fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Dutch Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_alt_de'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_alt_de ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Alt De" label="Project Category Image Alt De"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_alt_de'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_title_de'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_title_de ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Title De"
                   label="Project Category Image Title De"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_title_de'/>
            </div>
          </Col>
        </Row></fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_alt_ru'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_alt_de ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Alt Ru" label="Project Category Image Alt Ru"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_alt_ru'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_title_ru'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_title_ru ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Title Ru"
                   label="Project Category Image Title Ru"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_title_ru'/>
            </div>
          </Col>
        </Row></fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_alt_se'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_alt_se ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Alt Se" label="Project Category Image Alt Se"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_alt_se'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field name='project.project_category_image_title_se'
                   component={ReactstrapInput}
                   className={`form-control ${
                     errors.project?.project_category_image_title_se ? "is-invalid" : ""
                   }`}
                   placeholder="Enter Project Category Image Title Se"
                   label="Project Category Image Title Se"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='project.project_category_image_title_se'/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default ProjectImageTab;