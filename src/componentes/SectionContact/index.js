import React from 'react';

export default function Contato (){
    return (
        <section className='secao-contato' id='contato'>
            <div className='limitar-secao'>
                <div className='titulo'>
                    <h3>FALE CONOSCO</h3>
                    <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                </div>
                <div className='conteudo-contato'>
                    <div className='box-contato'>
                        <h4>Contato</h4>
                        <nav>
                            <ul type='none'>
                                <li className='endereco'>Nova Iguaçu, RJ</li>
                                <li className='numero'>(21) 9999-9999</li>
                                <li className='email'>contato@oticavida.com</li>
                            </ul>
                        </nav>

                    </div>
                    <div className='box-contato'>
                        <h4>Nossas Redes Sociais</h4>
                        <nav>
                            <ul type='none'>
                                <li className='face'>/OticaVida</li>
                                <li className='insta'>@oticavidarj</li>
                                <li className='twiter'>@oticavidarj</li>
                            </ul>
                        </nav>

                    </div>

                </div>
            </div>
        </section>
    );
}