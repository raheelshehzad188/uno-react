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
  {name: "service_title_en", operator: "contains", type: "string", value: ""},
  {name: "service_is_active", operator: "eq", type: "select", value: "yes"},
  {name: "service_show_in_home", operator: "eq", type: "select", value: null},
];

const defaultColumns = [
  {name: "service_title_en", header: "Service title", defaultFlex: 1},

  {
    name: "service_is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  }, {
    name: "service_show_in_home",
    header: "Show Home",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {name: "service_sorting", header: "Service Sorting", defaultFlex: 1},
  {name: "service_updated_at", header: "Last updated time", defaultFlex: 1},
  {
    name: "service_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link href={{
        pathname: `/service/edit/[service_id]`,
        query: {
          service_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>

      </Link>
    ),
  },
];

const ServiceList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/service/get-all`).then(
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
          idProperty="service-table"
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

export default () => <ServiceList/>;
