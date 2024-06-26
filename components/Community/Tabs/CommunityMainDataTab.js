import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput, ReactstrapSelect} from "../../utils/ReactStarpInputsValidation";
import {Languages} from "../../../data/Languages";
import React from "react";

const CommunityMainDataTab = ({agents,developers,cities,setFieldValue, values, errors,touched}) => {
  return(
    <>
      <Row className="gx-3">
        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_city_id"
            type="text"
            component={ReactstrapSelect}
            inputprops={{options: cities}}
            className={`form-control ${errors.main_data?.community_city_id ? "is-invalid" : ""}`}
            placeholder="Enter Community City"
            label="Community City"
          />
          <div
            className="invalid-feedback"
            style={{display: "block"}}
          >
            <ErrorMessage name="main_data.community_city_id"/>
          </div>
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_developer_id"
            type="text"
            component={ReactstrapSelect}
            inputprops={{options: developers}}
            className={`form-control ${errors.main_data?.community_developer_id ? "is-invalid" : ""}`}
            placeholder="Enter Community Developer"
            label="Community Developer"
          />
          <div
            className="invalid-feedback"
            style={{display: "block"}}
          >
            <ErrorMessage name="main_data.community_developer_id"/>
          </div>
        </Col>
        {/*<Col sm="4" className="form-group">*/}
        {/*  <Field name='main_data.community_agent_id' type="text"*/}
        {/*         component={ReactstrapSelect}*/}
        {/*         inputprops={{options: agents}}*/}
        {/*         className={`form-control ${*/}
        {/*           errors.main_data?.community_agent_id ? "is-invalid" : ""*/}
        {/*         }`}*/}
        {/*         placeholder="Enter Agent" label="Community Agent"*/}

        {/*  />*/}
        {/*  <div className="invalid-feedback" style={{display: "block"}}>*/}
        {/*    <ErrorMessage name='main_data.community_agent_id'/>*/}
        {/*  </div>*/}
        {/*</Col>*/}
        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_is_active"
            component={ReactstrapSelect}
            className="form-control"
            label="community active"
            inputprops={{options: ["", "yes", "no"]}}
          />
          <div className="invalid-feedback" style={{display: "block"}}>
            <ErrorMessage name='main_data.community_is_active'/>
          </div>
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_is_show_header_menu"
            component={ReactstrapSelect}
            className="form-control"
            label="community show in header menu"
            inputprops={{options: ["", "yes", "no"]}}
          />
          <div className="invalid-feedback" style={{display: "block"}}>
            <ErrorMessage name='main_data.community_is_show_header_menu'/>
          </div>
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_is_show_footer"
            component={ReactstrapSelect}
            className="form-control"
            label="community show in footer menu"
            inputprops={{options: ["", "yes", "no"]}}
          />
          <div className="invalid-feedback" style={{display: "block"}}>
            <ErrorMessage name='main_data.community_is_show_footer'/>
          </div>
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_sorting"
            type="number"
            component={ReactstrapInput}
            className="form-control"
            label="community sorting"
          />
          <div className="invalid-feedback" style={{display: "block"}}>
            <ErrorMessage name='main_data.community_sorting'/>
          </div>
        </Col>

        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_latitude"
            type="text"
            component={ReactstrapInput}
            className="form-control"
            label="community latitude"
          />
          <div className="invalid-feedback" style={{display: "block"}}>
            <ErrorMessage name='main_data.community_latitude'/>
          </div>
        </Col>
        <Col sm="4" className="form-group">
          <Field
            name="main_data.community_longitude"
            type="text"
            component={ReactstrapInput}
            className="form-control"
            label="community longitude"
          />
          <div className="invalid-feedback" style={{display: "block"}}>
            <ErrorMessage name='main_data.community_longitude'/>
          </div>
        </Col>
        <Col sm="12" className="form-group">
          <Field
            name="main_data.community_map"
            type="text"
            component={ReactstrapInput}
            className={`form-control ${errors.main_data?.community_map ? "is-invalid" : ""}`}
            placeholder="Enter Community Map Link"
            label="Community Map Link"
          />
          <div
            className="invalid-feedback"
            style={{display: "block"}}
          >
            <ErrorMessage name="main_data.community_map"/>
          </div>
        </Col>
      </Row>

      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang) => {
                if (lang != "en") {
                  setFieldValue("main_data.community_title_" + lang, values.main_data.community_title_en);
                  setFieldValue("main_data.community_slug_" + lang, values.main_data.community_slug_en);
                  setFieldValue("main_data.community_menu_title_" + lang, values.main_data.community_menu_title_en);
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
              name="main_data.community_title_en"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_title_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Title En"
              label="Community Title En"
            />

            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='main_data.community_title_en'/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_slug_en"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_slug_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Slug En"
              label="Community Slug En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_slug_en"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_menu_title_en"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_menu_title_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Menu Title En"
              label="Community Menu Title En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_menu_title_en"/>
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
              name="main_data.community_title_ar"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_title_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Title Ar"
              label="Community Title Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_title_ar"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_slug_ar"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_slug_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Slug Ar"
              label="Community Slug Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_slug_ar"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_menu_title_ar"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_menu_title_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Menu Title Ar"
              label="Community Menu Title Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_menu_title_ar"/>
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
              name="main_data.community_title_fr"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_title_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Title Fr"
              label="Community Title Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_title_fr"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_slug_fr"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_slug_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Slug Fr"
              label="Community Slug Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_slug_fr"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_menu_title_fr"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_menu_title_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Menu Title Fr"
              label="Community Menu Title Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_menu_title_fr"/>
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
              name="main_data.community_title_de"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_title_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Title De"
              label="Community Title De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_title_de"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_slug_de"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_slug_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Slug De"
              label="Community Slug De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_slug_de"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_menu_title_de"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_menu_title_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Menu Title De"
              label="Community Menu Title De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_menu_title_de"/>
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
              name="main_data.community_title_ru"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_title_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Title Ru"
              label="Community Title Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_title_ru"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_slug_ru"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_slug_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Slug Ru"
              label="Community Slug Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_slug_ru"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_menu_title_ru"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_menu_title_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Menu Title Ru"
              label="Community Menu Title Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_menu_title_ru"/>
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
              name="main_data.community_title_se"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_title_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Title Se"
              label="Community Title Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_title_se"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_slug_se"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_slug_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Slug Se"
              label="Community Slug Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_slug_se"/>
            </div>
          </Col>

          <Col sm="4" className="form-group">
            <Field
              name="main_data.community_menu_title_se"
              type="text"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_menu_title_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Menu Title Se"
              label="Community Menu Title Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_menu_title_se"/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default CommunityMainDataTab;