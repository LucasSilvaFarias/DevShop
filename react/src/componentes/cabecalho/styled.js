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
        cursor: pointer;
    }   

    .absolute {
        color: white;
        background-color: #DB21BD;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
        top: 8px;
        margin-left: 30px; 
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