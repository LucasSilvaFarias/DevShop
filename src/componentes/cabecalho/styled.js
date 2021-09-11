import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 65em;
    align-items: center;
    background-color: #fff; 
    padding: 15px 110px 15px 60px;

    .usuario {
        display: flex;
        flex-direction: row;     
        align-items: center;
    }

    .img-1 img {
        width: 50px;
        height: 50px;
        border-radius: 40px;
        margin-right: 10px;
    }   

    button {
        background-color: #119FDC;
        text-aling: center;
        cursor: pointer;
        border: transparent;
        padding: 8px;
        width: 42px;
        height: 42px;
        border-radius: 40px;
    }

    .bt {
        margin-left: 8px;
    }
`;

export { Container }