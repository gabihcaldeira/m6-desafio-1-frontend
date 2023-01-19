import * as yup from "yup";

export const schema = yup.object({
  amount: yup
    .number()
    .min(1000, "Deve ser um número maior ou igual a 1000")
    .required("Campo Obrigatório")
    .typeError("Campo Obrigatório"),
  installments: yup
    .number()
    .integer("Deve ser número inteiro")
    .min(0, "Deve ser um número positivo")
    .max(12, "Máximo de 12 parcelas")
    .required("Campo Obrigatório")
    .typeError("Campo Obrigatório"),
  mdr: yup
    .number()
    .min(0, "Deve ser um número positivo")
    .required("Campo Obrigatório")
    .typeError("Campo Obrigatório"),
});
