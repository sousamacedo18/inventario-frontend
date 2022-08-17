import React,{useState,useEffect} from "react";
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";
import { FiEdit,FiTrash,FiDelete, FiFilePlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Usuarios from '../../server/usuario.json';


export default function Editarpatrimonio(){
    const {idpatrimonio} =useParams();
    const [nome,setNome] = useState('');
    const [msg,setMsg] = useState("");

    
    useEffect(()=>{
       mostrarDados();
    },[])

            function mostrarDados(){
                let listaPat =JSON.parse(localStorage.getItem("cd-patrimonio"));
                    listaPat.
                        filter(value => value.id ==idpatrimonio).
                        map(value => {
                            setNome(value.nome);
                
                }
            
                    );
                

            }


    function salvardados(e){
        e.preventDefault();
 
                                let index=0;
                            
                                if(nome.length<=3){
                                    setMsg("campo nome precisa ter mais de 3 letras");
                                    index++;

                                }
            if(index===0){
                let listaPat = JSON.parse(localStorage.getItem("cd-patrimonio"));
                listaPat.map((item)=>{
                    if(item.id==idpatrimonio){
                        item.nome=nome;
                    }
                   

                })
                localStorage.setItem("cd-patrimonio",JSON.stringify(listaPat))
                alert("Dados Salvos com sucesso!")
                window.location.href="/listapatrimonio";
            }
    
}
    return(
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                 <Head title ="Editar Patrimônio" />
                 <section className="form-cadastro">
                    <form onSubmit={salvardados} >
                    
                        <label>Nome</label>
                        
                        <input placeholder="Nome"
                        value={nome}
                        onChange={e=>setNome(e.target.value)}
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