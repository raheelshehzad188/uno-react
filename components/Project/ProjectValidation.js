import * as Yup from "yup";

const ProjectValidation = () => {
  return {
    // seo: Yup.object().shape({
    //   project_seo_meta_title_en: Yup.string()
    //     .required("project seo meta title en is required")
    //     .nullable(),
    //   project_seo_meta_title_ar: Yup.string()
    //     .required("project seo meta title ar is required")
    //     .nullable(),
    //   project_seo_meta_title_fr: Yup.string()
    //     .required("project seo meta title fr is required")
    //     .nullable(),
    //   project_seo_meta_title_de: Yup.string()
    //     .required("project seo meta title de is required")
    //     .nullable(),
    //   project_seo_meta_title_ru: Yup.string()
    //     .required("project seo meta title ru is required")
    //     .nullable(),
    //   project_seo_meta_title_se: Yup.string()
    //     .required("project seo meta title se is required")
    //     .nullable(),
    //   project_seo_meta_description_en: Yup.string()
    //     .required("project_seo_meta_description en is required")
    //     .nullable(),
    //   project_seo_meta_description_ar: Yup.string()
    //     .required("project seo meta description ar is required")
    //     .nullable(),
    //   project_seo_meta_description_fr: Yup.string()
    //     .required("project seo meta description fr is required")
    //     .nullable(),
    //   project_seo_meta_description_de: Yup.string()
    //     .required("project seo meta description de is required")
    //     .nullable(),
    //   project_seo_meta_description_ru: Yup.string()
    //     .required("project seo meta description ru is required")
    //     .nullable(),
    //   project_seo_meta_description_se: Yup.string()
    //     .required("project seo meta description se is required")
    //     .nullable(),
    // }),
    project: Yup.object().shape({
      project_developer_id: Yup.number()
        .required("project developer is required")
        .nullable(),
      // project_agent_id: Yup.number()
      //   .required("project agent is required")
      //   .nullable(),
      project_community_id: Yup.number()
        .required("project community is required")
        .nullable(),
      project_city_id: Yup.number()
        .required("project city is required")
        .nullable(),
      project_menu_title_en: Yup.string()
        .required("project menu title en is required")
        .nullable(),
      project_menu_title_ar: Yup.string()
        .required("project menu title ar is required")
        .nullable(),
      project_menu_title_fr: Yup.string()
        .required("project menu title fr is required")
        .nullable(),
      project_menu_title_de: Yup.string().required(
        "project menu title de is require.nullable()d"
      ),
      project_menu_title_ru: Yup.string()
        .required("project menu title ru is required")
        .nullable(),
      project_menu_title_se: Yup.string().required(
        "project menu title se is requi.nullable()red"
      ),
      project_title_en: Yup.string()
        .required("project title en is required")
        .nullable(),
      project_title_ar: Yup.string()
        .required("project title ar is required")
        .nullable(),
      project_title_fr: Yup.string()
        .required("project title fr is required")
        .nullable(),
      project_title_de: Yup.string()
        .required("project title de is required")
        .nullable(),
      project_title_ru: Yup.string()
        .required("project title ru is required")
        .nullable(),
      project_title_se: Yup.string()
        .required("project title se is required")
        .nullable(),
      project_slug_en: Yup.string()
        .required("project slug en is required")
        .nullable(),
      project_slug_ar: Yup.string()
        .required("project slug ar is required")
        .nullable(),
      project_slug_fr: Yup.string()
        .required("project slug fr is required")
        .nullable(),
      project_slug_de: Yup.string()
        .required("project slug de is required")
        .nullable(),
      project_slug_ru: Yup.string()
        .required("project slug ru is required")
        .nullable(),
      project_slug_se: Yup.string()
        .required("project slug se is required")
        .nullable(),
      project_is_active: Yup.string()
        .required("project status en is required")
        .nullable(),
      // project_starting_price: Yup.string()
      //   .required("project starting price en is required")
      //   .nullable(),
      // handover: Yup.string()
      //   .required("project handover en is required")
      //   .nullable(),
      project_is_show_header_menu: Yup.string()
        .required("project show header is required")
        .nullable(),
      project_is_featured: Yup.string()
        .required("project is featured status is required")
        .nullable(),
      project_is_show_footer: Yup.string()
        .required("project show footer is required")
        .nullable(),
      project_sorting: Yup.number()
        .required("project sorting is required")
        .nullable(),
      // project_properties_map: Yup.string()
      //   .required("project map is required")
      //   .nullable(),
      project_property_is_for_rent: Yup.string()
        .required("project property for rent status is required")
        .nullable(),
      project_property_is_for_sale: Yup.string()
        .required("project property for sale status is required")
        .nullable(),
      // project_short_description_en: Yup.string()
      //   .required("project short description en is required")
      //   .nullable(),
      // project_short_description_se: Yup.string()
      //   .required("project short description se is required")
      //   .nullable(),
      // project_short_description_ru: Yup.string()
      //   .required("project short description ru is required")
      //   .nullable(),
      // project_short_description_de: Yup.string()
      //   .required("project short description de is required")
      //   .nullable(),
      // project_short_description_fr: Yup.string()
      //   .required("project short description fr is required")
      //   .nullable(),
      // project_short_description_ar: Yup.string()
      //   .required("project short description ar is required")
      //   .nullable(),
    }),
    // paymentPlan: Yup.object().shape({
    //   project_payment_plan_plan_title: Yup.string()
    //     .required("project payment plan title is required")
    //     .nullable(),
    //   project_payment_plan_on_booking_percentage: Yup.string()
    //     .required("project payment booking percentage is required")
    //     .nullable(),
    //   project_payment_plan_construction_percentage: Yup.string()
    //     .required("project payment construction percentage is required")
    //     .nullable(),
    //   project_payment_plan_completion_percentage: Yup.string()
    //     .required("project payment completion percentage is required")
    //     .nullable(),
    // }),
  };
};

export default ProjectValidation;
