import React, {useCallback, useEffect, useState} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";

const gridStyle = {minHeight: 600};
const filterValue = [
  {name: "page_code", operator: "contains", type: "string", value: ""},
  {name: "page_title_en", operator: "contains", type: "string", value: ""},
];
const defaultColumns = [
  {name: "page_code", header: "Page code", defaultFlex: 1},
  {name: "page_title_en", header: "Page title", defaultFlex: 1},
  {name: "page_updated_at", header: "Last updated time", defaultFlex: 1},
  {
    name: "page_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link href={{
        pathname: `/page/edit/[page_id]`,
        query: {
          page_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>

      </Link>
    ),
  },
];


const PageList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/page/get-all`).then(
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
          idProperty="page-table"
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

export default () => <PageList/>;
