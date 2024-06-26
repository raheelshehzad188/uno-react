import React, {useState, useCallback, useEffect} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};

const filterValue = [
  {name: "buy_step_title_en", operator: "contains", type: "string", value: ""},
  {name: "buy_step_is_active", operator: "eq", type: "select", value: "yes"},
];

const defaultColumns = [
  {
    name: "buy_step_icon",
    header: "Image",
    textAlign: "center",
    showColumnMenuTool: false,
    resizable: false,
    sortable: false,
    defaultFlex: 1,
    render: ({value}) => (
      <div className="media">
        <img src={value} className="img-60 mx-auto"/>
      </div>
    ),
  },
  {name: "buy_step_title_en", header: "FAQ Title", defaultFlex: 1},
  {
    name: "buy_step_is_active", header: "Active Status", defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  },
  {name: "buy_step_sorting", header: "Sorting", defaultFlex: 1},
  {
    name: "buy_step_id",
    header: "Action",
    defaultVisible: true,
    textAlign: "center",
    type: "number",
    render: ({value}) => (
      <Link href={{
        pathname: `/buy-steps/edit/[buy_step_id]`,
        query: {
          buy_step_id: value,
        },
      }}>
        <i className="fas fa-x fa-edit" title="Edit"></i>

      </Link>
    ),
  },
];


const BuyStepList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/buy-step/get-all`).then(
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
          idProperty="buy-step-table"
          columns={defaultColumns}
          dataSource={dataSource}
          rowHeight={60}
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

export default () => <BuyStepList/>;
