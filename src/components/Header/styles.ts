import styled from 'styled-components';
import { colorTheme} from '../../models/Theme';

export const Container = styled.div`
    height: 100px;
    width: 100%;
    padding: 30px;

    background-color: ${colorTheme.black};

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoTitle = styled.h1`
    font-family: 'Londrina Outline', cursive;
    font-size: 30px;
    color: ${colorTheme.gold};
    text-align: center;
    cursor: context-menu;
`;