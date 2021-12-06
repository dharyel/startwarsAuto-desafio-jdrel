import styled from 'styled-components';
import { colorTheme } from '../../models/Theme';

export const Container = styled.div `
    min-height: 100vh;
    width: 100%;
    padding: 30px;

    background-color: ${colorTheme.black};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

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

export const CheckoutWrapper = styled.div`
    width: 80%;
    padding: 30px;
    height: 100vh;

    background-color: ${colorTheme.darkBlue};
    border-radius: 30px;
    border: 3px solid ${colorTheme.veryDarkBlue};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserPaymentWrapper = styled.div`

`;

export const DivistorLine = styled.div`
    height: 100%;
    width: 2px;
    
    background-color: ${colorTheme.veryDarkBlue};
`;

export const ResumeWrapper = styled.div`
    width: 100%;
    padding: 30px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    /*h2=texto 'RESUME' */
    h2{
        font-size: 30px;
        font-family: cursive;
        
        color: ${colorTheme.white};
    }

    hr {
        width: 95%;
        height: 1px;
        margin: 15px;

        background-color: ${colorTheme.veryDarkBlue};
    }

    /*h4=Nome e custo do produto */
    h4{
        font-size: 15px;
        font-family: cursive;
        
        color: ${colorTheme.gray};
    }

    /*h3=Preço total da compra */
    h3{
        margin-bottom: 50px;

        font-size: 20px;
        font-family: cursive;
        
        color: ${colorTheme.white};

        /*span=dinheiro */
        span{
            color: ${colorTheme.gold};
        }
    }

    button {
        width: 150px;
        height: 50px;
        padding: 5px;
        margin: 2px;

        font-size: 18px;
        font-weight: bold;
        border-radius: 15px;
        border:2px solid black;
        transition: all 0.5s ease-in-out;
        text-align: center;
        cursor: pointer;

        :hover{
            filter: brightness(0.5);
        }
    }

    /*Botão de finalizar a compra*/
    #finishCheckoutButton{
        color: ${colorTheme.white};
        background-color: ${colorTheme.veryDarkBlue};
    }

    /*Botão de cancelar o checkout e voltar para a tela dos véiculos(home)*/
    #cancelCheckoutButton{
        color: ${colorTheme.white};
        background-color: ${colorTheme.error};
    }
`;