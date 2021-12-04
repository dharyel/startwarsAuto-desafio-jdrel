import styled from 'styled-components';
import { colorTheme } from '../../models/Theme';


export const Container = styled.div`
    width: 100%;
    padding: 30px;


    display: flex;
    justify-content: center;
    align-items: flex-start;
`;


export const ChangePageSelector = styled.button`
    width: 250px;
    height: 100px;
    margin: 30px;
    
    cursor: pointer;
    border-radius: 30px;
    background-color: ${colorTheme.black};
    color: ${colorTheme.white};
    font-size: 30px;
    border: 2px solid white;
    transition: all 0.5s ease-in-out;

    :disabled{
        cursor: not-allowed;
        filter: brightness(0.2);
    }

    :enabled:hover {
        border: 2px solid ${colorTheme.gold};
        filter: brightness(0.6);
    }
`;