import React from "react"
import {Link} from 'react-router-dom'
import'./Home.css'
export default function Home(){
    return(

        <div>
            
            <div>
                <p className="CARPET">Welcome</p>
            </div>
         
            <div className="bar">
            
                <button className="botao">
            
                    <Link to="/sobre" className="Link">
            
                        TODOS OS DEPARTAMENTOS
            
                    </Link>
            
                </button>
                <button className="botao">
            
                    <Link to="/sobre" className="Link">
            
                        LANÇAMENTOS
            
                    </Link>
            
                </button>
                <button className="botao">
            
                    <Link to="/sobre" className="Link">
            
                        DESTAQUES
            
                    </Link>
            
                </button>
                <button className="botao">
            
                    <Link to="/sobre" className="Link">
            
                        PC GAMER
            
                    </Link>
            
                </button>
                <button className="botao">
            
                    <Link to="/sobre" className="Link">
            
                        ELETRÔNICOS
            
                    </Link>
            
                </button>
                <button className="botao">
            
                    <Link to="/sobre" className="Link">
            
                        SEJA PRIME
            
                    </Link>
            
                </button>
                <button className="botao">
            
                    <Link to="/sobre" className="Link">
            
                        OFERTA DO DIA
            
                    </Link>
            
                </button>
                <button className="botao1">
            
                    <Link to="/sobre" className="Link">
            
                        BAIXE O APP
            
                    </Link>
            
                </button>
            </div>
        
        </div>
        
    )
}