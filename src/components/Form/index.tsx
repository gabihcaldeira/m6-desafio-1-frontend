import { useForm } from "react-hook-form";
import { StyledInput } from "../Input/style";
import { StyledLabel } from "../Label/style";
import { FormContainer } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validators";
import { Error } from "../InputError/style";
import { calculateTransaction, IApiPostData } from "../../services/api";
import { useContext } from "react";
import { Context } from "../../context/context";

const Form = () => {
  const { setApiResponse } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IApiPostData>({ resolver: yupResolver(schema) });

  function handleForm(data: IApiPostData) {
    calculateTransaction(data).then((res) => {
      console.log(res);
      setApiResponse({ ...res });
    });
  }

  return (
    <FormContainer>
      <form
        className="form"
        onSubmit={handleSubmit((data) => handleForm(data))}
      >
        <div className="form_item">
          <StyledLabel htmlFor="amount">
            Informe o valor da venda <span>*</span>
          </StyledLabel>
          <div className="inputContainer">
            <p className="input_prefix">R$</p>
            <StyledInput
              type="number"
              step={0.01}
              min={1000}
              {...register("amount")}
            />
          </div>
          <Error>{errors.amount?.message}</Error>
        </div>

        <div className="form_item">
          <StyledLabel htmlFor="installments">
            Em quantas parcelas <span>*</span>
          </StyledLabel>
          <div className="inputContainer">
            <StyledInput
              type="number"
              step={1}
              min={0}
              max={12}
              {...register("installments")}
            />
          </div>
          <Error>{errors.installments?.message}</Error>
        </div>

        <div className="form_item">
          <StyledLabel htmlFor="mdr">
            Informe o percentual de MDR <span>*</span>
          </StyledLabel>
          <div className="inputContainer">
            <StyledInput
              type="number"
              step={0.1}
              min={0}
              {...register("mdr")}
            />
          </div>
          <Error>{errors.mdr?.message}</Error>
        </div>

        <button type="submit" className="form_button">
          Calcular!
        </button>
      </form>
    </FormContainer>
  );
};

export default Form;
