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

const UserForm = ({ user, userId }) => {
  const router = useRouter();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [file, setFile] = useState();
  useEffect(() => {
    setFile(user.image);
  }, [user]);

  function submitUser(values) {
    setSubmitDisabled(true);
    setSubmitBtnText("");

    values.user_id = userId;
    axios
      .post(`${process.env.API_URL}dashboard/user/store`, values, {
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
            router.push("/manage-users/list");
          } else {
            setSubmitBtnText("Submit");
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

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        is_active: user?.is_active,
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required().nullable(),
        email: Yup.string().required().nullable(),
        phone: Yup.string().required().nullable(),
        is_active: Yup.string().required().nullable(),
        // password: Yup.string()
        //   .required("No password provided.")
        //   .min(8, "Password is too short - should be 8 chars minimum."),
        // password_confirmation: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })}
      onSubmit={(values) => {
        submitUser(values);
      }}
      validateOnChange={true}
    >
      {({ props, form, setFieldValue, values, errors, touched }) => (
        <Form>
          <Row className="gx-3">
            <Col sm="6" className="form-group">
              <Field
                name="name"
                type="text"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Admin Name"
                label="Admin Name"
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="email"
                type="text"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Email"
                label="Admin Email"
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="phone"
                type="text"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Admin Phone"
                label="Admin Phone"
              />
            </Col>

            <Col sm="6" className="form-group">
              <Field
                name="is_active"
                component={ReactstrapSelect}
                className="form-control"
                label="Admin Active Status"
                inputprops={{ options: ["", "yes", "no"] }}
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="password"
                type="password"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Admin Password"
                label="Admin Password"
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="password_confirmation"
                type="password"
                autocomplete="new-password"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Admin Password Conirmation"
                label="Admin Password Conirmation"
              />
            </Col>
            <Col sm="4" className="form-group">
              <div className="mb-3">
                <label className="label-color form-label">User Image</label>
                <input
                  type="file"
                  className={`form-control ${
                    errors.image && touched.image ? "is-invalid" : ""
                  }`}
                  placeholder="buy_step image"
                  onChange={(event) => {
                    setFieldValue("image", event.target.files[0]);
                    setFile(URL.createObjectURL(event.target.files[0]));
                  }}
                />
              </div>
            </Col>
            <div className="form-group col-sm-1">
              <img src={file} width="70" />
            </div>
          </Row>
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

export default UserForm;
