import React,{useEffect, useState} from "react";
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";



export default function Cadastrolotacao(){
  

    const [idusu,setIusu] = useState("");
    const [idemp,setIemp] = useState("");
    const [idpat,setPat] = useState("");
    const [idset,setSet] = useState("");
    const [lotacao,setLotacao] = useState()
    const [empresa,setEmpresa] = useState([]);
    const [patrimonio,setPatrimonio] = useState([]);
    const [setor,setSetor] = useState([]);
    const [usuario,setUsuario] = useState([]);

    const [msg,setMsg]=useState('');
    const [valida,setValida] = useState(false);
     useEffect(()=>{
                montarselects();
     },[])

    function montarselects(){
        let listaUsuarios=JSON.parse(localStorage.getItem("cd-usuarios")||"[]");
        setUsuario(listaUsuarios);      
        let listaEmpresas=JSON.parse(localStorage.getItem("cd-empresa")||"[]");
        setEmpresa(listaEmpresas);      
        let listaSetor=JSON.parse(localStorage.getItem("cd-setor")||"[]");
        setSetor(listaSetor);      
        let listaPatrimonio=JSON.parse(localStorage.getItem("cd-patrimonio")||"[]");
        setPatrimonio(listaPatrimonio);      
    }

    function salvardados(e){
        e.preventDefault();

                                let index=0;
                            
                                if(idemp===0){
                                    setMsg("campo empresa  está vazio");
                                    index++;
                                }else if(idset===0){
                                    setMsg("campo setor  está vazio");
                                    index++;
                                
                                }else if(idusu===0){
                                    setMsg("campo usuário  está vazio");
                                    index++;
                                
                                }else if(idpat===0){
                                    setMsg("campo patrimônio  está vazio");
                                    index++;
                                }
                                
            if(index===0){
               
                let listaLotacao = JSON.parse(localStorage.getItem("cd-lotacao")||"[]")
            
                listaLotacao.push(
                    {
                        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                        idemp:idemp,
                        idpat:idpat,
                        idset:idset,
                        idusu:idusu,
                        lotacao:lotacao
                    }
                )
                localStorage.setItem("cd-lotacao",JSON.stringify(listaLotacao));
                alert("Cadastro Salvo com Sucesso!!!!");
                window.location.href="/listalotacao";
            }  
    
}
    return(
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                 <Head title ="Cadastro de Lotações" />
                 <section className="form-cadastro">
                    <form onSubmit={salvardados}>
                    <label>Empresa {idusu}</label>
                        <select value={idemp} onChange={e=>setIemp(e.target.value)}>
                        {empresa.map((emp)=>{
                                    return(
                                        <option value={emp.id}>{emp.nome}</option>        
                                    )})
                        }  
                        </select >
                        <label>Patrimônio</label>
                        <select  value={idpat} onChange={e=>setPat(e.target.value)} >
                        {patrimonio.map((pat)=>{
                                    return(
                                        <option value={pat.id}>{pat.nome}</option>        
                                    )})
                        }  
                        </select>
                        <label>Setor</label>
                        <select  value={idset} onChange={e=>setSet(e.target.value)}>
                        {setor.map((set)=>{
                                    return(
                                        <option value={set.id}>{set.nome}</option>        
                                    )})
                        }  
                        </select>
                        <label>Responsável</label>
                        <select  value={idusu} onChange={e=>setIusu(e.target.value)}>
                        {usuario.map((usu)=>{
                                    return(
                                        <option value={usu.id}>{usu.nome}</option>        
                                    )})
                        }  
                        </select>

                        <label>Data da Lotação</label>
                        <input 
                        type="date"
                        value={lotacao}
                        onChange={e=>setLotacao(e.target.value)}
                        />
                    <p>{msg}</p>-
                        <button className="button_save" type="submit">
                            Salvar
                        </button>
                     
                    </form>
            </section>
            </div> 
        </div>

)
}