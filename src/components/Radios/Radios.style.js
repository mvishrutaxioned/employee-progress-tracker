import styled from 'styled-components';

export const RadioComponentStyle = styled.div`
    width: 48%;
    margin-bottom: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 13px;

    @media only screen and (max-width: 540px) {
        width: 100%;
    }
`;