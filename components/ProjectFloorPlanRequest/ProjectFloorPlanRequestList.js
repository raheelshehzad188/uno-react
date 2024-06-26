import React, {useState, useCallback, useEffect} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import {LanguagesCode} from "../../data/Languages";

const gridStyle = {minHeight: 600};
const filterValue = [
  {name: "project_title_en", operator: "contains", type: "string", value: ""},
  {name: "project_request_floor_plan_name", operator: "contains", type: "string", value: ""},
  {name: "project_request_floor_plan_email", operator: "contains", type: "string", value: ""},
  {name: "project_request_floor_plan_phone", operator: "contains", type: "string", value: ""},

];

const defaultColumns = [
  {
    name: "project_title_en",
    header: "Project",
    defaultFlex: 1,
  },
  {
    name: "project_request_floor_plan_name",
    header: "Name",
    defaultFlex: 1,
  }, {
    name: "project_request_floor_plan_email",
    header: "Name",
    defaultFlex: 1,
  }, {
    name: "project_request_floor_plan_phone",
    header: "Name",
    defaultFlex: 1,
  }
  , {
    name: "project_request_floor_plan_lang_code",
    header: "Language",
    defaultFlex: 1,
    render: ({value}) => (
      LanguagesCode[value]
    ),
  },
  {
    name: "project_request_floor_plan_created_at",
    header: "Created at",
    defaultFlex: 1,
    sortable: true,
  },
];


const ProjectFloorPlanRequestList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/project/get-all-floor-plan-requests`).then(
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
          defaultFilterValue={filterValue}
          style={gridStyle}
          defaultLimit={10}
          idProperty="floor-plan-request-table"
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
    )
  );
};

export default ProjectFloorPlanRequestList;
