import styled from 'styled-components';

export const MainStyle = styled.div`
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    background-color: ${({color}) => color};
`;

export const PageHeadStyle = styled.main`
    width: 60%;
    margin: 50px auto;
    color: #fff;
    text-align: center;

    h1 {
        margin: 20px auto 5px auto;
        font-size: 28px;
    }

    a {
        color: #fff;
        text-decoration: none;
        -webkit-transition: .5s ease;
        -o-transition: .5s ease;
        transition: .5s ease;

        &:hover { color: #dcdcdc; }
    }

    p { font-size: 10px; }

    .user-heading::after {
        content: '\f133';
        font-size: 44px;
    }
`;

export const HomeBtnStyle = styled.section`
    width: 60%;
    margin: 0 auto;

    ul {
        padding: 15px 5px;
        border-radius: 5px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        gap: 10px;
        background: #e8f0fb;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 20px 0;
    }
`;

export const ThemeBtnStyle = styled.span`
    padding: 10px 15px;
    margin: 20px auto;
    background: #F4F6F7;
    border-radius: 3px;
    border: 3px solid #000;
    color: #000;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    -webkit-transition: .5s ease;
    -o-transition: .5s ease;
    transition: .5s ease;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    &:hover {
        -webkit-transform: scale(.90);
        -ms-transform: scale(.90);
        transform: scale(.90);
    }
`;