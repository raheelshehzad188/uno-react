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
  {name: "property_type_title_en", operator: "contains", type: "string", value: ""},
  {name: "property_type_is_active", operator: "eq", type: "select", value: "yes"},

];
const defaultColumns = [
  {
    name: "property_type_icon",
    header: "Icon",
    defaultFlex: 1,
    maxWidth: 70,
    textAlign: "center",
    showColumnMenuTool: false,
    resizable: false,
    sortable: false,
    render: ({value}) => (
      value != null ? <div className="svg_table">{parse(value)}</div> :''
    ),
  },
  {
    name: "property_type_title_en",
    header: "Property Title",
    defaultFlex: 1,
  },
  {
    name: "property_type_is_active",
    header: "Active Status",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {
    name: "property_type_created_at",
    header: "Created at",
    defaultFlex: 1,
  },
  {
    name: "property_type_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    defaultFlex: 1,
    render: ({value}) => (
      <Link href={{
        pathname: `/propertyTypes/edit/[property_type_id]`,
        query: {
          property_type_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit Property Type"></i>

      </Link>
    ),
  },

];


const PropertyTypeList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/property-type/get-all`).then(
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
          idProperty="property-type-table"
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

export default PropertyTypeList;
