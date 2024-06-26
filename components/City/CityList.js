import React, {useState, useCallback, useEffect} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};

const filterValue = [
  {name: "city_name_en", operator: "contains", type: "string", value: ""},
  {name: "city_is_active", operator: "eq", type: "select", value: "yes"},
];
const defaultColumns = [
  {
    name: "city_banner_image",
    header: "Image",
    textAlign: "center",
    showColumnMenuTool: false,
    resizable: false,
    sortable: false,
    defaultFlex: 1,
    render: ({value}) => (
      <div className="media">
        <img src={value} className="img-50 mx-auto"/>
      </div>
    ),
  },
  {name: "city_name_en", header: "Area Name", defaultFlex: 1},
  {
    name: "city_is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "city_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link href={{
        pathname: `/city/edit/[city_id]`,
        query: {
          city_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>
      </Link>
    ),
  },
];
const CityList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/city/get-all`).then(
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
          idProperty="city-table"
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

export default () => <CityList/>;
