import React, { useCallback } from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { fetchData } from "../api/fetchData";
import Link from "next/link";

const gridStyle = { minHeight: 600 };

const defaultColumns = [
  {
    name: "image",
    header: "Image",
    defaultFlex: 1,
    render: ({ value }) => (
      <div className="media">
        <img src={value} className="img-60 mx-auto" />
      </div>
    ),
  },
  {
    name: "image_alt",
    header: "Image Alt",
    defaultFlex: 1,
  },
  {
    name: "image_title",
    header: "Image Title",
    defaultFlex: 1,
  },
  {
    name: "sorting",
    header: "Image Sorting",
    defaultFlex: 1,
  },
  {
    name: "updated_at",
    header: "Last Updated At",
    defaultFlex: 1,
  },
  {
    name: "image_id",
    header: "Gallery",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: (data) => (
      <Link
        href={{
          pathname: `/gallery/edit/${data.data.module_type}/${data.data.module_id}/${data.data.image_id}/${data.data.module_item_title}`,
        }}
      >
        <i className="fas fa-x fa-edit" title="Edit"></i>
      </Link>
    ),
  },
];
const loadData = (moduleType, moduleId, moduleItemTitle) => {
  return fetchData(
    `${process.env.API_URL}dashboard/gallery/get-all/${moduleType}/${moduleId}/${moduleItemTitle}`
  ).then((response) => {
    if (response) {
      return {
        data: response.data.data,
        count: response.data.data.length,
      };
    }
  });
};

const GalleryList = ({ moduleType, moduleId, moduleItemTitle }) => {
  const dataSource = useCallback(
    loadData(moduleType, moduleId, moduleItemTitle),
    []
  );
  return (
    <div>
      <ReactDataGrid
        style={gridStyle}
        defaultLimit={10}
        idProperty="gallery-table"
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

export default GalleryList;
