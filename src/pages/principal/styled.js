import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #E5E5E4;

    .linha {margin-top: -17px; text-align: center;}
`;

const Parteprincipal = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 40px 50px 20px 80px;
    font-family: Roboto;


    .barra {
        margin-top: 2px;
    }

    .titulo {
        display: flex;
        flex-direction: row;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 40px;
    }

    .texto1 {
        margin-left: 15px;
        color: #3C3939;
    }
`;

const Bloco1 = styled.div`
    background-color: #fff;
    padding: 30px 50px;

    .linha1 {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }


    .inp1 {
        margin-right: 20px;
        margin-left: 42px;
    }

    .inp2 {
        margin-right: 25px;
        margin-left: 21px;
    }

    .inp3 {
        margin-right: 35px;
        margin-left: 22px;
    }

    .inp1 input{
        height: 28px;
        margin-right: 10px;
        margin-left: 5px;
    }

    .inp-d input {
        width: 32.4em;
    }

    .linha-d {
        display: flex;
        flex-direction: row;
        margin-right: 10px;
        margin-left: 21px;
    }

    .text textarea {
        height: 112px;
        width: 32.5em;
        margin: 0px 15px 0px 5px;
        border-radius: 5px;
        background: #FFFFFF; 
        border: 1px solid #A8A8A8;
    }

    .btn button {
        background-color: #119FDC;
        color: white;
        font-family: Roboto;
        font-size: 12px;
        border: transparent;
        border-radius: 50px;
        padding: 10px 30px;
        cursor: pointer;
        margin-top: 84px;
    }



    input { height: 28px; border-radius: 5px; background: #FFFFFF; border: 1px solid #A8A8A8;}
`;


const Bloco2 = styled.div`
    background-color: #fff;
    padding: 30px 25px 30px 50px;
    margin-top: 45px;

    td button {
        border-radius: 50%;
        background-color: #565656;
        border: none;
        width: 31px;
        height: 31px;
        cursor: pointer;
    }

    .box-image {
        margin-right: 2em;
    }
    
    thead {
        background-color: #6CC3DF;
        width: 100px;
    }

    table {
        font-family: Roboto;
        margin-bottom: 1em;
        border-collapse: collapse;
    }

    tbody {
        background-color: #F5F5F5;
    }

    td {
        text-align: left;
        height:  61.93px;
        color: #6D6868;
        font-weight: 600;
        padding: .1em 2em;
        font-weight: 500;
        background-color: #E5E5E4;
    }



    th {
        height: 30px;
        text-align: left;
        padding: 1em;
        color: #ffff;
        font-weight: 800;
        padding: 1em 2em;
        font-weight: 500;
    } 

    .alternado td {
        background-color: #fff;
    }

    .coluna-acao {
        width: .1em;
    }

    .coluna-acao > button {
       visibility: hidden;
       margin: -.1em -1em;
    }
    

    tr:hover {
        .coluna-acao > button {
            visibility: visible;
         } 
    }
`;


export { Container, Parteprincipal, Bloco1, Bloco2 }