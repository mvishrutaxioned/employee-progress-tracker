import styled from 'styled-components';

export const RadioComponentStyle = styled.div`
    width: 48%;
    margin-bottom: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    font-size: 13px;

    @media only screen and (max-width: 540px) {
        width: 100%;
    }
`;