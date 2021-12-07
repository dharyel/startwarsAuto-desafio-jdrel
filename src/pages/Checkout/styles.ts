import styled from 'styled-components';
import { colorTheme } from '../../models/Theme';
import { Formik, Form } from 'formik';

interface CreditCardProps {
    isCreditCard: boolean;
}

export const Container = styled.div `
    min-height: 100vh;
    width: 100%;
    padding: 30px;

    background-color: ${colorTheme.black};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    /*Texto CHECKOUT*/
    h1 {
        margin-bottom: 15px;

        font-family: 'Londrina Outline', cursive;
        font-size: 50px;
        color: ${colorTheme.gold};
        text-align: center;
        cursor: context-menu;
        border-bottom: 1px solid ${colorTheme.gold};
    }
`;

export const FormikWrapper = styled(Formik)`
   
`;

export const CheckoutWrapper = styled(Form)`
    
    max-width: 1440px;
    padding: 30px;

    background-color: ${colorTheme.darkBlue};
    border-radius: 30px;
    border: 3px solid ${colorTheme.veryDarkBlue};

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;


export const UserPaymentWrapper = styled.div`
    display: flex;
`;

export const Infos = styled.fieldset`
    padding: 20px;

    border-radius: 10px;

    background-color: ${colorTheme.veryDarkBlue};
    border: 0;

    margin-right: 30px;

    legend{
        color: ${colorTheme.gray};
    }

    h2{
        font-size: 20px;

        color: ${colorTheme.white};
    }
`;

export const DivistorLine = styled.div`
    margin: 0 30px;
    height: 100%;
    width: 2px;
    
    background-color: ${colorTheme.veryDarkBlue};
`;

export const PaymentMethod = styled.div`
    margin-bottom: 20px;

    display: flex;
`;

export const CreditCard = styled.div<CreditCardProps>`
    overflow-y: hidden;
    width: 360px;
    height: ${({isCreditCard}) => isCreditCard ? '300px' : '0px'};
    padding: ${({isCreditCard}) => isCreditCard ? '30px' : '0px'};

    border-radius: 10px;
    background-color: ${colorTheme.black};

    transition: all 0.2s ease-in-out;
`;
