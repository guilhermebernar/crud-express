import * as yup from "yup";

const createCategorySerializer = yup.string().max(200).required()

export {createCategorySerializer};