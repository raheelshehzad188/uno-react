import * as Yup from "yup";

const CommunityValidation = () => {
  return {
      main_data: Yup.object().shape({
        community_city_id: Yup.string()
          .required("Community City is required")
          .nullable(),
        community_developer_id: Yup.string()
          .required("Community Developer is required")
          .nullable(),
        // community_agent_id: Yup.string()
        //   .required("Community Agent is required")
        //   .nullable(),
        community_title_en: Yup.string()
          .required("Community title en is required")
          .nullable(),
        community_title_ar: Yup.string()
          .required("Community title ar is required")
          .nullable(),
        community_title_fr: Yup.string()
          .required("Community title fr is required")
          .nullable(),
        community_title_de: Yup.string()
          .required("Community title de is required")
          .nullable(),
        community_title_ru: Yup.string()
          .required("Community title ru is required")
          .nullable(),
        community_title_se: Yup.string()
          .required("Community title se is required")
          .nullable(),
        community_menu_title_en: Yup.string()
          .required("Community title en is required")
          .nullable(),
        community_menu_title_ar: Yup.string()
          .required("Community title ar is required")
          .nullable(),
        community_menu_title_fr: Yup.string()
          .required("Community title fr is required")
          .nullable(),
        community_menu_title_de: Yup.string()
          .required("Community title de is required")
          .nullable(),
        community_menu_title_ru: Yup.string()
          .required("Community title ru is required")
          .nullable(),
        community_menu_title_se: Yup.string()
          .required("Community title se is required")
          .nullable(),
        community_slug_en: Yup.string()
          .required("Community title en is required")
          .nullable(),
        community_slug_ar: Yup.string()
          .required("Community title ar is required")
          .nullable(),
        community_slug_fr: Yup.string()
          .required("Community title fr is required")
          .nullable(),
        community_slug_de: Yup.string()
          .required("Community title de is required")
          .nullable(),
        community_slug_ru: Yup.string()
          .required("Community title ru is required")
          .nullable(),
        community_slug_se: Yup.string()
          .required("Community title se is required")
          .nullable(),
        community_short_description_en: Yup.string()
          .required("Community short description en is required")
          .nullable(),
        community_short_description_ar: Yup.string()
          .required("Community short description ar is required")
          .nullable(),
        community_short_description_fr: Yup.string()
          .required("Community short description fr is required")
          .nullable(),
        community_short_description_de: Yup.string()
          .required("Community short description de is required")
          .nullable(),
        community_short_description_ru: Yup.string()
          .required("Community short description ru is required")
          .nullable(),
        community_short_description_se: Yup.string()
          .required("Community short description se is required")
          .nullable(),
        community_is_active: Yup.string()
          .required("community active status is required")
          .nullable(),
        community_is_show_header_menu: Yup.string()
          .required("community show header menu status is required")
          .nullable(),
        community_is_show_footer: Yup.string()
          .required("community show footer status is required")
          .nullable(),
        community_sorting: Yup.string()
          .required("community sorting is required")
          .nullable(),
      }),
  };
}

export default CommunityValidation;