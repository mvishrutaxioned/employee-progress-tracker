import styled from "styled-components";

export const FilterStyle = styled.div`
    width: 20%;
    padding: 14px 10px;
    margin: 0 6px;
    border: 1px solid #c0c0c0;
    border-radius: 4px;
    position: fixed;
    background: #fff;
    
    form {
        display: flex;
        flex-direction: column;

        input {
            padding: 10px 4px;
            border-radius: 4px;
            border: 1px solid #c0c0c0;
            text-indent: 5px;
            outline: none;

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }

        button {
            padding: 8px 12px;
            margin: 10px auto 0 0;
            border: none;
            border-radius: 5px;
            background: #2b5fdc;
            color: #fff;
            outline: none;
            transition: .5s ease;

            &:hover { background: #5DADE2; }
        }
    }

    @media only screen and (max-width: 768px) {
        width: 40%;
    }

    @media only screen and (max-width: 540px) {
        width: 60%;
        margin: 0 auto;
        top: 14%;
        left: 0;
        right: 0;
    }
`; 