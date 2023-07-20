import React from 'react';



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
                        <img src='assets/loja.png' alt='imagem da platileira de remedios da loja' />
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
                        <img src="assets/atendimento.png" alt='Atendente recepcionando o cliente' />
                    </div>
                </div>
            </div>
            
        </section>
    );
}