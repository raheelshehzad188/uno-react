import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import React, {useState, useEffect} from "react";
import * as Yup from "yup";
import {Button, Col, Row, Spinner} from "reactstrap";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../utils/ReactStarpInputsValidation";
import "react-tabs/style/react-tabs.css";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import login from "../../pages/authentication/login";
import {Languages} from "../../data/Languages";

const FacilityForm = ({facility, facilityId}) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");

  function submitFacility(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.facility_id = facilityId;
    axios
      .post(`${process.env.API_URL}dashboard/facility/store`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("UNO_TOKEN"),
        },
        responseType: "json",
      })
      .then((response) => {
        if (response) {
          if (response.data.success) {
            toast.success("Data Saved Successfully");
            router.push("/facility/list");
          } else {
            setSubmitDisabled(false);
            setSubmitBtnText("Submit");
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
        facility_title_en: facility?.facility_title_en,
        facility_title_ar: facility?.facility_title_ar,
        facility_title_fr: facility?.facility_title_fr,
        facility_title_de: facility?.facility_title_de,
        facility_title_ru: facility?.facility_title_ru,
        facility_title_se: facility?.facility_title_se,
        facility_is_active: facility?.facility_is_active,
        facility_icon: facility?.facility_icon,
      }}
      validationSchema={Yup.object().shape({
        facility_title_en: Yup.string()
          .required("facility title en is required")
          .nullable(),
        facility_title_ar: Yup.string()
          .required("facility title ar is required")
          .nullable(),
        facility_title_fr: Yup.string()
          .required("facility title fr is required")
          .nullable(),
        facility_title_de: Yup.string()
          .required("facility title de is required")
          .nullable(),
        facility_title_ru: Yup.string()
          .required("facility title ru is required")
          .nullable(),
        facility_title_se: Yup.string()
          .required("facility title se is required")
          .nullable(),
        facility_is_active: Yup.string()
          .required("facility title active status is required")
          .nullable(),
        facility_icon: Yup.string()
          .required("facility icon is required")
          .nullable(),
      })}
      onSubmit={(values) => {
        submitFacility(values);
      }}
      validateOnChange={true}
    >
      {({props, form, setFieldValue, values, errors, touched}) => (
        <Form>
          <Row>
            <Col sm="12">
              <a
                onClick={() => {
                  Languages.map((lang, i) => {
                    if (lang != "en") {
                      setFieldValue(
                        "facility_title_" + lang,
                        values.facility_title_en
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
            <Row className="gx-3">
              <Col sm="4" className="form-group">
                <Field
                  name="facility_title_en"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  placeholder="Enter facility title En"
                  label="facility title En"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="facility_title_ar"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  placeholder="Enter facility title Ar"
                  label="facility title Ar"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="facility_title_fr"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  placeholder="Enter facility title Fr"
                  label="facility title Fr"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="facility_title_de"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  placeholder="Enter facility title De"
                  label="facility title De"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="facility_title_ru"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  placeholder="Enter facility title Ru"
                  label="facility title Ru"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="facility_title_se"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  placeholder="Enter facility title Se"
                  label="facility title Se"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="facility_is_active"
                  component={ReactstrapSelect}
                  className="form-control"
                  label="facility active"
                  inputprops={{options: ["", "yes", "no"]}}
                />
              </Col>

              <Col sm="4" className="form-group">
                <div className="mb-3">
                  <label className="label-color form-label">
                    Facility Icon{" "}
                    <a
                      target="_blank"
                      href="https://react-icons.github.io/react-icons/icons/fa/"
                    >
                      <small>
                        {"("}How to get icon code?{")"}
                      </small>
                    </a>{" "}
                  </label>
                  <Field
                    name="facility_icon"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter facility Icon"
                  />
                </div>
              </Col>
              <Col sm="12" className="form-group">
                <h4 className="mt-5 mb-4">
                  How to get icons?{" "}
                  <a
                    target="_blank"
                    href="https://react-icons.github.io/react-icons/icons/fa/"
                  >
                    {"("}Check Icon Package{")"}
                  </a>{" "}
                </h4>
                <img
                  src="https://mohsamy.sirv.com/gif/icon-copy.gif"
                  className="media"
                />
              </Col>
              <Col sm="2" className="form-group">
                {/*<div*/}
                {/*    className="property-type-icon">{facilityIcon !== "" ? (parse(facilityIcon || "")) : ""}</div>*/}
              </Col>
            </Row>

            <div className="dropzone-admin mb-0 float-right me-4">
              <Col sm="4" className="form-btn">
                <Button
                  type="submit"
                  className="btn btn-gradient btn-pill"
                  disabled={submitDisabled}
                >
                  {submitBtnText}
                  <span style={{display: submitDisabled ? "" : "none"}}>
                  <Spinner size="sm">Loading...</Spinner>
                  <span> Loading...</span>
                </span>
                </Button>
              </Col>
            </div>
        </Form>
        )
      }
    </Formik>
  )
    ;
}
;

export default FacilityForm;
