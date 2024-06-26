import React, {useCallback} from "react";

import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import {fetchData} from "../api/fetchData";
import {Input, Label} from "reactstrap";
import axios from "axios";
import {toast} from "react-toastify";

const gridStyle = {minHeight: 600};

const defaultColumns = [

    {
        name: "agent_review_email",
        header: "Email",
        defaultFlex: 1,
    },
    {
        name: "agent_review_title",
        header: "Title",
        defaultFlex: 1,
    },
    {
        name: "agent_review_description",
        header: "Message",
        defaultFlex: 1,
    },
    {
        name: "agent_review_stars",
        header: "Stars",
        defaultFlex: 1,
    },
    {
        name: "agent_review_created_at",
        header: "Creation",
        defaultFlex: 1,
    },
    {
        name: "agent_review_is_active",
        header: "status",
        defaultFlex: 1,
        render: (data) => (
             <Label className="switch">
                <Input type="checkbox" className="option-list" name="step_1" defaultValue="ani1"
                       defaultChecked={data.data.agent_review_is_active === "yes"}
                       onChange={(event) => {
                    changeReviewStatus(data.data.agent_review_id);
                }}
                    /><span className="switch-state"/>
            </Label>
        )
    }
];
function changeReviewStatus(agentReviewId,status) {
    axios.post(`${process.env.API_URL}dashboard/agent/change-review-status/${agentReviewId}`, [], {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + localStorage.getItem('UNO_TOKEN')
        },
        responseType: "json",
    }).then((response) => {
        if (response) {
            if (response.data.success) {
                toast.success("Data Saved Successfully");
            } else {
                response.data.errors.map((error, i) => {
                    toast.error(error);
                })
            }
        }
    })
        .catch((error) => {
            console.error("There was a problem with the request:", error);
            if (error.response.status === 401) {
                localStorage.removeItem("UNO_TOKEN");
                router.push("/authentication/login");
            }
        });
}

const loadData = (agentID) => {
    return fetchData(`${process.env.API_URL}dashboard/agent/reviews/${agentID}`).then(
        (response) => {
            if (response) {
                return {
                    data: response.data.data,
                    count: response.data.data.length,
                };
            }
        }
    );
};

const AgentReviewsList = ({agent_id}) => {
    const dataSource = useCallback(loadData(agent_id), []);
    return (
        <div>
            <ReactDataGrid
                style={gridStyle}
                defaultLimit={10}
                idProperty="community-table"
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

export default AgentReviewsList;
