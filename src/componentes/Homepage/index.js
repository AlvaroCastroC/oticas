import React from 'react';

import Capa from '../Banner/';
import Produtos from '../SectionProductors/';
import Sobre from '../SectionAbout/';
import Contato from '../SectionContact/';


export default function Conteudo (){
    return (
        <div>
            <Capa />
            <div className='main'>
                <Produtos />
                <Sobre />
                <Contato />
            </div>
        </div>
    );
}