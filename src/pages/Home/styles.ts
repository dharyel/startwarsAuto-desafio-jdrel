import styled from 'styled-components';
import { colorTheme } from '../../models/Theme';

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh);

    background-color: ${colorTheme.veryDarkBlue};
`;