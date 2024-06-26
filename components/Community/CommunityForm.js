import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useState, useEffect} from "react";
import * as Yup from "yup";
import {Button, Col, Row, Spinner} from "reactstrap";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../utils/ReactStarpInputsValidation";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import {fetchData} from "../api/fetchData";
import CommunityInitialValues from "./CommunityInitialValues";
import CommunityValidation from "./CommunityValidation";
import CommunityFacilityTab from "./Tabs/CommunityFacilityTab";
import CommunityMainDataTab from "./Tabs/CommunityMainDataTab";
import CommunityImageTab from "./Tabs/CommunityImageTab";
import CommunityDescriptionTab from "./Tabs/CommunityDescriptionTab";
import CommunitySeoTab from "./Tabs/CommunitySeoTab";
import CommunityAgentTab from "./Tabs/CommunityAgentTab";

const CommunityForm = (props) => {
  const router = useRouter();
  const [communityId, setCommunityId] = useState(0);
  const communityInfo = props.community;
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [cities, setCities] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [agents, setAgents] = useState([]);
  const [communityAgents, setCommunityAgents] = useState([]);
  const defaultSelectOption = {id: "", name: "select an option"};
  const [facilities, setFacilities] = useState([]);
  const [communityFacilities, setCommunityFacilities] = useState([]);
  useEffect(() => {
    setCommunityFacilities(
      communityInfo.facilities?.length > 0 ? communityInfo.facilities : []
    );
  }, [communityInfo.facilities]);
  useEffect(() => {
    setCommunityAgents(
      communityInfo.agents?.length > 0 ? communityInfo.agents : []
    );
  }, [communityInfo.agents]);
  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/lookup-list/facility`).then(
      function (response) {
        if (response) {
          setFacilities(response.data?.data);
        }
      }
    );
  }, []);

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/lookup-list/city`).then(
      function (response) {
        if (response) {
          setCities([defaultSelectOption, ...response.data?.data]);
        }
      }
    );
  }, []);
  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/lookup-list/agent`).then(
      function (response) {
        if (response) {
          setAgents(response.data?.data);
        }
      }
    );
  }, []);

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/lookup-list/developer`).then(
      function (response) {
        if (response) {
          setDevelopers([defaultSelectOption, ...response.data?.data]);
        }
      }
    );
  }, []);

  useEffect(() => {
    setCommunityId(communityInfo?.community?.community_id);
  }, [communityInfo.community]);

  function submitCommunity(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");
    values.community_id = communityId;
    values.community_facilities = communityFacilities;
    values.community_agents = communityAgents;
    axios
      .post(`${process.env.API_URL}dashboard/community/store`, values, {
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
            router.push("/community/list");
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
    "community_city_id",
    "community_developer_id",
    // "community_agent_id",
    "community_title_en",
    "community_title_ar",
    "community_title_fr",
    "community_title_de",
    "community_title_ru",
    "community_title_se",
    "community_menu_title_en",
    "community_menu_title_ar",
    "community_menu_title_fr",
    "community_menu_title_de",
    "community_menu_title_ru",
    "community_menu_title_se",
    "community_slug_en",
    "community_slug_ar",
    "community_slug_fr",
    "community_slug_de",
    "community_slug_ru",
    "community_slug_se",
    "community_is_active",
    "community_is_show_header_menu",
    "community_is_show_footer",
    "community_sorting",
  ];
  const shortDescriptionTabFields = [
    "community_short_description_en",
    "community_short_description_ar",
    "community_short_description_fr",
    "community_short_description_de",
    "community_short_description_ru",
    "community_short_description_se",
  ];

  function activeErrorTab(errors) {
    if (Object.keys(errors).length > 0) {
      let activeErrorTab = null;
      Object.keys(errors.main_data).map(function (field) {
        if (mainDataTabFields.includes(field)) {
          activeErrorTab = 0;
        }
        if (
          shortDescriptionTabFields.includes(field) &&
          activeErrorTab === null
        ) {
          activeErrorTab = 2;
        }
      });
      setActiveTab(activeErrorTab);
    }
  }

  return (
    <Formik
      enableReinitialize
      initialValues={CommunityInitialValues(communityInfo)}
      validationSchema={Yup.object().shape(CommunityValidation())}
      onSubmit={(values) => {
        submitCommunity(values);
      }}
      validateOnChange={true}
    >
      {({props, form, setFieldValue, values, errors, touched}) => (
        <Form>
          {activeErrorTab(errors)}
          <Tabs
            selectedIndex={activeTab}
            onSelect={(index) => setActiveTab(index)}
          >
            <TabList>
              <Tab>Main Data</Tab>
              <Tab>Image</Tab>
              <Tab>Community Description </Tab>
              <Tab>SEO Data</Tab>
              <Tab>Facilities Data</Tab>
              <Tab>Agents Data</Tab>
            </TabList>

            <TabPanel>
              <CommunityMainDataTab
                agents={agents}
                developers={developers}
                cities={cities}
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <CommunityImageTab
                communityInfo={communityInfo}
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <CommunityDescriptionTab
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <CommunitySeoTab
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                touched={touched}
              />
            </TabPanel>
            <TabPanel>
              <CommunityFacilityTab
                facilities={facilities}
                communityFacilities={communityFacilities}
              />
            </TabPanel>
            <TabPanel>
              <CommunityAgentTab
                agents={agents}
                communityAgents={communityAgents}
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
                <span style={{display: submitDisabled ? "" : "none"}}>
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
export default CommunityForm;
