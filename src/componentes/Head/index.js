import React from "react";
import {FiFilePlus,FiLogOut} from "react-icons/fi"
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

export default function Head({title}){
    const history = useHistory();
    const logoff=()=>{
        window.location.href="/";
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

            <div className="title"><h2>{title}</h2></div>
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