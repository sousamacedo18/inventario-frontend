import React, { useState,useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";
import Usuarios from "../../server/usuario.json";
import api from "../../server/api";
import { FiEdit,FiTrash,FiDelete, FiFilePlus } from "react-icons/fi";



export default function Listausuarios(){
    const [dados,setDados] = useState([]);
    useEffect(()=>{
       mostrarlista();
    },[])
    function editar(i){
     window.location.href=`/editarusuario/${i}`
    }
    function mostrarlista(){
        
        // let cadastros=JSON.parse(localStorage.getItem("cd-usuarios")||"[]");
        // setDados(cadastros);

        // fetch('http://10.1.2.168:5000/usuario')
        //     .then((response) => response.json())
        //     .then((data) => setDados(data.usuario));
            //.then((data) => console.log(data));
        
        api.get('/usuario')
          .then(res => {
            if(res.status==200){
                setDados(res.data.usuario);
                console.log("Status"+res.status);
                console.log(res.data.mensagem);
            }else{
                console.log("houve um erro na requisição")
            }

          })  
          .catch(function (error) {
            console.log(error);
          });
    }
    function excluir(i,nome){
        confirmAlert({
            title: 'Excluir Usuário',
            message: `Deseja realmente excluir o cadastro de ${nome}`,
            buttons: [
              {
                label: 'Sim',
                onClick: () => {
                    // let dadosnovos = [];
                    // dadosnovos=dados.filter(item =>item.id!==i);
                    // setDados(dadosnovos);
                    // localStorage.setItem('cd-usuarios',JSON.stringify(dadosnovos));
                    api.delete(`/usuario/${i}`)
                    .then(res => {});
                    mostrarlista();
                    alert("Dados Deletados com Sucesso!");


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
                 <Head title ="Lista de Usuários" />
                    <div className="button_new">
                  
                        <a href="/cadastrousuario">
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
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                     
                            {
                                dados.map((usu)=>{
                                    return(
                                    <tr key={usu.toString()}>
                                        <td>{usu.id}</td>
                                        <td>{usu.nome}</td>
                                        <td>{usu.email}</td>
                                        <td>
                                            <FiEdit
                                            color="blue"
                                            size={18}
                                            cursor="pointer"
                                            onClick={(e)=>editar(usu.id)}
                                            />
                                            
                                        </td>
                                        <td>
                                            <FiDelete
                                            color="red"
                                            size={18}
                                            onClick={(e)=>excluir(usu.id,usu.nomeusuario)}
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
                                <th>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </table>
                    }
               </div>
                    
        </div>

)
}