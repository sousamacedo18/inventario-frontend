import React,{useState} from "react";
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";



export default function Cadastrosetor(){
const [nome,setNome] = useState();
const [msg,setMsg] = useState();



    function salvardados(e){
        e.preventDefault();

                                let index=0;
                            
                                if(nome.length<=3){
                                    setMsg("campo nome  precisa ter mais de 3 letras");
                                    index++;

                                }
                                
            if(index===0){
               
                let listaSetor = JSON.parse(localStorage.getItem("cd-setor")||"[]")
            
                listaSetor.push(
                    {
                        id:Date.now().toString(36)+Math.floor(Math.pow(10,12)+Math.random()*9*Math.pow(10,12)).toString(36),
                        nome:nome
                    }
                )
                localStorage.setItem("cd-setor",JSON.stringify(listaSetor));
                alert("Cadastro Salvo com Sucesso!!!!");
                window.location.href="/listasetor";
            }  
    
}
    return(
        <div className="dashboard-container">
            <Menu/>
            <div className="principal">
                 <Head title ="Cadastro de Setor" />
                 <section className="form-cadastro">
                    <form onSubmit={salvardados}>
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