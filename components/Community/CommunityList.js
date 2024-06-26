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
  {name: "community_title", operator: "contains", type: "string", value: ""},
  {name: "city_name", operator: "contains", type: "string", value: ""},
  {name: "number_of_projects", operator: "gte", type: "number", value: 0},
  {name: "community_is_active", operator: "eq", type: "select", value: "yes"},
];
const defaultColumns = [

  {
    name: "community_image",
    header: "Community Image",
    textAlign: "center",
    showColumnMenuTool: false,
    resizable: false,
    sortable: false,
    defaultFlex: 1,
    render: ({value}) => (
      <div className="media">
        <img src={value} className="img-80 mx-auto"/>
      </div>
    ),
  },
  {
    name: "community_title",
    header: "Community Title",
    defaultFlex: 1,
    showColumnMenuTool: false,
  },
  {
    name: "city_name",
    header: "Area",
    defaultFlex: 1,
    showColumnMenuTool: false,
  },
  {
    name: "number_of_projects",
    header: "Count Projects",
    defaultFlex: 1,
    showColumnMenuTool: false,
  },
  {
    name: "community_is_active",
    header: "Active Status",
    defaultFlex: 1,
    showColumnMenuTool: false,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "community_created_at",
    header: "Created at",
    defaultFlex: 1,
    showColumnMenuTool: false,
  },
  {
    name: "community_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    defaultFlex: 1,
    showColumnMenuTool: false,
    render: ({value}) => (
      <Link href={{
        pathname: `/community/edit/[community_id]`,
        query: {
          community_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit Community   "></i>

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
      <Link href={{
        pathname: `/gallery/community/${data.data.community_id}/${data.data.community_title}`,
      }}>
        <GrGallery/>
      </Link>
    ),
  },
];


const CommunityList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/community/get-all`).then(
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
          idProperty="community-table"
          columns={defaultColumns}
          showColumnMenuTool={false}
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

export default CommunityList;
