import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput, ReactstrapSelect} from "../../utils/ReactStarpInputsValidation";
import React, {useEffect, useState} from "react";
import {Languages} from "../../../data/Languages";

const CityTab = ({
                   city
                   , errors
                   , values
                   , setFieldValue
                   , touched
                 }) => {

  const [file, setFile] = useState();
  useEffect(() => {
    setFile(city.city_banner_image);
  }, [city]);
  return (
    <>
      <Row className="gx-3">

        <Col sm="4" className="form-group">
          <Field
            name="city.city_is_active"
            component={ReactstrapSelect}
            className="form-control"
            label="Area active"
            inputprops={{options: ["", "yes", "no"]}}
          />

          <div className="invalid-feedback" style={{display: "block"}}>
            <ErrorMessage name='city.city_is_active'/>
          </div>
        </Col>

        <Col sm="4" className="form-group">
          <div className="mb-3">
            <label className="label-color form-label">
              Area Banner
            </label>
            <input
              type="file"
              className={`form-control ${
                errors.city_banner_image && touched.city_banner_image
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Area banner image"
              onChange={(event) => {
                setFieldValue('city_banner_image', event.target.files[0]);
                setFile(URL.createObjectURL(event.target.files[0]));
              }}
            />
          </div>
        </Col>
        <div className="form-group col-sm-1">
          <img src={file} width="70" height="70"/>
        </div>
      </Row>
      <fieldset className="form-control">
        <legend>
          English Data{" "}
          <a
            onClick={() => {
              Languages.map((lang, i) => {
                if (lang !== "en") {
                  setFieldValue(
                    "city.city_name_" + lang,
                    values.city.city_name_en
                  );
                  setFieldValue(
                    "city.city_slug_" + lang,
                    values.city.city_slug_en
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
          <Col sm="6" className="form-group">
            <Field
              name="city.city_name_en"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Name En"
              label="Area Name En"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_name_en'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="city.city_slug_en"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Slug En"
              label="Area Slug En"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_slug_en'/>
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
              name="city.city_name_ar"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Name Ar"
              label="Area Name Ar"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_name_ar'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="city.city_slug_ar"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Slug Ar"
              label="Area Slug Ar"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_slug_ar'/>
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
              name="city.city_name_fr"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Name Fr"
              label="Area Name Fr"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_name_fr'/>
            </div>
          </Col>

          <Col sm="6" className="form-group">
            <Field
              name="city.city_slug_fr"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Slug Fr"
              label="Area Slug Fr"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_slug_fr'/>
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
              name="city.city_name_de"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Name De"
              label="Area Name De"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_name_de'/>
            </div>
          </Col>
          <Col sm="6" className="form-group">
            <Field
              name="city.city_slug_de"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Slug De"
              label="Area Slug De"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_slug_de'/>
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
              name="city.city_name_ru"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Name Ru"
              label="Area Name Ru"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_name_ru'/>
            </div>
          </Col>

          <Col sm="6" className="form-group">
            <Field
              name="city.city_slug_ru"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Slug Ru"
              label="Area Slug Ru"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_slug_ru'/>
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
              name="city.city_name_se"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Name Se"
              label="Area Name Se"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_name_se'/>
            </div>
          </Col>

          <Col sm="6" className="form-group">
            <Field
              name="city.city_slug_se"
              type="text"
              component={ReactstrapInput}
              className="form-control"
              placeholder="Enter Area Slug se"
              label="Area Slug Se"
            />
            <div className="invalid-feedback" style={{display: "block"}}>
              <ErrorMessage name='city.city_slug_se'/>
            </div>
          </Col>
        </Row>
      </fieldset>
    </>
  );
}

export default CityTab;