import styled from 'styled-components';
import { colorTheme} from '../../models/Theme';

export const Container = styled.div`
    height: 50px;
    width: 100%;
    padding: 30px;

    background-color: ${colorTheme.black};

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MadeBy = styled.h2`
    font-family: sans-serif;
    font-size: 14px;
    color: ${colorTheme.white};
    cursor: context-menu;
`;