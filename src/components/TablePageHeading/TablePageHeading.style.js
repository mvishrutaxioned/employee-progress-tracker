import styled from 'styled-components';

export const TablePageStyle = styled.div`
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 7%;
    right: 0;
    left: 0;
    background: #fff;

    div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
    }

    a {
        padding: 5px 10px;
        margin: 0 5px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        background: #2b60de;
        color: #fff;
        font-size: 12px;
        transition: .5s ease;

        &:hover { filter: brightness(80%); }
        span::after {
            margin-right: 5px;
            color: #fff;
            font-size: 12px;
        }

        &:nth-child(1) span::after { content: "\\f1f8"; }
        &:nth-child(2) span::after { content: "\\f304"; }
    }

    @media only screen and (max-width: 540px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const TablePageFormStyle = styled.div`
    width: 30%;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    display: flex;
    align-items: center;

    form {
        width: 100%;
        display: flex;
        border-right: 1px solid #c0c0c0;

        input {
            width: 100%;
            border: none;
            font-family: "Poppins", sans-serif;
            font-size: 12px;
            outline: none;
        }

        button {
            background: #fff;
            border: none;
            outline: none;
        }

        button::after {
            content: "\\f002";
            background-color: #fff;
            color: #666;
            font-size: 12px;
            text-indent: 0;
        }
    }

    @media only screen and (max-width: 768px) {
        width: 50%;
    }

    @media only screen and (max-width: 540px) {
        width: 90%;
        margin: 0 auto 10px auto;
    }
`;

export const FilterStyle = styled.div`
    padding: 4px 10px;
    display: flex;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
    transition: .5s ease;

    span::after {
        content: '\\f0b0';
        margin-left: 5px;
        color: #000;
        font-weight: 600;
        font-size: 12px;
        text-indent: 0;
    }

    &:hover { color: #c0c0c0; }
`;

// export const FilterFormStyle = styled.form`
//     width: 30%;
//     padding: 10px;
//     margin: 0 10px;
//     border: 1px solid red;
//     border-radius: 4px;
//     display: flex;
//     flex-direction: column;
//     posiion: fixed;
//     top: 100px;

//     input {
//         padding: 4px;
//         border-radius: 4px;
//         border: 1px solid #c0c0c0;
//     }

//     button {
//         padding: 8px 12px;
//         margin: 10px auto 0 0;
//         border: none;
//         border-radius: 5px;
//         background: #2b5fdc;
//         color: #fff;
//         outline: none;
//     }
// `; 