import React from 'react';
import { useField } from 'formik';

import {
    Container,
    FieldLabel,
    FormikField,
    ErrorLabel
} from './styles';

export const RadioField = ({ label, placeholder, type, ...props }:any) => {
  const [field] = useField(props);


  return (
    <Container>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <FormikField 
            id={field.name} 
            placeholder={placeholder}
            autoComplete="off" 
            type={type}
            {...props}
        />

        {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
    </Container>
  )
}