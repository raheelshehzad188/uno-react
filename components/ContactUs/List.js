import React, {useState, useCallback} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import {LanguagesCode} from "../../data/Languages";

const gridStyle = {minHeight: 600};

const defaultColumns = [
  {
    name: "contact_us_phone",
    header: "Phone",
    defaultFlex: 1,
  } , {
    name: "contact_us_created_at",
    header: "Created at",
    defaultFlex: 1,
    sortable: true,
  },
];

const loadData = () => {
  return fetchData(`${process.env.API_URL}dashboard/contact_us/get-all`).then(
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

const ContactUsList = () => {
  const dataSource = useCallback(loadData, []);
  return (
    <div>
      <ReactDataGrid
        style={gridStyle}
        defaultLimit={10}
        idProperty="interest-table"
        columns={defaultColumns}
        dataSource={dataSource}
        rowHeight={50}
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

export default ContactUsList;
