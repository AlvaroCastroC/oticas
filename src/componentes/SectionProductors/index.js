import React from 'react';

import img01 from '../../assets/oculos01.png';
import img02 from '../../assets/oculos02.png';
import img03 from '../../assets/oculos03.png';
import img04 from '../../assets/oculos04.png';

export default function Produtos () {
    return (
        <section className='secao-produtos' id='produtos'>
            <div className='limitar-secao conteudo-produtos'>
                <div className='titulo'>
                    <h3>NOSSOS PRODUTOS</h3>
                    <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculinos, feminino e infantil.</p>
                    <p>Todos os nosso preços são acessiveis e contam com a melhor qualidade do mercado. </p>
                </div>

                <div className='card-box'>
                    <div className='card'>
                        
                        <h4>Óculos de grau</h4>
                        
       
                        <img src={img01} alt='Óculos de grau' title='Óculos de grau com listras marrom'/>

                       <div>
                       <p>R$ 500,00</p>
                       </div>
  
                    </div>
                    <div className='card'>
                        
                        <h4>Óculos de transition</h4>
                        

                        <img src={img02} alt='Óculos de transition' title='Óculos preto'/>

                        <div>
                        <p>R$ 750,00</p>
                        </div>
                    </div>
                    <div className='card'>
                        <h4>Óculos de sol</h4>

                        
                        <img src={img03} alt='Óculos de sol' title='Óculos preto arredondados'/>

                       <div>
                       <p>R$ 700,00</p>
                       </div>
                    </div>

                    <div className='card'>
                       
                       <h4>Óculos infantil</h4>
                       
                       <img src={img04} alt='Óculos infantil' title='Óculos da Vougue brancos'/>
                        
                      <div>
                         <p>R$ 500,00</p>
                      </div>
                       
                    </div>

                </div>
                <div className='secao-lista'>
                    <p>Todos os nossos produtos incluem</p>
                    <ul className='lista-produtos'>
                        <li>Garantia de 1 ano</li>
                        <li>Manutenção preventiva</li>
                        <li>Descontos especiais na compra da segunda unidade</li>
                        <li>Flexibilidade de pagamento</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}