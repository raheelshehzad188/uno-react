import React, {useCallback, useEffect, useState} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import {GrGallery} from "react-icons/gr";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};


const filterValue = [
  {name: "job_title_en", operator: "contains", type: "string", value: ""},
  {name: "job_is_active", operator: "eq", type: "select", value: "yes"},
];

const defaultColumns = [
  {name: "job_title_en", header: "Job title", defaultFlex: 1},
  {
    name: "job_is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {name: "job_sorting", header: "Job Sorting", defaultFlex: 1},
  {name: "job_updated_at", header: "Last updated time", defaultFlex: 1},
  {
    name: "job_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link href={{
        pathname: `/job/edit/[job_id]`,
        query: {
          job_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>

      </Link>
    ),
  }, {
    name: "job_id",
    header: "Applied CV",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: (data) => (
      <Link href={{
        pathname: `/job/cv/${data.data.job_id}/${data.data.job_title_en}`,
      }}>
        <i className="fa fa-sharp fa-solid fa-file" title="Applied Cv"></i>
      </Link>
    ),
  },
];


const JobList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/job/get-all`).then(
      (response) => {
        if (response) {
          setDataSource(response.data.data);
        }
      }
    );
  }, []);

  return (
    dataSource && (
    <div>
      <ReactDataGrid
        style={gridStyle}
        defaultLimit={10}
        idProperty="job-table"
        columns={defaultColumns}
        dataSource={dataSource}
        defaultFilterValue={filterValue}
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
    )
  );
};

export default () => <JobList/>;
