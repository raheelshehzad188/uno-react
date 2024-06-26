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
import ServiceValidation from "./ServiceValidation";
import serviceInitialValues from "./ServiceInitialValues";
import ServiceMainDataTab from "./Tab/ServiceMainDataTab";
import ServiceShortDescriptionTab from "./Tab/ServiceShortDescriptionTab";
import ServiceBodyTab from "./Tab/ServiceBodyTab";
import ServiceSeoTab from "./Tab/ServiceSeoTab";
import ServiceImageTab from "./Tab/ServiceImageTab";

const ServiceForm = ({ service, serviceId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");

  function submitService(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.service_id = serviceId;
    axios
      .post(`${process.env.API_URL}dashboard/service/store`, values, {
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
            router.push("/service/list");
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
  const mainDataTabFields = [
    "service_title_en",
    "service_title_ar",
    "service_title_fr",
    "service_title_de",
    "service_title_ru",
    "service_title_se",
    "service_slug_en",
    "service_slug_ar",
    "service_slug_fr",
    "service_slug_de",
    "service_slug_ru",
    "service_slug_se",
    "service_is_active",
    "service_show_in_home",
    "service_sorting",
  ];
  const shortDescriptionTabFields = [
    "service_short_description_en",
    "service_short_description_ar",
    "service_short_description_fr",
    "service_short_description_de",
    "service_short_description_ru",
    "service_short_description_se",
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
      initialValues={serviceInitialValues(service)}
      validationSchema={Yup.object().shape(ServiceValidation())}
      onSubmit={(values) => {
        submitService(values);
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
              <Tab>Service Main Data</Tab>
              <Tab>Service Short Description</Tab>
              <Tab>Service Body</Tab>
              <Tab>Service SEO Data</Tab>
              <Tab>Service Image Data</Tab>
            </TabList>

            <TabPanel>
              <ServiceMainDataTab
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <ServiceShortDescriptionTab
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <ServiceBodyTab
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <ServiceSeoTab
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <ServiceImageTab
                service={service}
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
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

export default ServiceForm;
