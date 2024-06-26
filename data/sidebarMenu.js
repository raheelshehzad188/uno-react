import {Airplay, Bell, Phone, UserPlus, Users} from "react-feather";
import {MdSupportAgent} from "react-icons/md";
import {BsBuildingGear, BsBricks} from "react-icons/bs";
import {TbUserQuestion} from "react-icons/tb";
import {MdCardMembership} from "react-icons/md";
import {IoBusinessOutline} from "react-icons/io5";
import {FiBold, FiMapPin, FiFileText} from "react-icons/fi";
import {HiOutlineBuildingOffice2} from "react-icons/hi2";
import {FaGraduationCap, FaRegFilePdf, FaServicestack} from "react-icons/fa";

export const SidebarMenuItem = [
  {
    title: "Dashboard",
    icon: <Airplay/>,
    type: "link",
    path: "/dashboard",
  },
  {
    title: "Register Interest",
    icon: <Bell/>,
    type: "link",
    path: "/register/interest",
  },{
    title: "Floor PLan Requests",
    icon: <FaRegFilePdf/>,
    type: "link",
    path: "/floor_pan_request/list",
  },
  {
    title: "Contact Us",
    icon: <Phone/>,
    type: "link",
    path: "/contact_us/list",
  },
  {
    title: "Developers",
    icon: <IoBusinessOutline size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/developer/list",
        title: "All Developers",
        type: "link",
      },
      {
        path: "/developer/add-developer",
        title: "Add developer",
        type: "link",
      },
    ],
  },
  {
    title: "Communities",
    icon: <HiOutlineBuildingOffice2 size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/community/list",
        title: "All Communities",
        type: "link",
      },
      {
        path: "/community/add-community",
        title: "Add community",
        type: "link",
      },
    ],
  },
  {
    title: "Projects",
    icon: <BsBricks/>,
    type: "sub",
    children: [
      {
        path: "/project/list",
        title: "All Projects",
        type: "link",
      },
      {
        path: "/project/add-project",
        title: "Add Project",
        type: "link",
      },
    ],
  },
  {
    title: "Property Types",
    icon: <BsBuildingGear size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/propertyTypes/list",
        title: "All Property Types",
        type: "link",
      },
      {
        path: "/propertyTypes/add-property-type",
        title: "Add Property Type",
        type: "link",
      },
    ],
  },
  {
    title: "FAQs",
    icon: <TbUserQuestion size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/buy-steps/list",
        title: "All FAQs",
        type: "link",
      },
      {
        path: "/buy-steps/add",
        title: "Add FAQ",
        type: "link",
      },
    ],
  },
  {
    title: "Areas",
    icon: <FiMapPin size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/city/list",
        title: "All Areas",
        type: "link",
      },
      {
        path: "/city/add",
        title: "Add Area",
        type: "link",
      },
    ],
  },
  {
    title: "Facility",
    icon: <MdCardMembership size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/facility/list",
        title: "All facility",
        type: "link",
      },
      {
        path: "/facility/add",
        title: "Add facility",
        type: "link",
      },
    ],
  },
  {
    title: "Pages",
    icon: <FiFileText size={"auto"}/>,
    type: "link",
    path: "/page/list",
  },
  {
    title: "Blog",
    icon: <FiBold size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/blog-category/list",
        title: "All Blog Categories",
        type: "link",
      },
      {
        path: "/blog-category/add",
        title: "Add Blog Category",
        type: "link",
      },
      {
        path: "/blog/list",
        title: "All Articles",
        type: "link",
      },
      {
        path: "/blog/add",
        title: "Add Article",
        type: "link",
      },
    ],
  },
  {
    title: "Agents",
    icon: <MdSupportAgent size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/agents/all-agents",
        title: "All Agents",
        type: "link",
      },
      {
        path: "/agents/add-agent",
        title: "Add Agent",
        type: "link",
      },
    ],
  }, {
    title: "Services",
    icon: <FaServicestack size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/service/list",
        title: "All Services",
        type: "link",
      },
      {
        path: "/service/add",
        title: "Add Service",
        type: "link",
      },
    ],
  },
  {
    title: "Jobs",
    icon: <FaGraduationCap size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/job/list",
        title: "All Jobs",
        type: "link",
      },
      {
        path: "/job/add",
        title: "Add Job",
        type: "link",
      },
    ],
  },
  {
    title: "Users",
    icon: <Users size={"auto"}/>,
    type: "sub",
    children: [
      {
        path: "/manage-users/list",
        title: "All Users",
        type: "link",
      },
      {
        path: "/manage-users/add-user",
        title: "Add User",
        type: "link",
      },
    ],
  },
];
