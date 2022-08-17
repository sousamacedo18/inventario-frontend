import React,{useState,useEffect} from "react";
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";
import { FiEdit,FiTrash,FiDelete, FiFilePlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Usuarios from '../../server/usuario.json';


export default function Editarempresa(){
    const {idempresa} =useParams();
    const [nome,setNome] = useState('');
    const [responsavel,setResponsavel] = useState('');
    const [msg,setMsg] = useState("");

    
    useEffect(()=>{
       mostrarDados();
    },[])

            function mostrarDados(){
                let listaEmp =JSON.parse(localStorage.getItem("cd-empresa"));
                    listaEmp.
                        filter(value => value.id ==idempresa).
                        map(value => {
                            setNome(value.nome);
                            setResponsavel(value.responsavel);
                
                }
            
                    );
                

            }


    function salvardados(e){
        e.preventDefault();
 
                                let index=0;
                            
                                if(nome.length<=3){
                                    setMsg("campo nome precisa ter mais de 3 letras");
                                    index++;

                                }else if(responsavel===""){
                                    setMsg("campo responsavel está vazio");
                                    index++;
                                }
            if(index===0){
                let listaEmp = JSON.parse(localStorage.getItem("cd-empresa"));
                listaEmp.map((item)=>{
                    if(item.id==idempresa){
                        item.nome=nome;
                        item.responsavel=responsavel;
                    }
                   

                })
                localStorage.setItem("cd-empresa",JSON.stringify(listaEmp))
                alert("Dados Salvos com sucesso!")
                window.location.href="/listaempresa";
            }
    
}
    return(
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                 <Head title ="Editar Usuário" />
                 <section className="form-cadastro">
                    <form onSubmit={salvardados} >
                    
                        <label>Nome</label>
                        
                        <input placeholder="Nome"
                        value={nome}
                        onChange={e=>setNome(e.target.value)}
                        />
                        <label>Responsável</label>
                        <input placeholder="Responsável"
                        type="text"
                        value={responsavel}
                        onChange={e=>setResponsavel(e.target.value)}
                        />
                       <p>{msg}</p>
                        <button className="button_save" type="submit">
                            Salvar
                        </button>
 
                     
                    </form>
            </section>
            </div> 
        </div>

)
}