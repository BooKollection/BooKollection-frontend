import React from 'react';
import { Rodape, RodapeContainer, BotaoScroll, Titulo, Subtitulo} from './style';

const Footer = () => {
    const topo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }; 
    return(
        <>
            <RodapeContainer>
                <Rodape>
                    <Titulo> BooKollection </Titulo>
                    <Subtitulo> versão 0.1 </Subtitulo>
                </Rodape>
                <BotaoScroll onClick={topo}> voltar para o topo </BotaoScroll>
            </RodapeContainer>
        </>
    );
};

export default Footer;