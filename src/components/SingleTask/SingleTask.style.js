import styled from 'styled-components';

export const SingleTaskStyle = styled.tr`
    td {
        padding: 5px;
        font-family: 'Open Sans', sans-serif;
        font-size: 11px;

        span {
            padding: 2px 5px;
            border-radius: 5px;
        }
    }

    td:nth-child(1) {
        width: 5%;
        background: #dcdcdc;
    }

    td:nth-child(2) { width: 25%; }

    td:nth-child(3) {
        width: 15%;
        span { background: #c3fdb8; }
    }

    td:nth-child(4) {
        width: 10%;
        span { background: #dbf9db; }
    }

    td:nth-child(5) {
        width: 15%;
        span { background: #ffa07a; }
    }

    td:nth-child(6) { width: 10%; }
    td:nth-child(7) { width: 20%; }
`;