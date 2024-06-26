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
import { Languages } from "../../data/Languages";

const AddAgentForm = (props) => {
  const router = useRouter();
  const agentId = props.agent_id;
  const agentInfo = props.agent;
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [file, setFile] = useState();
  useEffect(() => {
    setFile(agentInfo.agent_image);
  }, [agentInfo]);

  const validFileExtensions = ["jpg", "gif", "png", "jpeg", "svg", "webp"];

  function submitAgent(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    console.log(values.agent_image);
    values.agent_id = agentId;
    axios
      .post(`${process.env.API_URL}dashboard/agent/store`, values, {
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
            router.push("/agents/all-agents");
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

  const [activeTab, setActiveTab] = useState(0);
  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      setActiveTab(0);
    }
  }
  return (
    <Formik
      enableReinitialize
      initialValues={{
        agent_name: agentInfo?.agent_name,
        agent_job: agentInfo?.agent_job,
        agent_license: agentInfo?.agent_license,
        agent_tax_number: agentInfo?.agent_tax_number,
        agent_service_areas: agentInfo?.agent_service_areas,
        agent_specialties: agentInfo?.agent_specialties,
        agent_office_no: agentInfo?.agent_office_no,
        agent_mobile_no: agentInfo?.agent_office_no,
        agent_email: agentInfo?.agent_email,
        agent_language: agentInfo?.agent_language,
        agent_info: agentInfo?.agent_info,
        agent_is_active: agentInfo?.agent_is_active,
        // agent_image: "",
        agent_slug: agentInfo?.agent_slug,
        agent_instagram_url: agentInfo?.agent_instagram_url,
        agent_linkedin_url: agentInfo?.agent_linkedin_url,
        agent_whatsapp_number: agentInfo?.agent_whatsapp_number,
        agent_meta_description_en: agentInfo?.agent_meta_description_en,
        agent_meta_description_ar: agentInfo?.agent_meta_description_ar,
        agent_meta_description_fr: agentInfo?.agent_meta_description_fr,
        agent_meta_description_de: agentInfo?.agent_meta_description_de,
        agent_meta_description_ru: agentInfo?.agent_meta_description_ru,
        agent_meta_description_se: agentInfo?.agent_meta_description_se,
        agent_meta_title_en: agentInfo?.agent_meta_title_en,
        agent_meta_title_ar: agentInfo?.agent_meta_title_ar,
        agent_meta_title_fr: agentInfo?.agent_meta_title_fr,
        agent_meta_title_de: agentInfo?.agent_meta_title_de,
        agent_meta_title_ru: agentInfo?.agent_meta_title_ru,
        agent_meta_title_se: agentInfo?.agent_meta_title_se,
        agent_meta_keywords_en: agentInfo?.agent_meta_keywords_en,
        agent_meta_keywords_ar: agentInfo?.agent_meta_keywords_ar,
        agent_meta_keywords_fr: agentInfo?.agent_meta_keywords_fr,
        agent_meta_keywords_de: agentInfo?.agent_meta_keywords_de,
        agent_meta_keywords_ru: agentInfo?.agent_meta_keywords_ru,
        agent_meta_keywords_se: agentInfo?.agent_meta_keywords_se,
        agent_sorting: agentInfo?.agent_sorting,
      }}
      validationSchema={Yup.object().shape({
        agent_name: Yup.string().required("Agent Name is required").nullable(),
        agent_slug: Yup.string().required("agent slug is required").nullable(),
        agent_job: Yup.string().required("agent job is required").nullable(),
        agent_service_areas: Yup.string()
          .required("agent service areas is required")
          .nullable(),
        agent_specialties: Yup.string()
          .required("agent specialties is required")
          .nullable(),
        agent_office_no: Yup.string()
          .required("agent office no is required")
          .nullable(),
        agent_mobile_no: Yup.string()
          .required("agent mobile no is required")
          .nullable(),
        agent_email: Yup.string()
          .required("agent email is required")
          .email()
          .nullable(),
        agent_language: Yup.string()
          .required("agent language is required")
          .nullable(),
        agent_info: Yup.string().required("agent info is required").nullable(),
        agent_sorting: Yup.string().required("agent sorting is required").nullable(),
        // agent_image: Yup.mixed()
        //     // .required("A file is required")
        //     .test("fileType", "Invalid file type", (value) => {
        //         if (!value) return true;
        //         const pieces = value.split(".");
        //         const fileType = pieces[pieces.length - 1];
        //         return validFileExtensions.includes(fileType.toLowerCase());
        //     }),
      })}
      onSubmit={(values) => {
        submitAgent(values);
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
              <Tab>Agent Main Data</Tab>
              <Tab>Agent Social Links</Tab>
              <Tab>Agent SEO Data</Tab>
            </TabList>

            <TabPanel>
              <Row className="gx-3">
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_name"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent Name"
                    label="Agent Name"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_slug"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent Slug"
                    label="Agent Slug"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_job"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent Job"
                    label="Agent Job"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_license"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent license"
                    label="Agent license"
                  />
                </Col>

                <Col sm="4" className="form-group">
                  <Field
                    name="agent_tax_number"
                    component={ReactstrapInput}
                    type="text"
                    className="form-control"
                    placeholder="Enter Agent Tax Number"
                    label="Agent Tax Number"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_service_areas"
                    component={ReactstrapInput}
                    type="text"
                    className="form-control"
                    label="Agent Service Areas"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_specialties"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent Specialties"
                    label="Agent Specialties"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_language"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent Language"
                    label="Agent Language"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_office_no"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent Office No"
                    label="Agent Office No"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_mobile_no"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    placeholder="Enter Agent Mobile No"
                    label="Agent Mobile No"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    type="email"
                    name="agent_email"
                    component={ReactstrapInput}
                    className="form-control"
                    label="Agent Email"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    type="number"
                    name="agent_sorting"
                    component={ReactstrapInput}
                    className="form-control"
                    label="Agent sorting"
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <Field
                    name="agent_is_active"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="agent active"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="4" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">
                      Agent Image
                    </label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.agent_image && touched.agent_image
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="agent image"
                      onChange={(event) => {
                        setFieldValue("agent_image", event.target.files[0]);
                        setFile(URL.createObjectURL(event.target.files[0]));
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={file} width="70" height="70" />
                </div>

                <Col sm="12" className="form-group">
                  <Field
                    type="textarea"
                    name="agent_info"
                    component={ReactstrapInput}
                    className="form-control"
                    rows={4}
                    label="agent information"
                    placeholder="Enter Agent Information"
                  />
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <Row className="gx-3">

                <Col sm="12" className="form-group">
                  <Field
                    name="agent_instagram_url"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    value={values.agent_instagram_url}
                    placeholder="Enter Agent instagram Url"
                    label="Agent instagram Url"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="agent_linkedin_url"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    value={values.agent_linkedin_url}
                    placeholder="Enter Agent linkedin Url"
                    label="Agent linkedin Url"
                  />
                </Col>
                <Col sm="12" className="form-group">
                  <Field
                    name="agent_whatsapp_number"
                    type="text"
                    component={ReactstrapInput}
                    className="form-control"
                    value={values.agent_whatsapp_number}
                    placeholder="Enter Agent WhatsApp "
                    label="Agent WhatsApp"
                  />
                </Col>
              </Row>
            </TabPanel>
            <TabPanel>
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "agent_meta_description_" + lang,
                            values.agent_meta_description_en
                          );
                          setFieldValue(
                            "agent_meta_title_" + lang,
                            values.agent_meta_title_en
                          );
                          setFieldValue(
                            "agent_meta_keywords_" + lang,
                            values.agent_meta_keywords_en
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
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_title_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_title_en}
                      placeholder="Enter Agent Meta Title en"
                      label="Agent Meta Title en"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_keywords_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_keywords_en}
                      placeholder="Enter Agent Meta keywords en"
                      label="Agent Meta keywords en"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_description_en}
                      placeholder="Enter Agent Meta description en"
                      label="Agent Meta description en"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_title_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_title_ar}
                      placeholder="Enter Agent Meta Title Ar"
                      label="Agent Meta Title Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_keywords_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_keywords_ar}
                      placeholder="Enter Agent Meta Keywords Ar"
                      label="Agent Meta Keywords Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_description_ar}
                      placeholder="Enter Agent Meta description ar"
                      label="Agent Meta description ar"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_title_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_title_fr}
                      placeholder="Enter Agent Meta Title Fr"
                      label="Agent Meta Title Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_keywords_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_keywords_fr}
                      placeholder="Enter Agent Meta Keywords Fr"
                      label="Agent Meta Keywords Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_description_fr}
                      placeholder="Enter Agent Meta description fr"
                      label="Agent Meta description fr"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_title_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_title_de}
                      placeholder="Enter Agent Meta Title De"
                      label="Agent Meta Title De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_keywords_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_keywords_de}
                      placeholder="Enter Agent Meta Keywords de"
                      label="Agent Meta keywords de"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_description_de}
                      placeholder="Enter Agent Meta description de"
                      label="Agent Meta description de"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_title_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_title_ru}
                      placeholder="Enter Agent Meta Title Ru"
                      label="Agent Meta Title Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_keywords_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_keywords_ru}
                      placeholder="Enter Agent Meta Keywords Ru"
                      label="Agent Meta Keywords Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_description_ru}
                      placeholder="Enter Agent Meta description ru"
                      label="Agent Meta description ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_title_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_title_se}
                      placeholder="Enter Agent Meta Title Se"
                      label="Agent Meta Title Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_keywords_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_keywords_se}
                      placeholder="Enter Agent Meta Keywords Se"
                      label="Agent Meta Keywords Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="agent_meta_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className="form-control"
                      value={values.agent_meta_description_se}
                      placeholder="Enter Agent Meta description se"
                      label="Agent Meta description se"
                    />
                  </Col>
                </Row>
              </fieldset>
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

export default AddAgentForm;
