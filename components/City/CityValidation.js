import * as Yup from "yup";

const CityValidation = () => {
  return {
    city: Yup.object().shape({
      city_name_en: Yup.string().required("Area name en is required").nullable(),
      city_name_ar: Yup.string().required("Area name ar is required").nullable(),
      city_name_fr: Yup.string().required("Area name fr is required").nullable(),
      city_name_de: Yup.string().required("Area name de is required").nullable(),
      city_name_ru: Yup.string().required("Area name ru is required").nullable(),
      city_name_se: Yup.string().required("Area name se is required").nullable(),
      city_slug_en: Yup.string().required("Area slug en is required").nullable(),
      city_slug_ar: Yup.string().required("Area slug ar is required").nullable(),
      city_slug_fr: Yup.string().required("Area slug fr is required").nullable(),
      city_slug_de: Yup.string().required("Area slug de is required").nullable(),
      city_slug_ru: Yup.string().required("Area slug ru is required").nullable(),
      city_slug_se: Yup.string().required("Area slug se is required").nullable(),
      city_is_active: Yup.string().required("Area name active status is required").nullable(),
      city_short_description_en: Yup.string().required("Area short description en is required").nullable(),
      city_short_description_ar: Yup.string().required("Area short description ar is required").nullable(),
      city_short_description_fr: Yup.string().required("Area short description fr is required").nullable(),
      city_short_description_de: Yup.string().required("Area short description de is required").nullable(),
      city_short_description_ru: Yup.string().required("Area short description ru is required").nullable(),
      city_short_description_se: Yup.string().required("Area short description se is required").nullable(),
    })
  };
}

export default CityValidation;