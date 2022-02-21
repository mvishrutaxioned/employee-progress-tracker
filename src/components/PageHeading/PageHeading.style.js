import styled from 'styled-components';

const PageHeadStyle = styled.div`
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    background: #fff;
    font-size: 14px;

    p { margin: 0; }

    a {
        margin: 0;
        display: flex;
        align-items: center;
        position: absolute;
        left: 15px;
        color: #000;
        transition: .5s ease;

        span::after {
            content: '\f104';
            margin-right: 5px;
            font-size: 14px;
            color: #000;
        }

        &:hover { left: 5px;}
    }

    @media only screen and (max-width: 540px) {
        a,
        a span::after { font-size: 12px; }
    }
`;

export default PageHeadStyle;