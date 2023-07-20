import React from 'react';


export default function Topo() {
    return (
        <header className='limitar-secao'>
            <div className='topo'>
            <div>
                <img src="assets/logo.png" alt='Logo da Óticas vida' title='Home' className='logo-imagem'/>
            </div>

            <nav>
                <ul type = 'none'>
                    <li><a href='#produtos'>PRODUTOS</a></li>
                    <li><a href='#sobre'>SOBRE</a></li>
                    <li><a href='#contato'>CONTATO</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}