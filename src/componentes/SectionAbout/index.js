import React from 'react';

import Img1 from '../../assets/loja.png';
import Img2 from '../../assets/atendimento.png';

export default function Sobre (){
    return (
        <section id='sobre' className='secao-sobre'>
            <div className='limitar-secao conteudo-sobre'>
                <div className='titulo'>
                    <h3>QUEM SOMOS NÓS?</h3>
                    <p>Fundada em 22001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <div className='sobre-box'>
                    <div>
                        <img src={Img1} />
                    </div>
                    <div className='card-sobre'>
                        <h4>NOSSAS FILIAIS</h4>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div div className='card-sobre'>
                        <h4>ATENDIMENTO FLEXIVEL</h4>
                        <p>Nossa equipe que possuimos é treinada a lhe atender</p>
                    </div>
                    <div>
                        <img src={Img2} />
                    </div>
                </div>
            </div>
            
        </section>
    );
}