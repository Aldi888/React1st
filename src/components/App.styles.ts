import styled from "styled-components";


export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margim-bottom: 30px;
`;
export const Container = styled.div`

    bbackground-color: rgba(0, 0, 0, 0.75);
    color: #FFF;
    min-height: 100vh;
    text-align: center;
    margim-bottom: 30px;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Blocklist = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 8px 16px;
font-size: 15px;
border-radius: 10px;
margin: 0 20px;
`;



export default styled;