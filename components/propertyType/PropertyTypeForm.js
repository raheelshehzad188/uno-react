import { ErrorMessage, Field, Form, Formik } from "formik";
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
import parse from "html-react-parser";
import { Languages } from "../../data/Languages";

const PropertyTypeForm = (props) => {
  const router = useRouter();
  const propertyTypeInfo = props.propertyType;
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [propertyTypeBanner, setPropertyTypeBanner] = useState("");
  const [propertyTypeIcon, setPropertyTypeIcon] = useState("");
  const [propertyTypeId, setPropertyTypeId] = useState();
  useEffect(() => {
    setPropertyTypeBanner(propertyTypeInfo?.property_type_banner);
    setPropertyTypeIcon(propertyTypeInfo?.property_type_icon);
    setPropertyTypeId(propertyTypeInfo?.property_type_id);
  }, [propertyTypeInfo]);

  function submitPropertyType(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.property_type_id = propertyTypeId;
    axios
      .post(`${process.env.API_URL}dashboard/property-type/store`, values, {
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
            router.push("/propertyTypes/list");
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
        property_type_icon: propertyTypeInfo?.property_type_icon,
        property_type_title_en: propertyTypeInfo?.property_type_title_en,
        property_type_title_ar: propertyTypeInfo?.property_type_title_ar,
        property_type_title_fr: propertyTypeInfo?.property_type_title_fr,
        property_type_title_de: propertyTypeInfo?.property_type_title_de,
        property_type_title_ru: propertyTypeInfo?.property_type_title_ru,
        property_type_title_se: propertyTypeInfo?.property_type_title_se,
        property_type_menu_title_en:
          propertyTypeInfo?.property_type_menu_title_en,
        property_type_menu_title_ar:
          propertyTypeInfo?.property_type_menu_title_ar,
        property_type_menu_title_fr:
          propertyTypeInfo?.property_type_menu_title_fr,
        property_type_menu_title_de:
          propertyTypeInfo?.property_type_menu_title_de,
        property_type_menu_title_ru:
          propertyTypeInfo?.property_type_menu_title_ru,
        property_type_menu_title_se:
          propertyTypeInfo?.property_type_menu_title_se,
        property_type_slug_en: propertyTypeInfo?.property_type_slug_en,
        property_type_slug_ar: propertyTypeInfo?.property_type_slug_ar,
        property_type_slug_fr: propertyTypeInfo?.property_type_slug_fr,
        property_type_slug_de: propertyTypeInfo?.property_type_slug_de,
        property_type_slug_ru: propertyTypeInfo?.property_type_slug_ru,
        property_type_slug_se: propertyTypeInfo?.property_type_slug_se,
        property_type_description_en:
          propertyTypeInfo?.property_type_description_en,
        property_type_description_ar:
          propertyTypeInfo?.property_type_description_ar,
        property_type_description_fr:
          propertyTypeInfo?.property_type_description_fr,
        property_type_description_de:
          propertyTypeInfo?.property_type_description_de,
        property_type_description_ru:
          propertyTypeInfo?.property_type_description_ru,
        property_type_description_se:
          propertyTypeInfo?.property_type_description_se,
        property_type_short_description_en:
          propertyTypeInfo?.property_type_short_description_en,
        property_type_short_description_ar:
          propertyTypeInfo?.property_type_short_description_ar,
        property_type_short_description_fr:
          propertyTypeInfo?.property_type_short_description_fr,
        property_type_short_description_de:
          propertyTypeInfo?.property_type_short_description_de,
        property_type_short_description_ru:
          propertyTypeInfo?.property_type_short_description_ru,
        property_type_short_description_se:
          propertyTypeInfo?.property_type_short_description_se,
        property_type_is_active: propertyTypeInfo?.property_type_is_active,
        property_type_is_show_slider:
          propertyTypeInfo?.property_type_is_show_slider,
        property_type_is_show_header_menu:
          propertyTypeInfo?.property_type_is_show_header_menu,
        property_type_is_show_footer:
          propertyTypeInfo?.property_type_is_show_footer,
        property_type_sorting: propertyTypeInfo?.property_type_sorting,
        property_type_meta_title_en:
          propertyTypeInfo?.property_type_meta_title_en,
        property_type_meta_title_ar:
          propertyTypeInfo?.property_type_meta_title_ar,
        property_type_meta_title_fr:
          propertyTypeInfo?.property_type_meta_title_fr,
        property_type_meta_title_de:
          propertyTypeInfo?.property_type_meta_title_de,
        property_type_meta_title_ru:
          propertyTypeInfo?.property_type_meta_title_ru,
        property_type_meta_title_se:
          propertyTypeInfo?.property_type_meta_title_se,
        property_type_meta_keywords_en:
          propertyTypeInfo?.property_type_meta_keywords_en,
        property_type_meta_keywords_ar:
          propertyTypeInfo?.property_type_meta_keywords_ar,
        property_type_meta_keywords_fr:
          propertyTypeInfo?.property_type_meta_keywords_fr,
        property_type_meta_keywords_de:
          propertyTypeInfo?.property_type_meta_keywords_de,
        property_type_meta_keywords_ru:
          propertyTypeInfo?.property_type_meta_keywords_ru,
        property_type_meta_keywords_se:
          propertyTypeInfo?.property_type_meta_keywords_se,
        property_type_meta_description_en:
          propertyTypeInfo?.property_type_meta_description_en,
        property_type_meta_description_ar:
          propertyTypeInfo?.property_type_meta_description_ar,
        property_type_meta_description_fr:
          propertyTypeInfo?.property_type_meta_description_fr,
        property_type_meta_description_de:
          propertyTypeInfo?.property_type_meta_description_de,
        property_type_meta_description_ru:
          propertyTypeInfo?.property_type_meta_description_ru,
        property_type_meta_description_se:
          propertyTypeInfo?.property_type_meta_description_se,
      }}
      validationSchema={Yup.object().shape({
        property_type_title_en: Yup.string()
          .required("Property Type title en is required")
          .nullable(),
        property_type_title_ar: Yup.string()
          .required("Property Type title ar is required")
          .nullable(),
        property_type_title_fr: Yup.string()
          .required("Property Type title fr is required")
          .nullable(),
        property_type_title_de: Yup.string()
          .required("Property Type title de is required")
          .nullable(),
        property_type_title_ru: Yup.string()
          .required("Property Type title ru is required")
          .nullable(),
        property_type_title_se: Yup.string()
          .required("Property Type title se is required")
          .nullable(),
        property_type_menu_title_en: Yup.string()
          .required("Property Type title en is required")
          .nullable(),
        property_type_menu_title_ar: Yup.string()
          .required("Property Type title ar is required")
          .nullable(),
        property_type_menu_title_fr: Yup.string()
          .required("Property Type title fr is required")
          .nullable(),
        property_type_menu_title_de: Yup.string()
          .required("Property Type title de is required")
          .nullable(),
        property_type_menu_title_ru: Yup.string()
          .required("Property Type title ru is required")
          .nullable(),
        property_type_menu_title_se: Yup.string()
          .required("Property Type title se is required")
          .nullable(),
        property_type_slug_en: Yup.string()
          .required("Property Type title en is required")
          .nullable(),
        property_type_slug_ar: Yup.string()
          .required("Property Type title ar is required")
          .nullable(),
        property_type_slug_fr: Yup.string()
          .required("Property Type title fr is required")
          .nullable(),
        property_type_slug_de: Yup.string()
          .required("Property Type title de is required")
          .nullable(),
        property_type_slug_ru: Yup.string()
          .required("Property Type title ru is required")
          .nullable(),
        property_type_slug_se: Yup.string()
          .required("Property Type title se is required")
          .nullable(),
        property_type_is_active: Yup.string()
          .required("Property Type active status is required")
          .nullable(),
        property_type_is_show_slider: Yup.string()
          .required("Property Type show slider status is required")
          .nullable(),
        property_type_is_show_header_menu: Yup.string()
          .required("Property Type show header menu status is required")
          .nullable(),
        property_type_is_show_footer: Yup.string()
          .required("Property Type show footer status is required")
          .nullable(),
        property_type_sorting: Yup.string()
          .required("Property Type sorting is required")
          .nullable(),
      })}
      onSubmit={(values) => {
        submitPropertyType(values);
      }}
      validateOnChange={true}
    >
      {({ props, form, setFieldValue, values, errors }) => (
        <Form>
          {activeErrorTab(errors)}
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab>Main Data</Tab>
              <Tab>Banner</Tab>
              <Tab>Property Type Description </Tab>
              <Tab>SEO Data</Tab>
            </TabList>

            <TabPanel>
              <Row className="gx-3">
                <Col sm="3" className="form-group">
                  <Field
                    name="property_type_is_active"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="Property Type active"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="property_type_is_show_slider"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="Property Type show slider"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="property_type_is_show_header_menu"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="Property Type show in header menu"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="property_type_is_show_footer"
                    component={ReactstrapSelect}
                    className="form-control"
                    label="Property Type show in footer menu"
                    inputprops={{ options: ["", "yes", "no"] }}
                  />
                </Col>
                <Col sm="3" className="form-group">
                  <Field
                    name="property_type_sorting"
                    type="number"
                    component={ReactstrapInput}
                    className="form-control"
                    label="Property Type sorting"
                  />
                </Col>
              </Row>
              <fieldset className="form-control">
                <legend>
                  English Data{" "}
                  <a
                    onClick={() => {
                      Languages.map((lang, i) => {
                        if (lang != "en") {
                          setFieldValue(
                            "property_type_title_" + lang,
                            values.property_type_title_en
                          );
                          setFieldValue(
                            "property_type_slug_" + lang,
                            values.property_type_slug_en
                          );
                          setFieldValue(
                            "property_type_menu_title_" + lang,
                            values.property_type_menu_title_en
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
                      name="property_type_title_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Title En"
                      label="Property Type Title En"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_slug_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_slug_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Slug En"
                      label="Property Type Slug En"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_menu_title_en"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_menu_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Menu Title En"
                      label="Property Type Menu Title En"
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
                      name="property_type_title_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Title Ar"
                      label="Property Type Title Ar"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_slug_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_slug_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Slug Ar"
                      label="Property Type Slug Ar"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_menu_title_ar"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_menu_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Menu Title Ar"
                      label="Property Type Menu Title Ar"
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
                      name="property_type_title_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Title Fr"
                      label="Property Type Title Fr"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_slug_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_slug_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Slug Fr"
                      label="Property Type Slug Fr"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_menu_title_fr"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_menu_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Menu Title Fr"
                      label="Property Type Menu Title Fr"
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
                      name="property_type_title_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Title De"
                      label="Property Type Title De"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_slug_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_slug_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Slug De"
                      label="Property Type Slug De"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_menu_title_de"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_menu_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Menu Title De"
                      label="Property Type Menu Title De"
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
                      name="property_type_title_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Title Ru"
                      label="Property Type Title Ru"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_slug_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_slug_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Slug Ru"
                      label="Property Type Slug Ru"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_menu_title_ru"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_menu_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Menu Title Ru"
                      label="Property Type Menu Title Ru"
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
                      name="property_type_title_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Title Se"
                      label="Property Type Title Se"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_slug_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_slug_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Slug Se"
                      label="Property Type Slug Se"
                    />
                  </Col>

                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_menu_title_se"
                      type="text"
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_menu_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Menu Title Se"
                      label="Property Type Menu Title Se"
                    />
                  </Col>
                </Row>
              </fieldset>
            </TabPanel>
            <TabPanel>
              <Row className="gx-3">
                <Col sm="6" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">
                      Property Type Banner
                    </label>
                    <input
                      type="file"
                      className={`form-control ${
                        errors.property_type_banner &&
                        touched.property_type_banner
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Property Type banner"
                      onChange={(event) => {
                        setFieldValue(
                          "property_type_banner",
                          event.target.files[0]
                        );
                        setPropertyTypeBanner(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                    />
                  </div>
                </Col>
                <div className="form-group col-sm-1">
                  <img src={propertyTypeBanner} width="70" height="70" />
                </div>
              </Row>
              <Row className="gx-3">
                <Col sm="10" className="form-group">
                  <div className="mb-3">
                    <label className="label-color form-label">
                      Property Type Icon{" "}
                      <small>
                        To get icon svg code please{" "}
                        <a target="_blank" href="https://www.svgrepo.com/">
                          click here
                        </a>{" "}
                      </small>
                    </label>
                    <textarea
                      type="textarea"
                      rows={4}
                      value={propertyTypeIcon}
                      className={`form-control ${
                        errors.property_type_icon && touched.property_type_icon
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Property Type Icon"
                      onChange={(event) => {
                        setFieldValue("property_type_icon", event.target.value);
                        setPropertyTypeIcon(event.target.value);
                      }}
                    >
                      {propertyTypeIcon}
                    </textarea>
                  </div>
                </Col>
                <Col sm="2" className="form-group">
                  <div className="property-type-icon">
                    {propertyTypeIcon !== ""
                      ? parse(propertyTypeIcon || "")
                      : ""}
                  </div>
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
                            "property_type_short_description_" + lang,
                            values.property_type_short_description_en
                          );
                          setFieldValue(
                            "property_type_description_" + lang,
                            values.property_type_description_en
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
                      name="property_type_short_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_short_description_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Short Description En"
                      label="Property Type Short Description En"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_description_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Description En"
                      label="Property Type Description En"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Arabic Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_short_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_short_description_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Short Description Ar"
                      label="Property Type Short Description Ar"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_description_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Description Ar"
                      label="Property Type Description Ar"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>French Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_short_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_short_description_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Short Description Fr"
                      label="Property Type Short Description Fr"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_description_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Description Fr"
                      label="Property Type Description Fr"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>German Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_short_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_short_description_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Short Description De"
                      label="Property Type Short Description De"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_description_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Description De"
                      label="Property Type Description De"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Russian Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_short_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_short_description_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Short Description Ru"
                      label="Property Type Short Description Ru"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_description_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Description Ru"
                      label="Property Type Description Ru"
                    />
                  </Col>
                </Row>
              </fieldset>
              <br />
              <fieldset className="form-control">
                <legend>Swedish Data</legend>
                <Row className="gx-3">
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_short_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_short_description_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Short Description Se"
                      label="Property Type Short Description Se"
                    />
                  </Col>
                  <Col sm="6" className="form-group">
                    <Field
                      name="property_type_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_description_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Description Se"
                      label="Property Type Description Se"
                    />
                  </Col>
                </Row>
              </fieldset>
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
                            "property_type_meta_title_" + lang,
                            values.property_type_meta_title_en
                          );
                          setFieldValue(
                            "property_type_meta_keywords_" + lang,
                            values.property_type_meta_keywords_en
                          );
                          setFieldValue(
                            "property_type_meta_description_" + lang,
                            values.property_type_meta_description_en
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
                      name="property_type_meta_title_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_title_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta Title En"
                      label="Property Type Meta Title En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_keywords_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_keywords_en ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta keywords En"
                      label="Property Type Meta keywords En"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_description_en"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_description_en
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Meta Description En"
                      label="Property Type Meta Description En"
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
                      name="property_type_meta_title_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_title_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta Title Ar"
                      label="Property Type Meta Title Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_keywords_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_keywords_ar ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta keywords Ar"
                      label="Property Type Meta keywords Ar"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_description_ar"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_description_ar
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Meta Description Ar"
                      label="Property Type Meta Description Ar"
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
                      name="property_type_meta_title_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_title_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta Title Fr"
                      label="Property Type Meta Title Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_keywords_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_keywords_fr ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta keywords Fr"
                      label="Property Type Meta keywords Fr"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_description_fr"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_description_fr
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Meta Description Fr"
                      label="Property Type Meta Description Fr"
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
                      name="property_type_meta_title_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_title_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta Title De"
                      label="Property Type Meta Title De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_keywords_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_keywords_de ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta keywords De"
                      label="Property Type Meta keywords De"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_description_de"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_description_de
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Meta Description De"
                      label="Property Type Meta Description De"
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
                      name="property_type_meta_title_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_title_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta Title Ru"
                      label="Property Type Meta Title Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_keywords_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_keywords_ru ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta keywords Ru"
                      label="Property Type Meta keywords Ru"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_description_ru"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_description_ru
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Meta Description Ru"
                      label="Property Type Meta Description Ru"
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
                      name="property_type_meta_title_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_title_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta Title Se"
                      label="Property Type Meta Title Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_keywords_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_keywords_se ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Property Type Meta keywords Se"
                      label="Property Type Meta keywords Se"
                    />
                  </Col>
                  <Col sm="4" className="form-group">
                    <Field
                      name="property_type_meta_description_se"
                      type="textarea"
                      rows={4}
                      component={ReactstrapInput}
                      className={`form-control ${
                        errors.property_type_meta_description_se
                          ? "is-invalid"
                          : ""
                      }`}
                      placeholder="Enter Property Type Meta Description Se"
                      label="Property Type Meta Description Se"
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

export default PropertyTypeForm;
