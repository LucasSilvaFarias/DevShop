import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    flex-direction: column;

    background-color: #2B3031;
    
    height: 100vh;
    width: 300px;

    position: sticky;
    top: 0px;

    color: #fff;
    font-family: Roboto;

    .logo {
        display: flex;
        flex-direction: row;
        font-size: 30px;
        margin: 45px 50px;
    }

    .logo-titulo {
        margin-left: 8px;
        font-weight: bold;
    }

    .logo-titulo span {
        color: #10EAEA;;
    }

    .separacao {
        background-color: #262626;
        height: 4em;
    }

    .opções {
        display: flex;
        flex-direction: column;
    }

    .parte1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 4.5em;
        margin: 0px 40px;
    }

    .parte2 {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        color: #000;
        background-color: #fff;
        height: 58px;
    }

    .img-2 {
        margin-right: 38px;
        margin-top: 4px;
    }

`;


export { Container }