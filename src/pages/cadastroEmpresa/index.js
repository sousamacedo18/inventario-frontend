import React,{useEffect, useState} from "react";
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";



export default function Cadastroempresa(){
  
    const [nome,setNome] = useState("");
    const [responsavel,setResponsavel] = useState("");


    const [empresa,setEmpresa] = useState([]);

    const [msg,setMsg]=useState('');

    function salvardados(e){
        e.preventDefault();

                                let index=0;
                            
                                if(nome.length<=3){
                                    setMsg("campo nome da empresa precisa ter mais de 3 letras");
                                    index++;

                                }else if(responsavel===""){
                                    setMsg("campo responsável está vazio");
                                    index++;
                                }
                                
            if(index===0){
               
                let listaEmpresa = JSON.parse(localStorage.getItem("cd-empresa")||"[]")
            
                listaEmpresa.push(
                    {
                        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                        nome:nome,
                        responsavel:responsavel,
                    }
                )
                localStorage.setItem("cd-empresa",JSON.stringify(listaEmpresa));
                alert("Cadastro Salvo com Sucesso!!!!");
                window.location.href="/listaempresa";
            }  
    
}
    return(
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                 <Head title ="Cadastro de Empresa" />
                 <section className="form-cadastro">
                    <form onSubmit={salvardados}>
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