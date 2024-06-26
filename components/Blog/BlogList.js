import React, {useCallback, useEffect, useState} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};

const filterValue = [
  { name: "blog_title_en", operator: "contains", type: "string", value: "" },
  { name: "blog_is_active", operator: "eq", type: "select", value: "yes" },
];
const defaultColumns = [
  {name: "blog_title_en", header: "Article title", defaultFlex: 1},
  {
    name: "blog_is_active", header: "Article status", defaultFlex: 1, maxWidth: 150,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {name: "blog_updated_at", header: "Last updated time", defaultFlex: 1, maxWidth: 250},
  {
    name: "blog_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link href={{
        pathname: `/blog/edit/[blog_id]`,
        query: {
          blog_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>
      </Link>
    ),
  },
];


const BlogList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/blogs/get-all`).then(
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
          idProperty="blog-table"
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
    )
  );
};

export default () => <BlogList/>;
