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
import CityInitialValues from "./CityInitialValues";
import CityValidation from "./CityValidation";
import CityTab from "./Tabs/CityTab";
import CityShortDescriptionTab from "./Tabs/CityShortDescriptionTab";
import CitySeoTab from "./Tabs/CitySeoTab";

const CityForm = ({ city, seo, cityId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");

  function submitCity(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");

    values.city_id = cityId;
    axios
      .post(`${process.env.API_URL}dashboard/city/store`, values, {
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
            router.push("/city/list");
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
    "city_name_en",
    "city_name_ar",
    "city_name_fr",
    "city_name_de",
    "city_name_ru",
    "city_name_se",
    "city_slug_en",
    "city_slug_ar",
    "city_slug_fr",
    "city_slug_de",
    "city_slug_ru",
    "city_slug_se",
    "city_is_active",
  ];
  const shortDescriptionTabFields = [
    "city_short_description_en",
    "city_short_description_ar",
    "city_short_description_fr",
    "city_short_description_de",
    "city_short_description_ru",
    "city_short_description_se",
  ];

  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      let activeErrorTab = null;
      Object.keys(errors.city).map(function (field) {
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
      initialValues={CityInitialValues(city, seo)}
      validationSchema={Yup.object().shape(CityValidation())}
      onSubmit={(values) => {
        submitCity(values);
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
              <Tab>City Data</Tab>
              <Tab>City Short Description</Tab>
              <Tab>Seo Data</Tab>
            </TabList>
            <TabPanel>
              <CityTab
                city={city}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <CityShortDescriptionTab
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <CitySeoTab
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
              />
            </TabPanel>
          </Tabs>

          <div className="dropzone-admin mb-0 float-right me-4">
            <Col sm="4" className="form-btn">
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

export default CityForm;
