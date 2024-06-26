import {Col, Row} from "reactstrap";
import {ErrorMessage, Field} from "formik";
import {ReactstrapInput} from "../../../utils/ReactStarpInputsValidation";
import React from "react";

const ProjectPaymentPlanTab = ({values, setFieldValue, errors, touched}) => {
  return (
    <Row>
      <Col sm="6" className="form-group">
        <Field name='paymentPlan.project_payment_plan_plan_title'
               component={ReactstrapInput}
               className={`form-control ${
                 errors.paymentPlan?.project_payment_plan_plan_title ? "is-invalid" : ""
               }`}
               placeholder="Enter Project Payment Plan Title" label="Project Payment Plan Title"
        />
        <div className="invalid-feedback" style={{display: "block"}}>
          <ErrorMessage name='paymentPlan.project_payment_plan_plan_title'/>
        </div>
      </Col>
      <Col sm="6" className="form-group">
        <Field name='paymentPlan.project_payment_plan_on_booking_percentage'
               component={ReactstrapInput}
               className={`form-control ${
                 errors.paymentPlan?.project_payment_plan_on_booking_percentage ? "is-invalid" : ""
               }`}
               placeholder="Enter Payment Plan on booking percentage" label="Payment Plan on booking percentage"
        />
        <div className="invalid-feedback" style={{display: "block"}}>
          <ErrorMessage name='paymentPlan.project_payment_plan_on_booking_percentage'/>
        </div>
      </Col>
      <Col sm="6" className="form-group">
        <Field name='paymentPlan.project_payment_plan_construction_percentage'
               component={ReactstrapInput}
               className={`form-control ${
                 errors.paymentPlan?.project_payment_plan_construction_percentage ? "is-invalid" : ""
               }`}
               placeholder="Enter Payment Plan construction percentage" label="Payment Plan construction percentage"
        />
        <div className="invalid-feedback" style={{display: "block"}}>
          <ErrorMessage name='paymentPlan.project_payment_plan_construction_percentage'/>
        </div>
      </Col>
      <Col sm="6" className="form-group">
        <Field name='paymentPlan.project_payment_plan_on_handover_percentage'
               component={ReactstrapInput}
               className={`form-control ${
                 errors.paymentPlan?.project_payment_plan_on_handover_percentage ? "is-invalid" : ""
               }`}
               placeholder="Enter Payment Plan on handovr percentage" label="Payment Plan on handover percentage"
        />
        <div className="invalid-feedback" style={{display: "block"}}>
          <ErrorMessage name='paymentPlan.project_payment_plan_on_handover_percentage'/>
        </div>
      </Col>
      <Col sm="6" className="form-group">
        <Field name='paymentPlan.project_payment_plan_post_handover_percentage'
               component={ReactstrapInput}
               className={`form-control ${
                 errors.paymentPlan?.project_payment_plan_post_handover_percentage ? "is-invalid" : ""
               }`}
               placeholder="Enter Payment Plan post handover percentage" label="Payment Plan post handover percentage"
        />
        <div className="invalid-feedback" style={{display: "block"}}>
          <ErrorMessage name='paymentPlan.project_payment_plan_post_handover_percentage'/>
        </div>
      </Col>
    </Row>
  );
}

export default ProjectPaymentPlanTab;