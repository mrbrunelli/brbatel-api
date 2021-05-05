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
