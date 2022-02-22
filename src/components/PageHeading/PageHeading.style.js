import styled from 'styled-components';

const PageHeadStyle = styled.div`
    width: 100%;
    padding: 10px 0;
    margin: auto;
    border-bottom: 1px solid #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    background: #fff;
    font-size: 12px;
    z-index: 20;

    p { margin: 0; }

    a {
        margin: 0;
        display: flex;
        align-items: center;
        position: absolute;
        left: 15px;
        color: #000;
        font-size: 10px;
        transition: .5s ease;

        span::after {
            content: '\\f104';
            margin-right: 5px;
            font-size: 10px;
            color: #000;
            transition: .5s ease;
        }

        &:hover,
        &:hover span::after { color: #c0c0c0; }
    }
`;

export default PageHeadStyle;