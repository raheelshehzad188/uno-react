import {Col, Row} from "reactstrap";
import {Languages} from "../../../data/Languages";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React, {useEffect, useState} from "react";

const CommunityImageTab = ({
                             communityInfo,
                             setFieldValue,
                             values,
                             errors,
                             touched
                           }) => {
  const [communityImage, setCommunityImage] = useState();
  useEffect(() => {
    setCommunityImage(communityInfo?.community?.community_image);
  }, [communityInfo.community]);


    return(
    <>
      <Row className="gx-3">
        <Col sm="6" className="form-group">
          <div className="mb-3">
            <label className="label-color form-label">
              Community Image
            </label>
            <input
              type="file"
              className={`form-control ${errors.community_image && touched.community_image ? "is-invalid" : ""}`}
              placeholder="community image"
              onChange={(event) => {
                setFieldValue("community_image", event.target.files[0]);
                setCommunityImage(URL.createObjectURL(event.target.files[0]));
              }}
            />
          </div>
        </Col>
        <div className="form-group col-sm-1">
          <img src={communityImage} width="70" height="70"/>
        </div>
      </Row>
      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang != "en") {
                  setFieldValue("main_data.community_image_alt_" + lang, values.main_data.community_image_alt_en);
                  setFieldValue("main_data.community_image_title_" + lang, values.main_data.community_image_title_en);
                }
              });
            }}
            className="btn btn-sm btn-link text-primary float-right"
          >
            Apply To All Languages
          </a>
        </legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_alt_en"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_alt_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Alt En"
              label="Community Image Alt En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_alt_en"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_title_en"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_title_en ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Title En"
              label="Community Image Title En"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_title_en"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_alt_ar"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_alt_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Alt Ar"
              label="Community Image Alt Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_alt_ar"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_title_ar"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_title_ar ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Title Ar"
              label="Community Image Title Ar"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_title_ar"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_alt_fr"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_alt_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Alt Fr"
              label="Community Image Alt Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_alt_fr"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_title_fr"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_title_fr ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Title Fr"
              label="Community Image Title Fr"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_title_fr"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_alt_de"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_alt_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Alt De"
              label="Community Image Alt De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_alt_de"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_title_de"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_title_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Title De"
              label="Community Image Title De"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_title_de"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_alt_ru"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_alt_de ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Alt Ru"
              label="Community Image Alt Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_alt_ru"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_title_ru"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_title_ru ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Title Ru"
              label="Community Image Title Ru"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_title_ru"/>
            </div>
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_alt_se"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_alt_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Alt Se"
              label="Community Image Alt Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_alt_se"/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="main_data.community_image_title_se"
              component={ReactstrapInput}
              className={`form-control ${errors.main_data?.community_image_title_se ? "is-invalid" : ""}`}
              placeholder="Enter Community Image Title Se"
              label="Community Image Title Se"
            />
            <div
              className="invalid-feedback"
              style={{display: "block"}}
            >
              <ErrorMessage name="main_data.community_image_title_se"/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default CommunityImageTab;