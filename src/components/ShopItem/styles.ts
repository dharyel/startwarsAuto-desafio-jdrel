import styled from 'styled-components';
import { colorTheme } from '../../models/Theme';

export const Container = styled.div`
    width: 400px;
    padding: 25px;
    margin: 30px;

    border:3px solid black;
    border-radius: 20px;
    background-color: ${colorTheme.darkBlue};
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    :hover{
        filter: brightness(0.8);
        border: 3px solid ${colorTheme.gold};
    }
`;

export const MainInfo = styled.div`
    width: 300px;
    margin-bottom: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.h2` 
    font-family: 'Londrina Outline', cursive;
    color: ${colorTheme.gold};
    font-size: 30px;
`;

export const Model = styled.h3`
    color: ${colorTheme.gray};
    font-size: 18px;
`;

export const Manufacturer = styled.h3`
    color: ${colorTheme.gray};
    font-size: 16px;
`;

export const ItemImg = styled.img`
    width: 200px;
    margin-bottom: 15px;

    border-radius: 50%;
    object-fit: cover;
    position: center;
`;

export const Details = styled.div`
    width: 80%;
    padding: 30px;
    margin-bottom: 15px;

    border-radius: 15px;
    background-color: ${colorTheme.veryDarkBlue};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const DetailWrapper = styled.div`
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DetailName = styled.h5`
    margin-right: 5px;

    font-weight: normal;
    font-size: 16px;
    color: ${colorTheme.gray};
`;

export const DetailValue = styled.span`
    font-weight: bold;
    font-size: 16px;
    color: ${colorTheme.white};
`;

export const BuyButton = styled.button`
    width: 250px;
    height: 100px;
    padding: 5px;

    cursor: pointer;
    border-radius: 15px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    background-color: ${colorTheme.veryDarkBlue};
    color: ${colorTheme.white};
    border: 1px solid black;
    transition: all 0.5s ease-in-out;

    font-size: 25px;
    text-align: center;

    :hover {
        filter: brightness(0.5);
    }

    span{
        font-weight: bold;
        color: ${colorTheme.gold}
    }
`;