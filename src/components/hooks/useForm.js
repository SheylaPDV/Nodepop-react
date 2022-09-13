import React, { useState } from "react";

const getValueByType = {
  checkbox: ({ checked }) => checked,

  number: ({ value }) => Number(value),

  select: ({ selectedOptions }) =>
    [...selectedOptions].map(({ value }) => value),

  file: ({ files }) => files[0] || null,
};

const defaultGetValue = ({ value }) => value;

// VALOR INCIIAL DEL FORMULARIO

function useForm(initialFormValue) {
  // AQUI GUARDAMOS EL
  const [formValue, setFormValue] = useState(initialFormValue);

  const updateFormValue = (name, value) => {
    console.log("UPDATEFROMVALUE: ", name);
    console.log("UPDATEFROMVALUE: ", value);
    setFormValue((currentFormValue) => ({
      ...currentFormValue,
      [name]: value,
    }));
  };

  const handleChange = (ev) => {
    console.log("HANDLECHANGE-TYPE: ", ev.target.type);
    console.log("HANDLECHANGE-NAME: ", ev.target.name);
    const valueGetter = getValueByType[ev.target.type] || defaultGetValue;
    console.log("var-valueGetter: ", valueGetter);
    updateFormValue(ev.target.name, valueGetter(ev.target));
  };

  const handleSubmit = (onSubmit) => (ev) => {
    console.log("HANDLESUBMIT: ", ev);
    console.log("HANDLESUBMIT: ", formValue);
    ev.preventDefault();
    onSubmit(formValue);
  };

  const validate = (...validations) =>
    validations
      .map((validation) => validation(formValue))
      .every((valid) => valid);

  return {
    formValue,
    setFormValue,
    handleChange,
    handleSubmit,
    validate,
  };
}

export default useForm;
