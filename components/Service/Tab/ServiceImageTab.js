import {Col, Row} from "reactstrap";
import {Languages} from "../../../data/Languages";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../utils/ReactStarpInputsValidation";
import React, {useEffect, useState} from "react";

const ServiceImageTab = ({
                           service,
                           setFieldValue,
                           values,
                           errors,
                           touched
                         }) => {
  const [serviceImage, setServiceImage] = useState();
  useEffect(() => {
    setServiceImage(service?.service_image);
  }, [service]);


  return (
    <>
      <Row className="gx-3">
        <Col sm="6" className="form-group">
          <div className="mb-3">
            <label className="label-color form-label">
              Service Image
            </label>
            <input
              type="file"
              className={`form-control ${errors.service_image && touched.service_image ? "is-invalid" : ""}`}
              placeholder="service image"
              onChange={(event) => {
                setFieldValue("service_image", event.target.files[0]);
                setServiceImage(URL.createObjectURL(event.target.files[0]));
              }}
            />
          </div>
        </Col>
        <div className="form-group col-sm-1">
          <img src={serviceImage} width="70" height="70"/>
        </div>
      </Row>
      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang != "en") {
                  setFieldValue("service_image_alt_" + lang, values.service_image_alt_en);
                  setFieldValue("service_image_title_" + lang, values.service_image_title_en);
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
              name="service_image_alt_en"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_alt_en ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Alt En"
              label="Service Image Alt En"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_title_en"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_title_en ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Title En"
              label="Service Image Title En"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Arabic Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_alt_ar"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_alt_ar ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Alt Ar"
              label="Service Image Alt Ar"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_title_ar"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_title_ar ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Title Ar"
              label="Service Image Title Ar"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>French Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_alt_fr"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_alt_fr ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Alt Fr"
              label="Service Image Alt Fr"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_title_fr"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_title_fr ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Title Fr"
              label="Service Image Title Fr"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>German Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_alt_de"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_alt_de ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Alt De"
              label="Service Image Alt De"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_title_de"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_title_de ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Title De"
              label="Service Image Title De"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Russian Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_alt_ru"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_alt_de ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Alt Ru"
              label="Service Image Alt Ru"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_title_ru"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_title_ru ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Title Ru"
              label="Service Image Title Ru"
            />
          </Col>
        </Row>
      </fieldset>
      <br/>
      <fieldset className="form-control">
        <legend>Swedish Data</legend>
        <Row>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_alt_se"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_alt_se ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Alt Se"
              label="Service Image Alt Se"
            />
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="service_image_title_se"
              component={ReactstrapInput}
              className={`form-control ${errors.service_image_title_se ? "is-invalid" : ""}`}
              placeholder="Enter Service Image Title Se"
              label="Service Image Title Se"
            />
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default ServiceImageTab;