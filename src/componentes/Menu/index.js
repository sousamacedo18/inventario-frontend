import React,{useEffect,useState} from "react";
import './styles.css';
import { FiUser, FiTruck } from 'react-icons/fi';
import { MdOutlinePlace } from "react-icons/md";
import { FcConferenceCall } from "react-icons/fc";

export default function Menu(){
   const [nome,setNome]=useState("");

   return(
    <div className="menu">

    <p>Menu</p>
    
    <a href="/listausuario"><FiUser />Usuários</a>
    <a href="/listaempresa"><FiTruck />Empresas</a>
    <a href="/listapatrimonio"> Patrimônio</a>
    <a href="/listalotacao"><FcConferenceCall />Lotação</a>
    <a href="/listasetor"><MdOutlinePlace />Setor</a>
</div>
   );

}