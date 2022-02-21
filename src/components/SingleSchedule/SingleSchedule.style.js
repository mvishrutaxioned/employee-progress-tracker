import styled from 'styled-components';

export const SingleScheduleStyle = styled.tr`
    td {
        padding: 6px 5px;
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;

        span {
            padding: 3px 5px;
            border-radius: 5px;
        }
    }

    td:nth-child(1) {
        width: 5%;
        background: #dcdcdc;
    }

    td:nth-child(2) { width: 15%; }

    td:nth-child(3) {
        width: 10%;
        span { background: #c3fdb8; }
    }

    td:nth-child(4) {
        width: 10%;
        span { background: #dbf9db; }
    }

    td:nth-child(5) {
        width: 10%;
        span { background: #ffa07a; }
    }

    td:nth-child(6) {
        width: 10%;
        span { background: #c9be62; }
    }

    td:nth-child(7) {
        width: 10%;
        span { background: #bc8f8f; }
    }

    td:nth-child(8) {
        width: 10%;
        span { background: #f8b88b; }
    }

    td:nth-child(9) {
        width: 10%;
        span { background: #d291bc; }
    }

    td:nth-child(10) {
        width: 10%;
        span { background: #ccccff; }
    }
`;