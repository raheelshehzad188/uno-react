import React, {useCallback} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import {GrGallery} from "react-icons/gr";

const gridStyle = {minHeight: 600};

const defaultColumns = [
  {name: "job_cv_employee_name", header: "Employee name", defaultFlex: 1},
  {name: "job_cv_employee_email", header: "Email", defaultFlex: 1},
  {name: "job_cv_employee_phone", header: "Phone", defaultFlex: 1},
  {name: "job_cv_employee_experience_years", header: "Experience Years", defaultFlex: 1},
  {name: "job_cv_employee_message", header: "Message", defaultFlex: 1},
  {name: "job_cv_created_at", header: "Applied Date", defaultFlex: 1},
  {
    name: "job_cv_file",
    header: "Applied CV",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link target="_blank" href={{
        pathname: value,
      }}>
        <i className="fa fa-sharp fa-solid fa-file" title="Applied Cv"></i>
      </Link>
    ),
  },
];

const loadData = (jobId) => {
  return fetchData(`${process.env.API_URL}dashboard/job/applied-cv/${jobId}`).then(
    (response) => {
      if (response) {
        return {
          data: response.data.data,
          count: response.data.data.length,
        };
      }
    }
  );
};

const JobCvList = ({jobId}) => {
  const dataSource = useCallback(loadData(jobId), []);

  return (
    <div>
      <ReactDataGrid
        style={gridStyle}
        defaultLimit={10}
        idProperty="job-cv-table"
        columns={defaultColumns}
        dataSource={dataSource}
        rowHeight={72}
        headerHeight={54}
        enableColumnAutosize={false}
        showColumnMenuLockOptions={false}
        showColumnMenuGroupOptions={false}
        textVerticalAlign="middle"
        pagination="local"
        columntext
      />
    </div>
  );
};

export default JobCvList;
