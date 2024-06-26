import { Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Lock, Mail } from "react-feather";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Img from "../../components/Common/Image";
import axios from "axios";

const LogIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  function loginSubmit(email, password) {
    axios({
      method: "post",
      url: `${process.env.API_URL}dashboard/auth/login`,
      data: {
        email: email,
        password: password,
      },
      responseType: "json",
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("UNO_TOKEN", response.data.data.access_token);
        toast.success(response.data.message);
        router.push("/dashboard");
      })
      .catch((error) => {
        toast.error("email or password is incorrect");
        console.error("There was a problem with the request:", error);
      });
  }

  return (
    <div className="authentication-box">
      <Container fluid={true} className="container-fluid">
        <Row className="log-in">
          <Col xxl="3" xl="4" lg="5" md="6" sm="8" className="form-login">
            <Card className="card">
              <CardBody className="card-body">
                <div className="title-3 text-start">
                  <h2>Log in</h2>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    email: Yup.string().required("Enter valid Email..!"),
                    password: Yup.string().required("Password is required..!"),
                  })}
                  onSubmit={(values) => {
                    loginSubmit(values.email, values.password);
                    // if (
                    //   data.email === values.email &&
                    //   data.password === values.password
                    // ) {
                    //   toast.success("Login successful");
                    //   router.push("/dashboard");
                    // } else {
                    //   toast.errors("Please check your email and password..!");
                    // }
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <Mail size={20} />
                          </div>
                          <Field
                            type="email"
                            className={`form-control ${
                              errors.email && touched.email ? "is-invalid" : ""
                            }`}
                            name="email"
                            placeholder="Enter email"
                          />
                        </div>
                        {errors.email && touched.email && (
                          <div className="text-danger ms-4">{errors.email}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <Lock size={20} />
                          </div>
                          <Field
                            type={`${showPassword ? "text" : "password"}`}
                            name="password"
                            id="pwd-input"
                            className={`form-control ${
                              errors.password && touched.password
                                ? "is-invalid"
                                : ""
                            }`}
                            placeholder="Password"
                          />
                          <div className="input-group-apend">
                            <i
                              id="pwd-icon"
                              className={`far fa-eye${
                                !showPassword ? "-slash" : ""
                              }`}
                              onClick={() => {
                                setShowPassword(!showPassword);
                              }}
                            />
                          </div>
                        </div>
                        {errors.password && touched.password && (
                          <div className="text-danger ms-4">
                            {errors.password}
                          </div>
                        )}
                        <div className="important-note">
                          password should be a minimum of 8 characters and
                          should contains letters and numbers
                        </div>
                      </div>
                      <div className="d-flex">
                        <label className="d-block mb-0" htmlFor="chk-ani">
                          <input
                            className="checkbox_animated"
                            id="chk-ani"
                            type="checkbox"
                          />{" "}
                          Remember me
                        </label>
                        <Link
                          href="https://sheltos-react.vercel.app/pages/other-pages/forgot-password"
                          className="font-rubik"
                        >
                          Forgot password ?
                        </Link>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn btn-gradient btn-pill me-sm-3 me-2"
                        >
                          Log in
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
          <Col xxl="7" xl="7" lg="6" className="offset-xxl-1 auth-img">
            <Img src={`/assets/images/svg/2.svg`} alt="" className="bg-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;

LogIn.getLayout = function getLayout(LogIn) {
  return <>{LogIn}</>;
};
