import React, {useCallback, useEffect, useState} from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import {GrGallery} from "react-icons/gr";
import {BsBuildingGear} from "react-icons/bs";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};

const filterValue = [
  {name: "project_title", operator: "contains", type: "string", value: ""},
  {name: "community_title", operator: "contains", type: "string", value: ""},
  {name: "developer_title", operator: "contains", type: "string", value: ""},
  {name: "project_is_active", operator: "eq", type: "select", value: "yes"},
  {name: "project_is_featured", operator: "eq", type: "select", value: null},
];
const defaultColumns = [
  {
    name: "project_title",
    header: "Project Title",
    defaultWidth: 250,
    defaultFlex: 1,
  },
  {
    name: "community_title",
    header: "Community",
    defaultFlex: 1,
  },
  {
    name: "developer_title",
    header: "Developer",
    defaultFlex: 1,
  },
  {
    name: "project_is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "project_is_featured",
    header: "Is Featured",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "project_sorting",
    header: "Sorting",
    maxWidth: 100,
    defaultFlex: 1,
  },
  {
    name: "project_created_at",
    header: "Created at",
    defaultFlex: 1,
  },
  {
    name: "project_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    defaultFlex: 1,
    render: ({value}) => (
      <Link href={{
        pathname: `/project/edit/[project_id]`,
        query: {
          project_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit Project   "></i>

      </Link>
    ),
  },
  {
    header: "Gallery",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: (data) => (
      <Link href={{
        pathname: `/gallery/project/${data.data.project_id}/${data.data.project_title}`,
      }}>
        <GrGallery/>
      </Link>
    ),
  }, {
    header: "Project Property",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: (data) => (
      <Link href={{
        pathname: `/project-property/${data.data.project_id}/${data.data.project_title}`,
      }}>
        <BsBuildingGear/>
      </Link>
    ),
  },
];

const ProjectList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/project/get-all`).then(
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
          idProperty="project-table"
          columns={defaultColumns}
          dataSource={dataSource}
          rowHeight={72}
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

export default ProjectList;
