import React, { useState,useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";
import Usuarios from "../../server/usuario.json";
import { FiEdit,FiTrash,FiDelete, FiFilePlus } from "react-icons/fi";



export default function Listapatrimonio(){
    const [dados,setDados] = useState([]);
    useEffect(()=>{
       mostrarlista();
    },[])
    function editar(i){
     window.location.href=`/editarsetor/${i}`
    }
    function mostrarlista(){
        
        let cadastros=JSON.parse(localStorage.getItem("cd-setor")||"[]");
        setDados(cadastros);
  

    }
    function excluir(i,nome){
        confirmAlert({
            title: 'Excluir Setor',
            message: `Deseja realmente excluir o cadastro de ${nome}`,
            buttons: [
              {
                label: 'Sim',
                onClick: () => {
                    let dadosnovos = [];
                    dadosnovos=dados.filter(item =>item.id!==i);
                    setDados(dadosnovos);
                    localStorage.setItem('cd-setor',JSON.stringify(dadosnovos));
                }
              },
              {
                label: 'Não',
                onClick: () => alert('Click No')
              }
            ]
          })
        }
    return(
        <div className="dashboard-container">
           
           
            <Menu/>
              
            <div className="principal">
                 <Head title ="Lista de Patrimônios" />
                    <div className="button_new">
                  
                        <a href="/cadastrosetor">
                                <FiFilePlus 
                                size={24}
                                color="green"
                                cursor="pointer"
        
                        />
                        </a>
               
                    </div>
                    {
                        
                        dados.length>0 ?
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th></th>
                            <th></th>
                        </tr>
                     
                            {
                                dados.map((set)=>{
                                    return(
                                    <tr key={set.toString()}>
                                        <td>{set.id}</td>
                                        <td>{set.nome}</td>
                                        <td>
                                            <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e)=>editar(set.id)}
                                            />
                                            
                                        </td>
                                        <td>
                                            <FiDelete
                                            color="red"
                                            size={18}
                                            onClick={(e)=>excluir(set.id,set.nome)}
                                            cursor="pointer"
                                            />
                                            
                                            </td>
                                    </tr>
                                    )
                                })
                            }
                        
                    </table>
                           :
                            <table>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </table>
                    }
               </div>
                    
        </div>

)
}