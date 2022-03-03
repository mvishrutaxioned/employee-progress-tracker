import styled from 'styled-components';

const HomeButtonStyle = styled.li`
    width: 48%;
    list-style: none;
    text-align: center;

    a {
        height: 100px;
        padding: 0 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: ${({color}) => color};
        color: #fff;
        font-size: 13px;
        text-decoration: none;
        text-align: center;
        -webkit-transition: .5s ease;
        -o-transition: .5s ease;
        transition: .5s ease;

        &:hover {
            -webkit-filter: brightness(80%);
            filter: brightness(80%);
        }
    }

    span {
        margin-right: 15px;
        font-size: 0;

        &::after {
            content: '\f073';
            color: #fff;
            font-weight: 600;
            font-family: "Font Awesome 5 Free";
            font-size: 20px;
            text-indent: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        a {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
        }

        span { margin: 0 0 8px 0; }
    }

    @media only screen and (max-width: 540px) {
        width: 45%;
        a { padding: 0 10px; }
    }
`;

export default HomeButtonStyle;