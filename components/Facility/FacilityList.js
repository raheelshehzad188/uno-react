import React, {useCallback, useEffect, useState} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};

const filterValue = [
  {name: "facility_title_en", operator: "contains", type: "string", value: ""},
  {name: "facility_is_active", operator: "eq", type: "select", value: "yes"},
];
const defaultColumns = [
  {name: "facility_title_en", header: "Facility title", defaultFlex: 1},
  {
    name: "facility_is_active", header: "Active Status", defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "facility_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link href={{
        pathname: `/facility/edit/[facility_id]`,
        query: {
          facility_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>

      </Link>
    ),
  },
];


const FacilityList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/facility/get-all`).then(
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
          idProperty="facility-table"
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
      </div>)
  );
};

export default () => <FacilityList/>;
