import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Col, Row, Spinner } from "reactstrap";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../utils/ReactStarpInputsValidation";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import {Languages} from "../../data/Languages";

const GalleryForm = ({
  gallery,
  moduleItemTitle,
  moduleId,
  ImageId,
  moduleType,
}) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [file, setFile] = useState();
  useEffect(() => {
    console.log();
    setFile(gallery.gallery_image);
  }, [gallery]);

  function submitGallery(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    axios
      .post(
        `${process.env.API_URL}dashboard/gallery/store/${moduleType}/${moduleId}/${ImageId}`,
        values,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("UNO_TOKEN"),
          },
          responseType: "json",
        }
      )
      .then((response) => {
        if (response) {
          if (response.data.success) {
            toast.success("Data Saved Successfully");
            router.push(
              `/gallery/${moduleType}/${moduleId}/${moduleItemTitle}`
            );
          } else {
            setSubmitDisabled(false);
            let requestError = "";
            response.data.errors.map((error, i) => {
              requestError +=
                '<span class="text-danger">' + error + "</span><br>";
            });
            Swal.fire({
              icon: "error",
              html: requestError,
            });
          }
        }
      })
      .catch((error) => {
        console.error("There was a problem with the request:", error);
        if (error.response.status === 401) {
          localStorage.removeItem("UNO_TOKEN");
          router.push("/authentication/login");
        }
      });
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        gallery_image_alt_en: gallery?.gallery_image_alt_en,
        gallery_image_alt_ar: gallery?.gallery_image_alt_ar,
        gallery_image_alt_fr: gallery?.gallery_image_alt_fr,
        gallery_image_alt_de: gallery?.gallery_image_alt_de,
        gallery_image_alt_ru: gallery?.gallery_image_alt_ru,
        gallery_image_alt_se: gallery?.gallery_image_alt_se,
        gallery_image_title_en: gallery?.gallery_image_title_en,
        gallery_image_title_ar: gallery?.gallery_image_title_ar,
        gallery_image_title_fr: gallery?.gallery_image_title_fr,
        gallery_image_title_de: gallery?.gallery_image_title_de,
        gallery_image_title_ru: gallery?.gallery_image_title_ru,
        gallery_image_title_se: gallery?.gallery_image_title_se,
        gallery_is_active: gallery?.gallery_is_active,
        gallery_sorting: gallery?.gallery_sorting,
      }}
      validationSchema={Yup.object().shape({
        gallery_is_active: Yup.string()
          .required("active status is required")
          .nullable(),
        gallery_sorting: Yup.string()
          .required("sorting is required")
          .nullable(),
      })}
      onSubmit={(values) => {
        submitGallery(values);
      }}
      validateOnChange={true}
    >
      {({ props, form, setFieldValue, values, errors, touched }) => (
        <Form>
          <Row className="gx-3">
            <Col sm="5" className="form-group">
              <div className="mb-3">
                <label className="label-color form-label">Image</label>
                <input
                  type="file"
                  className={`form-control ${
                    errors.image && touched.image ? "is-invalid" : ""
                  }`}
                  placeholder="page image"
                  onChange={(event) => {
                    setFieldValue("image", event.target.files[0]);
                    setFile(URL.createObjectURL(event.target.files[0]));
                  }}
                />
              </div>
            </Col>
            <div className="form-group col-sm-1">
              <img src={file} width="70" height="70" />
            </div>
            <Col sm="3" className="form-group">
              <Field
                name="gallery_is_active"
                component={ReactstrapSelect}
                className="form-control"
                label="Active Status"
                inputprops={{ options: ["", "yes", "no"] }}
              />
            </Col>
            <Col sm="3" className="form-group">
              <Field
                name="gallery_sorting"
                type="number"
                component={ReactstrapInput}
                className="form-control"
                label="Sorting"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <a
                onClick={() => {
                  Languages.map((lang, i) => {
                    if (lang != "en") {
                      setFieldValue(
                        "gallery_image_alt_" + lang,
                        values.gallery_image_alt_en
                      );
                      setFieldValue(
                        "gallery_image_title_" + lang,
                        values.gallery_image_title_en
                      );

                    }
                  });
                }}
                className="btn btn-sm btn-link text-primary float-right"
              >
                Apply To All Languages
              </a>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_alt_en"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_alt_en ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Alt En"
                label="Image Alt En"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_alt_en" />
              </div>
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_title_en"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_title_en ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Title En"
                label="Image Title En"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_title_en" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_alt_ar"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_alt_ar ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Alt Ar"
                label="Image Alt Ar"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_alt_ar" />
              </div>
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_title_ar"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_title_ar ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Title Ar"
                label="Image Title Ar"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_title_ar" />
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_alt_fr"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_alt_fr ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Alt Fr"
                label="Image Alt Fr"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_alt_fr" />
              </div>
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_title_fr"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_title_fr ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Title Fr"
                label="Image Title Fr"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_title_fr" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_alt_de"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_alt_de ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Alt De"
                label="Image Alt De"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_alt_de" />
              </div>
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_title_de"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_title_de ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Title De"
                label="Image Title De"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_title_de" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_alt_ru"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_alt_de ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Alt Ru"
                label="Image Alt Ru"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_alt_ru" />
              </div>
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_title_ru"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_title_ru ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Title Ru"
                label="Image Title Ru"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_title_ru" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_alt_se"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_alt_se ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Alt Se"
                label="Image Alt Se"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_alt_se" />
              </div>
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="gallery_image_title_se"
                component={ReactstrapInput}
                className={`form-control ${
                  errors.image_title_se ? "is-invalid" : ""
                }`}
                placeholder="Enter Image Title Se"
                label="Image Title Se"
              />
              <div className="invalid-feedback" style={{ display: "block" }}>
                <ErrorMessage name="gallery_image_title_se" />
              </div>
            </Col>
          </Row>

          <div className="dropzone-admin mb-0 float-right me-4">
            <Col sm="12" className="form-btn">
              <Button
                type="submit"
                className="btn btn-gradient btn-pill"
                disabled={submitDisabled}
              >
                {submitBtnText}
                <span style={{ display: submitDisabled ? "" : "none" }}>
                  <Spinner size="sm">Loading...</Spinner>
                  <span> Loading...</span>
                </span>
              </Button>
            </Col>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default GalleryForm;
