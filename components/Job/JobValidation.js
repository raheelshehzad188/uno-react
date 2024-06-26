import * as Yup from "yup";

const JobValidation = () => {
  return {
    job_title_en: Yup.string()
      .required("Job title en is required")
      .nullable(),
    job_title_ar: Yup.string()
      .required("Job title ar is required")
      .nullable(),
    job_title_fr: Yup.string()
      .required("Job title fr is required")
      .nullable(),
    job_title_de: Yup.string()
      .required("Job title de is required")
      .nullable(),
    job_title_ru: Yup.string()
      .required("Job title ru is required")
      .nullable(),
    job_title_se: Yup.string()
      .required("Job title se is required")
      .nullable(),
    job_slug_en: Yup.string()
      .required("Job title en is required")
      .nullable(),
    job_slug_ar: Yup.string()
      .required("Job title ar is required")
      .nullable(),
    job_slug_fr: Yup.string()
      .required("Job title fr is required")
      .nullable(),
    job_slug_de: Yup.string()
      .required("Job title de is required")
      .nullable(),
    job_slug_ru: Yup.string()
      .required("Job title ru is required")
      .nullable(),
    job_slug_se: Yup.string()
      .required("Job title se is required")
      .nullable(),
    job_short_description_en: Yup.string()
      .required("Job short description en is required")
      .nullable(),
    job_short_description_ar: Yup.string()
      .required("Job short description ar is required")
      .nullable(),
    job_short_description_fr: Yup.string()
      .required("Job short description fr is required")
      .nullable(),
    job_short_description_de: Yup.string()
      .required("Job short description de is required")
      .nullable(),
    job_short_description_ru: Yup.string()
      .required("Job short description ru is required")
      .nullable(),
    job_short_description_se: Yup.string()
      .required("Job short description se is required")
      .nullable(),
    job_is_active: Yup.string()
      .required("Job active status is required")
      .nullable(),
    job_sorting: Yup.string()
      .required("Job sorting is required")
      .nullable(),
  };
}

export default JobValidation;