const projectPropertyInitialValues = (projectProperty) => {
  return {
    project_property_property_type_id: projectProperty?.project_property_property_type_id,
    project_property_count_rooms: projectProperty?.project_property_count_rooms,
    project_property_number_of_bath: projectProperty?.project_property_number_of_bath,
    project_property_area_range: projectProperty?.project_property_area_range,
    project_property_title_en: projectProperty?.project_property_title_en,
    project_property_title_ar: projectProperty?.project_property_title_ar,
    project_property_title_fr: projectProperty?.project_property_title_fr,
    project_property_title_de: projectProperty?.project_property_title_de,
    project_property_title_ru: projectProperty?.project_property_title_ru,
    project_property_title_se: projectProperty?.project_property_title_se,
    project_property_image_title_en: projectProperty?.project_property_image_title_en,
    project_property_image_title_ar: projectProperty?.project_property_image_title_ar,
    project_property_image_title_fr: projectProperty?.project_property_image_title_fr,
    project_property_image_title_de: projectProperty?.project_property_image_title_de,
    project_property_image_title_ru: projectProperty?.project_property_image_title_ru,
    project_property_image_title_se: projectProperty?.project_property_image_title_se,
    project_property_image_alt_en: projectProperty?.project_property_image_alt_en,
    project_property_image_alt_ar: projectProperty?.project_property_image_alt_ar,
    project_property_image_alt_fr: projectProperty?.project_property_image_alt_fr,
    project_property_image_alt_de: projectProperty?.project_property_image_alt_de,
    project_property_image_alt_ru: projectProperty?.project_property_image_alt_ru,
    project_property_image_alt_se: projectProperty?.project_property_image_alt_se,
    project_property_is_active: projectProperty?.project_property_is_active,
    project_property_sorting: projectProperty?.project_property_sorting,
    project_property_location: projectProperty?.project_property_location,
  };
}

export default projectPropertyInitialValues;