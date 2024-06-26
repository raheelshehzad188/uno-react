import React from "react";

const SocialAccounts = (data) => {
    return (
        <ul>
            <li>
                <a href={data.agent_instagram_url} target="_blank">
                    <img src="/assets/images/about/Instagram-Icon.png" alt="" />
                </a>
            </li>
            <li>
                <a href={data.agent_linkedin_url} target="_blank">
                    <img src="/assets/images/about/linkedin.png" alt="" />
                </a>
            </li>
            <li>
                <a href={data.agent_whatsapp_url} target="_blank">
                    <img src="/assets/images/about/WhatsApp_icon.png" alt="" />
                </a>
            </li>

        </ul>
    );
};

export default SocialAccounts;