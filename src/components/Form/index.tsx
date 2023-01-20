import { useForm } from "react-hook-form";
import { StyledInput } from "../Input/style";
import { StyledLabel } from "../Label/style";
import { FormContainer } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validators";
import { Error } from "../InputError/style";
import { calculateTransaction, IApiPostData } from "../../services/api";
import { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import Toast from "../Toast";

const Form = () => {
  const {
    setApiResponse,
    setIsLoading,
    setIsToastOpen,
    setToastType,
    isToastOpen,
    isLoading,
    toastType,
  } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IApiPostData>({ resolver: yupResolver(schema) });

  function handleForm(data: IApiPostData) {
    setIsLoading(true);
    setToastType("delay");
    setIsToastOpen(true);
    calculateTransaction(data)
      .then((res) => {
        setApiResponse(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setToastType(error.response.data.message);
        setIsToastOpen(true);
        setTimeout(() => {
          setIsToastOpen(false);
        }, 5000);
      });
  }

  useEffect(() => {
    if (isToastOpen && toastType !== "delay") {
      setTimeout(() => {
        setIsToastOpen(false);
      }, 5000);
    }
    if (!isLoading) {
      setIsToastOpen(false);
    }
  }, [isToastOpen, isLoading]);

  return (
    <>
      {isToastOpen && <Toast />}

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
              <StyledInput type="number" step={0.01} {...register("amount")} />
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
              <StyledInput type="number" step={0.1} {...register("mdr")} />
            </div>
            <Error>{errors.mdr?.message}</Error>
          </div>

          <button type="submit" className="form_button">
            Calcular!
          </button>
        </form>
      </FormContainer>
    </>
  );
};

export default Form;
