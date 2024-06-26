import React, {useState, useCallback, useEffect} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import Link from "next/link";
import {LanguagesCode} from "../../data/Languages";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";
import {activeStatus} from "../../data/status/activeStatus";

const gridStyle = {minHeight: 600};
const filterValue = [
  {name: "register_interest_name", operator: "contains", type: "string", value: ""},
  {name: "project_title_en", operator: "contains", type: "string", value: ""},
  {name: "register_interest_allow_contact", operator: "eq", type: "select", value: null},
  {name: "register_interest_is_seen", operator: "eq", type: "select", value: null},

];
const defaultColumns = [
  {
    name: "register_interest_name",
    header: "Name",
    defaultFlex: 1,
  }
  , {
    name: "register_interest_lang_code",
    header: "Language",
    defaultFlex: 1,
    render: ({value}) => (
      LanguagesCode[value]
    ),
  }, {
    name: "register_interest_allow_contact",
    header: " Allow Contact",
    defaultFlex: 1,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  }, {
    name: "project_title_en",
    header: "Project",
    defaultFlex: 1,
  },
  {
    name: "register_interest_is_seen",
    header: "Is Seen",
    defaultFlex: 1,
    sortable: true,
    filterEditor: SelectFilter,
    filterEditorProps: {
      placeholder: "All",
      dataSource: activeStatus,
    },
  }, {
    name: "register_interest_created_at",
    header: "Created at",
    defaultFlex: 1,
    sortable: true,
  },
  {
    name: "register_interest_id",
    header: "Action",
    type: "number",
    textAlign: "center",
    render: ({value}) => (
      <Link href={{
        pathname: `/register/view/[register_interest_id]`,
        query: {
          register_interest_id: value,
        },
      }}>
        <i className="fas fa-x fa-eye" title="Show "></i>

      </Link>
    ),
  },
];


const RegisterInterestList = () => {
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    fetchData(`${process.env.API_URL}dashboard/register-interest/get-all`).then(
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
        idProperty="interest-table"
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

export default RegisterInterestList;
