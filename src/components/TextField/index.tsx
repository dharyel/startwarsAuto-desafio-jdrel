import React from 'react';
import { useField } from 'formik';

import {
    Container,
    FieldLabel,
    FormikField,
    ErrorLabel
} from './styles';

export const TextField = ({ label, placeholder, handleUpdateAddress, type, ...props }:any) => {
  const [field] = useField(props);


  return (
    <Container>
        <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
        <FormikField 
            id={field.name} 
            name={type !== 'checkbox' ? field.name : 'paymentMethod'} 
            placeholder={placeholder}
            autoComplete="off" 
            onBlur={handleUpdateAddress}
            type={type}
            {...props}
        />

        {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
    </Container>
  )
}