import styled from 'styled-components';
import { colorTheme } from '../../models/Theme';
import { Field } from 'formik';

export const Container = styled.div`
    margin-right: 40px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const FieldLabel = styled.label`
    margin-right: 10px;

    color: ${colorTheme.white};
`;

export const FormikField = styled(Field)`
    width: 20px;
    height: 20px;
    padding: 5px;
    
    color: ${colorTheme.black};
    
    border-radius: 5px;
`;

export const ErrorLabel = styled.div`
    width: 100%;

    font-size: 12px;

    color: ${colorTheme.lightError};
`;