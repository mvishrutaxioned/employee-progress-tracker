import styled from 'styled-components';

const PageHeadStyle = styled.div`
    width: 100%;
    padding: 10px 0;
    margin: auto;
    border-bottom: 1px solid #c0c0c0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    top: 0;
    background: #fff;
    font-size: 12px;
    z-index: 20;

    p { margin: 0; }

    a {
        margin: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: absolute;
        left: 15px;
        color: #000;
        font-size: 10px;
        -webkit-transition: .5s ease;
        -o-transition: .5s ease;
        transition: .5s ease;

        span::after {
            content: '\\f104';
            margin-right: 5px;
            font-size: 10px;
            color: #000;
            -webkit-transition: .5s ease;
            -o-transition: .5s ease;
            transition: .5s ease;
        }

        &:hover,
        &:hover span::after { color: #c0c0c0; }
    }
`;

export default PageHeadStyle;