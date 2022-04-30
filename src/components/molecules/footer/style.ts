import styled from 'styled-components';

export const RodapeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 13px;
    position: absolute;
    width: 100%;
    height: 76px;
    background: #3E1F69;
`;

export const Rodape = styled.div`
    color: white;
`;

export const BotaoScroll = styled.button`
    position: static;
    width: 127px;
    height: 20px;
    left: 336.5px;
    top: 43px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #C4C4C4;
    background-color: #3E1F69;
    border: none;
    :hover {
        cursor: pointer;
    }
`;

export const Titulo = styled.b``;

export const Subtitulo = styled.span``;