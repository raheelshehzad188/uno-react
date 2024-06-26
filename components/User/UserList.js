import React, { useState, useEffect } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import { fetchData } from "../api/fetchData";
import { activeStatus } from "../../data/status/activeStatus";
import Link from "next/link";

const gridStyle = { minHeight: 600 };

const filterValue = [
  { name: "name", operator: "contains", type: "string", value: "" },
  { name: "email", operator: "contains", type: "string", value: "" },
  { name: "is_active", operator: "eq", type: "select", value: "yes" },
];

const defaultColumns = [
  {
    name: "image",
    header: "Image",
    textAlign: "center",
    showColumnMenuTool: false,
    resizable: false,
    sortable: false,
    defaultFlex: 1,
    render: ({ value }) => (
      <div className="media">
        <img src={value} className="img-40 mx-auto" />
      </div>
    ),
  },
  { name: "name", header: "Name", defaultFlex: 1 },
  { name: "email", header: "Email", defaultFlex: 1 },
  {
    name: "is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({ value }) => (
      <Link
        href={{
          pathname: `/manage-users/edit/[user_id]`,
          query: {
            user_id: value,
          },
        }}
      >
        <i className="fas fa-x fa-edit" title="Edit"></i>
      </Link>
    ),
  },
];

const UserList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/user/get-all`).then(
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
          idProperty="user-table"
          defaultFilterValue={filterValue}
          columns={defaultColumns}
          dataSource={dataSource}
          rowHeight={60}
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

export default () => <UserList />;
