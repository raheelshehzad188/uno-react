import * as Yup from "yup";

const ServiceValidation = () => {
  return {
    service_title_en: Yup.string()
      .required("Service title en is required")
      .nullable(),
    service_title_ar: Yup.string()
      .required("Service title ar is required")
      .nullable(),
    service_title_fr: Yup.string()
      .required("Service title fr is required")
      .nullable(),
    service_title_de: Yup.string()
      .required("Service title de is required")
      .nullable(),
    service_title_ru: Yup.string()
      .required("Service title ru is required")
      .nullable(),
    service_title_se: Yup.string()
      .required("Service title se is required")
      .nullable(),
    service_slug_en: Yup.string()
      .required("Service title en is required")
      .nullable(),
    service_slug_ar: Yup.string()
      .required("Service title ar is required")
      .nullable(),
    service_slug_fr: Yup.string()
      .required("Service title fr is required")
      .nullable(),
    service_slug_de: Yup.string()
      .required("Service title de is required")
      .nullable(),
    service_slug_ru: Yup.string()
      .required("Service title ru is required")
      .nullable(),
    service_slug_se: Yup.string()
      .required("Service title se is required")
      .nullable(),
    service_short_description_en: Yup.string()
      .required("Service short description en is required")
      .nullable(),
    service_short_description_ar: Yup.string()
      .required("Service short description ar is required")
      .nullable(),
    service_short_description_fr: Yup.string()
      .required("Service short description fr is required")
      .nullable(),
    service_short_description_de: Yup.string()
      .required("Service short description de is required")
      .nullable(),
    service_short_description_ru: Yup.string()
      .required("Service short description ru is required")
      .nullable(),
    service_short_description_se: Yup.string()
      .required("Service short description se is required")
      .nullable(),
    service_is_active: Yup.string()
      .required("Service active status is required")
      .nullable(),
    service_show_in_home: Yup.string()
      .required("Service show home status is required")
      .nullable(),
    service_sorting: Yup.string()
      .required("Service sorting is required")
      .nullable(),
  };
}

export default ServiceValidation;