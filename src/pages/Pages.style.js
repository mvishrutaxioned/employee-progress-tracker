import styled from 'styled-components';

export const FormSectionStyle = styled.section`
    .wrapper {
        width: 100%;
        padding: 1px;
        box-sizing: border-box;
        background-color: #f3f3fe;
    }

    p {
        margin-top: 30px;
        font-weight: 600;
        font-size: 14px;
    }
`;

export const FormStyle = styled.form`
    padding: 30px 40px;

    & > div:nth-child(1) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;

        label {
            font-weight: 600;
            font-size: 14px;
        }

        input {
            width: 250px;
            padding: 10px 0;
            margin: 5px 0;
            border: 1px solid #a5a7a9;
            border-radius: 5px;
            outline: none;
            text-indent: 10px;

            &:focus {
                border: 1px solid #6aa5f5;
                -webkit-box-shadow: 0px 0px 3px 0px #6aa5f5;
                box-shadow: 0px 0px 3px 0px #6aa5f5;
            }
        }
    }

    @media only screen and (max-width: 540px) {
        padding: 30px 15px;
        & > div:nth-child(1) input { width: 100%; }
    }
`;

export const FormDivStyle = styled.div`
    width: 50%;
    margin: 50px auto;
    background-color: #fff;

    h2 {
        padding: 20px 0;
        border-bottom: 1px solid #a5a7a9;
        font-weight: 600;
        font-size: 22px;
        text-align: center;
    }

    button {
        padding: 10px 25px;
        margin: 30px 0 0 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
        background: #5ddd63;
        color: #fff;
        font-size: 16px;
        -webkit-transition: .5s ease;
        -o-transition: .5s ease;
        transition: .5s ease;

        &:hover {
            -webkit-filter: brightness(80%);
            filter: brightness(80%);
        }
    }

    @media only screen and (max-width: 768px) {
        width: 70%;
    }

    @media only screen and (max-width: 540px) {
        width: 90%;
        h2 { font-size: 17px; }
    }
`;

export const RadioStyle = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const SelectStyle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    label {
    margin-top: 30px;
    font-weight: 600;
    font-size: 14px;
    }

    input,
    select {
        width: 250px;
        padding: 10px 0;
        margin: 5px 0;
        border: 1px solid #a5a7a9;
        border-radius: 5px;
        outline: none;
        text-indent: 5px;

        &:focus {
            border: 1px solid #6aa5f5;
            -webkit-box-shadow: 0px 0px 3px 0px #6aa5f5;
            box-shadow: 0px 0px 3px 0px #6aa5f5;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    & textarea {
        height: 80px;
        padding: 10px 5px;
        margin: 5px 0;
        border: 1px solid #a5a7a9;
        border-radius: 5px;
        outline: none;
        text-indent: 5px;
        resize: none;
    }

    @media only screen and (max-width: 540px) {
        input,
        select {
            width: 100%;
        }
    }
`;

export const TableListStyle = styled.section`
    .wrapper { width: 100%; }
    margin-top: 80px;

    @media only screen and (max-width: 540px) {
        margin-top: 120px;
    }
`;

export const TableStyle = styled.table`
    width: ${({width}) => width};
    margin: 20px 6px;
    border-collapse: collapse;
    overflow-x: scroll;

    th,
    td {
        border: 1px solid #c0c0c0;
    }
`;

export const TableHeadStyle = styled.thead`
    th {
        padding: 5px;
        margin: 0;
        background: #dcdcdc;
        font-weight: 500;
        font-family: 'Open Sans', sans-serif;
        font-size: 11px;
        text-align: left;
        letter-spacing: .5px;

        span::after {
            margin-right: 4px;
            font-size: 12px;
            color: #000;
            text-indent: 0;
        }
    }

    th:nth-child(2) span::after {  content: '\\f7d7'; }

    th:nth-child(3) span::after,
    th:nth-child(4) span::after,
    th:nth-child(5) span::after { content: "\\f02b"; }

    th:nth-child(6) span::after { content: "\\f073"; }
    th:nth-child(7) span::after { content: "\\f249"; }
`;

export const TableHeadStyle2 = styled.thead`
    th {
        padding: 5px;
        margin: 0;
        border-bottom: 2px solid #c0c0c0;
        background: #dcdcdc;
        font-weight: 500;
        font-family: 'Open Sans', sans-serif;
        font-size: 11px;
        text-align: left;
        letter-spacing: .5px;

        span::after {
            margin-right: 4px;
            font-size: 12px;
            color: #000;
            text-indent: 0;
        }
    }

    th:nth-child(2) span::after,
    th:nth-child(4) span::after,
    th:nth-child(5) span::after,
    th:nth-child(6) span::after,
    th:nth-child(7) span::after,
    th:nth-child(8) span::after,
    th:nth-child(9) span::after,
    th:nth-child(10) span::after { content: "\\f02b"; }

    th:nth-child(3) span::after { content: "\\f073"; }
`;

export const DayRadioBtnStyle = styled.div`
    p {
        margin: 30px 0 5px 0;
        font-weight: 600;
        font-size: 14px;
    }
`;