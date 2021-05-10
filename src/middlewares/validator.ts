import { celebrate, Joi, Segments } from "celebrate";

export const validateCompanyQuery = celebrate({
  [Segments.QUERY]: Joi.object({
    cnpj: Joi.string()
      .optional()
      .length(14)
      .message("O CNPJ deve ser informado com 14 dígitos.")
      .pattern(/^\d{14}$/)
      .message("O CNPJ deve ser informado sem pontos, traços ou barras."),
    created_at: Joi.string()
      .optional()
      .pattern(/^(\d{4})-(\d{02})-(\d{02})\,\s?(\d{4})-(\d{2})-(\d{2})$/)
      .message("As datas devem ser informadas no padrão yyyy-mm-dd, e separadas por ','"),
    demand: Joi.string()
      .optional()
      .pattern(/^\d+\,\s?\d+$/)
  }).options({ allowUnknown: true })
});

export const validateCompanyBody = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string()
      .required(),
    cnpj: Joi.string()
      .required()
      .length(14)
      .message("O CNPJ deve ser informado com 14 dígitos.")
      .pattern(/^\d{14}$/)
      .message("O CNPJ deve ser informado sem pontos, traços ou barras."),
    demand: Joi.number()
      .required(),
    about: Joi.string()
      .required(),
    annual_billing_id: Joi.string()
      .required()
      .uuid({ separator: "-", version: "uuidv4" })
      .message("O campo 'annual_billing_id' é do tipo UUID v4, e deve conter 36 caracteres.")
  })
});

export const validateCompanyParams = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.string()
      .required()
      .uuid({ separator: "-", version: "uuidv4" })
      .message("O parametro 'id' é do tipo UUID v4, e deve conter 36 caracteres.")
  })
});
