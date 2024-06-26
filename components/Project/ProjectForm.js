import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Button, Col, Row, Spinner } from "reactstrap";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import ProjectInitialValues from "./ProjectInitialValues";
import ProjectValidation from "./ProjectValidation";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectTitlesTab from "./Tabs/MainData/ProjectTitlesTab";
import { fetchData } from "../api/fetchData";
import ProjectOptionsTab from "./Tabs/MainData/ProjectOptionsTab";
import ProjectImageTab from "./Tabs/MainData/ProjectImageTab";
import ProjectDeveloperDescriptionTab from "./Tabs/Developer/ProjectDeveloperDescriptionTab";
import ProjectDeveloperImageTab from "./Tabs/Developer/ProjectDeveloperImageTab";
import ProjectSeoTab from "./Tabs/Seo/ProjectSeoTab";
import ProjectCommunityDescriptionTab from "./Tabs/Community/ProjectCommunityDescriptionTab";
import ProjectCommunityImageTab from "./Tabs/Community/ProjectCommunityImageTab";
import ProjectFacilityTab from "./Tabs/Facility/ProjectFacilityTab";
import ProjectPropertyTypeTab from "./Tabs/PropertyType/ProjectPropertyTypesTab";
import ProjectPaymentPlanTab from "./Tabs/MainData/ProjectPaymentPlanTab";
import ProjectShortDescriptionTab from "./Tabs/MainData/ProjectShortDescriptionTab";
import ProjectDescriptionTab from "./Tabs/MainData/ProjectDescriptionTab";
import ProjectAgentTab from "./Tabs/Agent/AgentsTab";

const ProjectForm = ({ projectData, projectId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [cities, setCities] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [agents, setAgents] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [projectFacilities, setProjectFacilities] = useState([]);
  const [projectAgents, setProjectAgents] = useState([]);
  const [projectPropertyTypes, setProjectPropertyTypes] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const defaultSelectOption = { id: "", name: "select an option" };
  useEffect(() => {
    setProjectPropertyTypes(
      projectData.propertyTypes?.length > 0 ? projectData.propertyTypes : []
    );
  }, [projectData.propertyTypes]);
  useEffect(() => {
    setProjectFacilities(
      projectData.facilities?.length > 0 ? projectData.facilities : []
    );
  }, [projectData.facilities]);
  useEffect(() => {
    setProjectAgents(
      projectData.agents?.length > 0 ? projectData.agents : []
    );
  }, [projectData.agents]);
  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/lookup-list/facility`).then(
      function (response) {
        if (response) {
          setFacilities(response.data?.data);
        }
      }
    );
    fetchData(`${process.env.API_URL}dashboard/lookup-list/property-type`).then(
      function (response) {
        if (response) {
          setPropertyTypes(response.data?.data);
        }
      }
    );
    fetchData(`${process.env.API_URL}dashboard/lookup-list/city`).then(
      function (response) {
        if (response) {
          setCities([defaultSelectOption, ...response.data?.data]);
        }
      }
    );
    fetchData(`${process.env.API_URL}dashboard/lookup-list/developer`).then(
      function (response) {
        if (response) {
          setDevelopers([defaultSelectOption, ...response.data?.data]);
        }
      }
    );
    fetchData(`${process.env.API_URL}dashboard/lookup-list/community`).then(
      function (response) {
        if (response) {
          setCommunities([defaultSelectOption, ...response.data?.data]);
        }
      }
    );
    fetchData(`${process.env.API_URL}dashboard/lookup-list/agent`).then(
      function (response) {
        if (response) {
          // setAgents([defaultSelectOption, ...response.data?.data]);
          setAgents(response.data?.data);
        }
      }
    );
  }, []);

  function submitProject(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.project_id = projectId;
    values.project_facilities = projectFacilities;
    values.project_agents = projectAgents;
    values.project_property_types = projectPropertyTypes;
    axios
      .post(`${process.env.API_URL}dashboard/project/store`, values, {
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
            router.push("/project/list");
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
  const [activeChildTab, setActiveChildTab] = useState(0);
  const projectTitleTabFields = [
    "project_menu_title_en",
    "project_menu_title_ar",
    "project_menu_title_fr",
    "project_menu_title_de",
    "project_menu_title_ru",
    "project_menu_title_se",
    "project_title_en",
    "project_title_ar",
    "project_title_fr",
    "project_title_de",
    "project_title_ru",
    "project_title_se",
    "project_slug_en",
    "project_slug_ar",
    "project_slug_fr",
    "project_slug_de",
    "project_slug_ru",
    "project_slug_se",
  ];
  const projectOptionsTabFields = [
    "project_developer_id",
    // "project_agent_id",
    "project_community_id",
    "project_city_id",
    "project_is_active",
    "project_starting_price",
    "handover",
    "project_is_show_header_menu",
    "project_is_featured",
    "project_is_show_footer",
    "project_sorting",
    "project_properties_map",
    "project_property_is_for_rent",
    "project_property_is_for_sale",
  ];

  const projectShortDescriptionTabFields = [
    "project_short_description_en",
    "project_short_description_se",
    "project_short_description_ru",
    "project_short_description_de",
    "project_short_description_fr",
    "project_short_description_ar",
  ];

  function activeErrorTab(errors) {
    let activeErrorTab = null;
    let activeChildErrorTab = null;
    if (Object.keys(errors).length > 0) {
      if (
        (errors.project && Object.keys(errors.project).length > 0) ||
        (errors.paymentPlan && Object.keys(errors.paymentPlan).length > 0)
      ) {
        activeErrorTab = 0;
        if (errors.project) {
          Object.keys(errors.project).map(function (field) {
            if (projectTitleTabFields.includes(field)) {
              activeChildErrorTab = 0;
            }
            if (
              projectOptionsTabFields.includes(field) &&
              activeChildErrorTab === null
            ) {
              activeChildErrorTab = 1;
            }
            if (
              projectShortDescriptionTabFields.includes(field) &&
              activeChildErrorTab === null
            ) {
              activeChildErrorTab = 4;
            }
          });
        } else if (errors.paymentPlan) {
          activeChildErrorTab = 3;
        }
        setActiveChildTab(activeChildErrorTab);
      } else if (Object.keys(errors.seo).length > 0) {
        activeErrorTab = 3;
      }
      setActiveTab(activeErrorTab);
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={ProjectInitialValues(projectData)}
      validationSchema={Yup.object().shape(ProjectValidation())}
      onSubmit={(values) => {
        submitProject(values);
      }}
    >
      {({ props, form, setFieldValue, values, errors, touched }) => (
        <Form>
          {activeErrorTab(errors)}
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab>Project Main Data</Tab>
              <Tab>Project Developer</Tab>
              <Tab>Project Community</Tab>
              <Tab>SEO Data</Tab>
              <Tab>Project Facilities</Tab>
              <Tab>Project Agents</Tab>
              <Tab>Project Property Types</Tab>
            </TabList>

            <TabPanel>
              <Tabs
                selectedIndex={activeChildTab}
                onSelect={(index) => setActiveChildTab(index)}
                className="vertical-tabs"
              >
                <TabList>
                  <Tab>Project Titles</Tab>
                  <Tab>Project Options</Tab>
                  <Tab>Project Image </Tab>
                  <Tab>Project Payment Plan</Tab>
                  <Tab>Project Short Description</Tab>
                  <Tab>Project Description</Tab>
                </TabList>
                <TabPanel>
                  <ProjectTitlesTab
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
                <TabPanel>
                  <ProjectOptionsTab
                    communities={communities}
                    agents={agents}
                    developers={developers}
                    cities={cities}
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
                <TabPanel>
                  <ProjectImageTab
                    projectData={projectData}
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
                <TabPanel>
                  <ProjectPaymentPlanTab
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
                <TabPanel>
                  <ProjectShortDescriptionTab
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
                <TabPanel>
                  <ProjectDescriptionTab
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <Tabs className="vertical-tabs">
                <TabList>
                  <Tab>Developer Description</Tab>
                  <Tab>Developer Image</Tab>
                </TabList>
                <TabPanel>
                  <ProjectDeveloperDescriptionTab
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
                <TabPanel>
                  <ProjectDeveloperImageTab
                    developerData={projectData.developer}
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <Tabs className="vertical-tabs">
                <TabList>
                  <Tab>Community Description</Tab>
                  <Tab>Community Image</Tab>
                </TabList>
                <TabPanel>
                  <ProjectCommunityDescriptionTab
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
                <TabPanel>
                  <ProjectCommunityImageTab
                    communityData={projectData.community}
                    errors={errors}
                    values={values}
                    setFieldValue={setFieldValue}
                    touched={touched}
                  />
                </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <ProjectSeoTab
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <ProjectFacilityTab
                facilities={facilities}
                projectFacilities={projectFacilities}
              />
            </TabPanel>
            <TabPanel>
              <ProjectAgentTab
                agents={agents}
                projectAgents={projectAgents}
              />
            </TabPanel>
            <TabPanel>
              <ProjectPropertyTypeTab
                propertyTypesList={propertyTypes}
                projectPropertyTypes={projectPropertyTypes}
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

export default ProjectForm;
