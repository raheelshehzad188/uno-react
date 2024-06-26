import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Col, Spinner } from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import ProjectPropertyInitialValues from "./ProjectPropertyInitialValues";
import ProjectPropertyValidation from "./ProjectPropertyValidation";
import ProjectPropertyImageTab from "./Tabs/PropertyTypeImageTab";
import { fetchData } from "../api/fetchData";
import ProjectPropertyMainDataTab from "./Tabs/ProjectPropertyMainDataTab";

const ProjectPropertyForm = ({
  projectProperty,
  projectTitle,
  projectId,
  projectPropertyId,
}) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [file, setFile] = useState();
  const [propertyTypes, setPropertyTypes] = useState([]);
  const defaultSelectOption = { id: "", name: "select an option" };

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/lookup-list/property-type`).then(
      function (response) {
        if (response) {
          setPropertyTypes([defaultSelectOption, ...response.data?.data]);
        }
      }
    );
    setFile(projectProperty.project_property_image);
  }, [projectProperty]);

  function submitProjectProperty(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    axios
      .post(
        `${process.env.API_URL}dashboard/project-property/store/${projectId}/${projectPropertyId}`,
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
            router.push(`/project-property/${projectId}/${projectTitle}`);
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

  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      setActiveTab(0);
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={ProjectPropertyInitialValues(projectProperty)}
      validationSchema={Yup.object().shape(ProjectPropertyValidation())}
      onSubmit={(values) => {
        submitProjectProperty(values);
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
              <Tab>Project Property Main Data</Tab>
              <Tab>Project Property Image</Tab>
            </TabList>
            <TabPanel>
              <ProjectPropertyMainDataTab
                projectPropertyData={projectProperty}
                propertyTypes={propertyTypes}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <ProjectPropertyImageTab
                projectPropertyData={projectProperty}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
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

export default ProjectPropertyForm;
