const JobInitialValues = (job) => {
  return {
    job_title_en: job?.job_title_en,
    job_title_ar: job?.job_title_ar,
    job_title_fr: job?.job_title_fr,
    job_title_de: job?.job_title_de,
    job_title_ru: job?.job_title_ru,
    job_title_se: job?.job_title_se,
    job_slug_en: job?.job_slug_en,
    job_slug_ar: job?.job_slug_ar,
    job_slug_fr: job?.job_slug_fr,
    job_slug_de: job?.job_slug_de,
    job_slug_ru: job?.job_slug_ru,
    job_slug_se: job?.job_slug_se,
    job_is_active: job?.job_is_active,
    job_sorting: job?.job_sorting,
    job_short_description_ar: job?.job_short_description_ar,
    job_short_description_en: job?.job_short_description_en,
    job_short_description_fr: job?.job_short_description_fr,
    job_short_description_de: job?.job_short_description_de,
    job_short_description_ru: job?.job_short_description_ru,
    job_short_description_se: job?.job_short_description_se,
    job_body_en: job?.job_body_en,
    job_body_ar: job?.job_body_ar,
    job_body_fr: job?.job_body_fr,
    job_body_de: job?.job_body_de,
    job_body_ru: job?.job_body_ru,
    job_body_se: job?.job_body_se,
    job_meta_title_en: job?.job_meta_title_en,
    job_meta_title_ar: job?.job_meta_title_ar,
    job_meta_title_fr: job?.job_meta_title_fr,
    job_meta_title_de: job?.job_meta_title_de,
    job_meta_title_ru: job?.job_meta_title_ru,
    job_meta_title_se: job?.job_meta_title_se,
    job_meta_keywords_en: job?.job_meta_keywords_en,
    job_meta_keywords_ar: job?.job_meta_keywords_ar,
    job_meta_keywords_fr: job?.job_meta_keywords_fr,
    job_meta_keywords_de: job?.job_meta_keywords_de,
    job_meta_keywords_ru: job?.job_meta_keywords_ru,
    job_meta_keywords_se: job?.job_meta_keywords_se,
    job_meta_description_en: job?.job_meta_description_en,
    job_meta_description_ar: job?.job_meta_description_ar,
    job_meta_description_fr: job?.job_meta_description_fr,
    job_meta_description_de: job?.job_meta_description_de,
    job_meta_description_ru: job?.job_meta_description_ru,
    job_meta_description_se: job?.job_meta_description_se,
  };
}

export default JobInitialValues;