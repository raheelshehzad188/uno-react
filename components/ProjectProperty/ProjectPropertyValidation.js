import * as Yup from "yup";

const ProjectPropertyValidation = () => {
  return {
    project_property_property_type_id: Yup.string().required("property type is required").nullable(),
    project_property_count_rooms: Yup.string().required("property count rooms is required").nullable(),
    project_property_number_of_bath: Yup.string().required("property number of bath is required").nullable(),
    project_property_area_range: Yup.string().required("property area range is required").nullable(),
    project_property_title_en: Yup.string().required("property title en is required").nullable(),
    project_property_title_ar: Yup.string().required("property title ar is required").nullable(),
    project_property_title_fr: Yup.string().required("property title fr is required").nullable(),
    project_property_title_de: Yup.string().required("property title de is required").nullable(),
    project_property_title_ru: Yup.string().required("property title ru is required").nullable(),
    project_property_title_se: Yup.string().required("property title se is required").nullable(),
    project_property_is_active: Yup.string().required("property  active status is required").nullable(),
    project_property_sorting: Yup.string().required("property sorting is required").nullable(),
  };
}

export default ProjectPropertyValidation;