import styled from 'styled-components';

export const MainStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1967d2;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        gap: 10px;
        background: #e8f0fb;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 20px 0;
    }
`;