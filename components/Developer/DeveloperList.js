import React, { useState, useEffect } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import { fetchData } from "../api/fetchData";
import Link from "next/link";
import { activeStatus } from "../../data/status/activeStatus";
import { GrGallery } from "react-icons/gr";

const gridStyle = { minHeight: 600 };

const filterValue = [
  { name: "developer_title", operator: "contains", type: "string", value: "" },
  { name: "developer_is_active", operator: "eq", type: "select", value: "yes" },
];

const defaultColumns = [
  {
    name: "developer_logo",
    header: "Developer Logo",
    textAlign: "center",
    showColumnMenuTool: false,
    style: { backgroundColor: "#3344ff", color: "#fff" },
    resizable: false,
    sortable: false,
    defaultFlex: 1,
    render: ({ value }) => (
      <div className="media">
        <img src={value} className="img-60 mx-auto" />
      </div>
    ),
  },
  {
    name: "developer_title",
    header: "Developer Title",
    defaultFlex: 1,
  },
  {
    name: "developer_is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "number_of_projects",
    header: "Developer Count Projects",
    defaultFlex: 1,
    showColumnMenuTool: false,
  },
  {
    name: "developer_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    showColumnMenuTool: false,
    render: (data) => (
      <Link
        href={{
          pathname: `/developer/edit/[developer_id]`,
          query: {
            developer_id: data.data.developer_id,
          },
        }}
      >
        <i className="fas fa-x fa-edit" title="Edit Developer"></i>
      </Link>
    ),
  },
  {
    header: "Gallery",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    showColumnMenuTool: false,
    render: (data) => (
      <Link
        href={{
          pathname: `/gallery/developer/${data.data.developer_id}/${data.data.developer_title}`,
        }}
      >
        <GrGallery />
      </Link>
    ),
  },
];

const DeveloperList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/developer/get-all`).then(
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
          idProperty="developers-table"
          columns={defaultColumns}
          dataSource={dataSource}
          rowHeight={60}
          headerHeight={54}
          showColumnMenuTool={false}
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

export default () => <DeveloperList />;
