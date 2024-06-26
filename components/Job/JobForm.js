import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Button, Col, Row, Spinner } from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import JobValidation from "./JobValidation";
import jobInitialValues from "./JobInitialValues";
import JobMainDataTab from "./Tab/JobMainDataTab";
import JobShortDescriptionTab from "./Tab/JobShortDescriptionTab";
import JobBodyTab from "./Tab/JobBodyTab";
import JobSeoTab from "./Tab/JobSeoTab";

const JobForm = ({ job, jobId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");

  function submitJob(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.job_id = jobId;
    axios
      .post(`${process.env.API_URL}dashboard/job/store`, values, {
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
            router.push("/job/list");
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
    "job_title_en",
    "job_title_ar",
    "job_title_fr",
    "job_title_de",
    "job_title_ru",
    "job_title_se",
    "job_slug_en",
    "job_slug_ar",
    "job_slug_fr",
    "job_slug_de",
    "job_slug_ru",
    "job_slug_se",
    "job_is_active",
    "job_sorting",
  ];
  const shortDescriptionTabFields = [
    "job_short_description_en",
    "job_short_description_ar",
    "job_short_description_fr",
    "job_short_description_de",
    "job_short_description_ru",
    "job_short_description_se",
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
      initialValues={jobInitialValues(job)}
      validationSchema={Yup.object().shape(JobValidation())}
      onSubmit={(values) => {
        submitJob(values);
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
              <Tab>Job Main Data</Tab>
              <Tab>Job Short Description</Tab>
              <Tab>Job Body</Tab>
              <Tab>Job SEO Data</Tab>
            </TabList>

            <TabPanel>
              <JobMainDataTab
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <JobShortDescriptionTab
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <JobBodyTab
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <JobSeoTab
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

export default JobForm;
