import React, { useEffect, useState } from "react";
import {FiFilePlus,FiLogOut} from "react-icons/fi"
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function Head({title}){
    const history = useHistory();
    const[nome,setNome] = useState();
    const[quant,setQuant] = useState();
    const[dados,setDados] = useState([]);
    const logoff=()=>{
        window.location.href="/";
    }
    
   
    useEffect(()=>{

          verificarsession();
    },[])
    function verificarsession(){
      let session =JSON.parse(sessionStorage.getItem("session")|| "[]");
      console.log(session.nome);
      setDados(session);
     
      if(dados.length>0){
        setNome(session.nome);
      }else{
           alert("você não tem autorização para acessar esse modulo")
      }
      

      
    }
    function confirmarSaida(){
        confirmAlert({
            title: 'Confirmar Saída',
            message: `Deseja realmente Sair do Site?`,
            buttons: [
              {
                label: 'Sim',
                onClick: () => logoff()
              },
              {
                label: 'Não',
                // onClick: () => alert('Click No')
              }
            ]
          })
        }

    return(
        <div className="head">

            <div className="title">
                    
                    <h2>{title}</h2>
                    <h5>{nome}</h5>
                   
            </div>
            <div className="logoff">
                <FiLogOut 
                size={24}
                color="red"
                cursor="pointer"
                onClick={confirmarSaida}
                />
            </div>
        </div>
    )
}