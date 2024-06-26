import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Col, Row, Spinner } from "reactstrap";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../utils/ReactStarpInputsValidation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

const BuyStepForm = ({ buyStep, buyStepId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [file, setFile] = useState();
  useEffect(() => {
    setFile(buyStep.buy_step_icon);
  }, [buyStep]);

  function submitBuyStep(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");

    values.buy_step_id = buyStepId;
    axios
      .post(`${process.env.API_URL}dashboard/buy-step/store`, values, {
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
            router.push("/buy-steps/list");
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
  const [activeTab, setActiveTab] = useState(0);
  const mainDataTabFields = [
    "buy_step_title_en",
    "buy_step_title_ar",
    "buy_step_title_fr",
    "buy_step_title_de",
    "buy_step_title_ru",
    "buy_step_title_se",
    "buy_step_is_active",
    "buy_step_sorting",
  ];
  const shortDescriptionTabFields = [
    "buy_step_description_en",
    "buy_step_description_ar",
    "buy_step_description_fr",
    "buy_step_description_de",
    "buy_step_description_ru",
    "buy_step_description_se",
  ];

  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      let activeErrorTab = null;
      Object.keys(errors).map(function (field) {
        if (mainDataTabFields.includes(field)) {
          activeErrorTab = 0;
        }
        if (
          shortDescriptionTabFields.includes(field) &&
          activeErrorTab === null
        ) {
          activeErrorTab = 1;
        }
      });
      setActiveTab(activeErrorTab);
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={{
        buy_step_title_en: buyStep?.buy_step_title_en,
        buy_step_title_ar: buyStep?.buy_step_title_ar,
        buy_step_title_fr: buyStep?.buy_step_title_fr,
        buy_step_title_de: buyStep?.buy_step_title_de,
        buy_step_title_ru: buyStep?.buy_step_title_ru,
        buy_step_title_se: buyStep?.buy_step_title_se,
        buy_step_description_en: buyStep?.buy_step_description_en,
        buy_step_description_ar: buyStep?.buy_step_description_ar,
        buy_step_description_fr: buyStep?.buy_step_description_fr,
        buy_step_description_de: buyStep?.buy_step_description_de,
        buy_step_description_ru: buyStep?.buy_step_description_ru,
        buy_step_description_se: buyStep?.buy_step_description_se,
        buy_step_is_active: buyStep?.buy_step_is_active,
        buy_step_sorting: buyStep?.buy_step_sorting,
      }}
      validationSchema={Yup.object().shape({
        buy_step_title_en: Yup.string()
          .required("FAQ title en is required")
          .nullable(),
        buy_step_title_ar: Yup.string()
          .required("FAQ title ar is required")
          .nullable(),
        buy_step_title_fr: Yup.string()
          .required("FAQ title fr is required")
          .nullable(),
        buy_step_title_de: Yup.string()
          .required("FAQ title de is required")
          .nullable(),
        buy_step_title_ru: Yup.string()
          .required("FAQ title ru is required")
          .nullable(),
        buy_step_title_se: Yup.string()
          .required("FAQ title se is required")
          .nullable(),
        buy_step_is_active: Yup.string()
          .required("FAQ active status is required")
          .nullable(),
        buy_step_sorting: Yup.string()
          .required("FAQ sorting is required")
          .nullable(),
        buy_step_description_en: Yup.string()
          .required("FAQ description en is required")
          .nullable(),
        buy_step_description_ar: Yup.string()
          .required("FAQ description ar is required")
          .nullable(),
        buy_step_description_fr: Yup.string()
          .required("FAQ description fr is required")
          .nullable(),
        buy_step_description_de: Yup.string()
          .required("FAQ description de is required")
          .nullable(),
        buy_step_description_ru: Yup.string()
          .required("FAQ description ru is required")
          .nullable(),
        buy_step_description_se: Yup.string()
          .required("FAQ description se is required")
          .nullable(),
      })}
      onSubmit={(values) => {
        submitBuyStep(values);
      }}
      validateOnChange={true}
    >
      {({ props, form, setFieldValue, values, errors, touched }) => (
        <Form>
          {activeErrorTab(errors)}
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab>BuyStep Main Data</Tab>
              <Tab>FAQ descrption</Tab>
            </TabList>

            <TabPanel>
              <Row className="gx-3">
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_title_en"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ Title En"
                    label="FAQ Title En"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_title_ar"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ Title Ar"
                    label="FAQ Title Ar"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_title_fr"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ Title Fr"
                    label="FAQ Title Fr"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_title_de"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ Title De"
                    label="FAQ Title De"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_title_ru"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ Title Ru"
                    label="FAQ Title Ru"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_title_se"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ Title Se"
                    label="FAQ Title Se"
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="buy_step_is_active"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="FAQ active"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="buy_step_sorting"
                    component={ReactstrapInput}
                    className="form-control"
                    label="FAQ sorting"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">
                      BuyStep Image
                    </label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.buy_step_icon && touched.buy_step_icon
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="buy_step image"
                      onChange={(event) => {
                        setFieldValue("buy_step_icon", event.target.files[0]);
                        setFile(URL.createObjectURL(event.target.files[0]));
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={file} width="70" height="70" />
                </div>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row className="gx-3">
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_description_en"
                    type="textarea"
                    rows={4}
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ description en"
                    label="FAQ description en"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_description_ar"
                    type="textarea"
                    rows={4}
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ description ar"
                    label="FAQ description ar"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_description_fr"
                    type="textarea"
                    rows={4}
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ description fr"
                    label="FAQ description fr"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_description_de"
                    type="textarea"
                    rows={4}
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ description de"
                    label="FAQ description de"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_description_ru"
                    type="textarea"
                    rows={4}
                    component={ReactstrapInput}
                    className="form-control"
                    value={values.description_ru}
                    placeholder="Enter FAQ description ru"
                    label="FAQ description ru"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="buy_step_description_se"
                    type="textarea"
                    rows={4}
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter FAQ description se"
                    label="FAQ description se"
                  />
                </Col>
              </Row>
            </TabPanel>
          </Tabs>

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

export default BuyStepForm;
