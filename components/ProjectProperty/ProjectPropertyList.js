import React, {useCallback, useEffect, useState} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};
const filterValue = [
  {name: "property_type_title_en", operator: "contains", type: "string", value: ""},
  {name: "project_property_title_en", operator: "contains", type: "string", value: ""},
  {name: "project_property_is_active", operator: "eq", type: "select", value: "yes"},
];
const defaultColumns = [
  {
    name: "project_property_image",
    header: "Image",
    defaultFlex: 1,
    render: ({value}) => (
      <div className="media">
        <img src={value} className="img-50 mx-auto"/>
      </div>
    ),
  },
  {
    name: "property_type_title_en",
    header: "Property Type",
    defaultFlex: 1,
  }, {
    name: "project_property_title_en",
    header: "Title",
    defaultFlex: 1,
  },
  {
    name: "project_property_count_rooms",
    header: "Count Rooms",
    defaultFlex: 1,
  },
  {
    name: "project_property_area_range",
    header: "Area Range",
    defaultFlex: 1,
  }
  , {
    name: "project_property_is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "image_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: (data) => (
      <Link href={{
        pathname: `/project-property/edit/${data.data.project_property_id}/${data.data.project_property_project_id}/${data.data.project_title_en}`,
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>
      </Link>
    ),
  },


];

const ProjectPropertyList = ({projectId}) => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/project-property/get-all/${projectId}`).then(
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
        idProperty="project-property-table"
        columns={defaultColumns}
        dataSource={dataSource}
        rowHeight={75}
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

export default ProjectPropertyList;
