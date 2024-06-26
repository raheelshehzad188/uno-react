import React, {useCallback, useEffect, useState} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import parse from "html-react-parser";
import Link from "next/link";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};

const filterValue = [
  {name: "blog_category_title_en", operator: "contains", type: "string", value: ""},
  {name: "blog_category_is_active", operator: "eq", type: "select", value: "yes"},
];
const defaultColumns = [
  {
    name: "blog_category_title_en",
    header: "Property Title",
    defaultFlex: 1,
  },
  {
    name: "blog_category_is_active",
    header: "Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  }, {
    name: "blog_category_created_at",
    header: "Created at",
    defaultFlex: 1,
  },
  {
    name: "blog_category_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    defaultFlex: 1,
    render: ({value}) => (
      <Link href={{
        pathname: `/blog-category/edit/[blog_category_id]`,
        query: {
          blog_category_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit Blog Category"></i>

      </Link>
    ),
  },

];

const BlogCategoryList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/blog-category/get-all`).then(
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
          idProperty="blog-category-table"
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

export default BlogCategoryList;
