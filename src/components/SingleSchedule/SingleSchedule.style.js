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
        width: 40px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #dcdcdc;
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
        span { background: #eac0c3; }
    }

    td:nth-child(6) {
        width: 10%;
        span { background: #f5f77e; }
    }

    td:nth-child(7) {
        width: 10%;
        span { background: #d7aaf7; }
    }

    td:nth-child(8) {
        width: 10%;
        span { background: #f8b88b; }
    }

    td:nth-child(9) {
        width: 10%;
        span { background: #f7e6b9; }
    }

    td:nth-child(10) {
        width: 10%;
        span { background: #ccccff; }
    }
`;