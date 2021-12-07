import styled from 'styled-components';
import { colorTheme } from '../../models/Theme';
import { Field } from 'formik';

export const Container = styled.div`
    width: 300px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FieldLabel = styled.label`
    width: 100%;

    color: ${colorTheme.white};
`;

export const FormikField = styled(Field)`
    width: 100%;
    height: 30px;
    padding: 5px;
    
    color: ${colorTheme.black};
    
    border-radius: 5px;
`;

export const ErrorLabel = styled.div`
    width: 100%;

    font-size: 12px;

    color: ${colorTheme.lightError};
`;