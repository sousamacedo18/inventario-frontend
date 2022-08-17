import React,{useState,useEffect} from "react";
import Menu from "../../componentes/Menu";
import Head from "../../componentes/Head";
import { FiEdit,FiTrash,FiDelete, FiFilePlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Usuarios from '../../server/usuario.json';


export default function Editarusuario(){
    const {idusuario} =useParams();
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [confsenha,setConfSenha] = useState('');
    const [msg,setMsg]=useState('');
    const [valida,setValida] = useState(false);
    const [usu,setUsu] = useState(false);
    
    useEffect(()=>{
       mostrarDados();
    },[])

            function mostrarDados(){
                let listaUser =JSON.parse(localStorage.getItem("cd-usuarios"));
                    listaUser.
                        filter(value => value.id ==idusuario).
                        map(value => {
                            setNome(value.nome);
                            setEmail(value.email);
                            setSenha(value.senha);
                            setConfSenha(value.senha);
                
                }
            
                    );
                

            }

    function validarSenha(){
       
        if(senha!=="")
        {
                if(senha!==confsenha){
               
                    setValida(false);
                    setMsg("Senhas não conferem!");
                }else{
                    setValida(true);
                    setMsg("Senhas iguais!");
                }
        }else{
                   setValida(false);
                   setMsg("Campo senha está vazio");
                   setTimeout(() => {
                    setMsg('');
                   }, 4000);
        }
    }
    function salvardados(e){
        e.preventDefault();
        validarSenha();
        if(valida===false){
            setMsg("Senhas não Conferem!!!");
        }else{

                                let index=0;
                            
                                if(nome.length<=3){
                                    setMsg("campo nome precisa ter mais de 3 letras");
                                    index++;

                                }else if(email===""){
                                    setMsg("campo email está vazio");
                                    index++;
                                }
            if(index===0){
                let listaUser = JSON.parse(localStorage.getItem("cd-usuarios"));
                listaUser.map((item)=>{
                    if(item.id==idusuario){
                        item.nome=nome;
                        item.email=email;
                        item.senha=senha;
                    }
                   

                })
                localStorage.setItem("cd-usuarios",JSON.stringify(listaUser))
                alert("Dados Salvos com sucesso!")
                window.location.href="/listausuario";
            }
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
                        <label>Email</label>
                        <input placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        />
                         <label>Senha</label>
                        <input placeholder="senha" type="text"
                        value={senha}
                        onChange={e=>setSenha(e.target.value)}
                        />
                         <label>Confirmar Senha</label>
                        <input placeholder="confirmar senha" type="text"
                        value={confsenha}
                        onKeyUp={validarSenha}
                        onChange={e=>setConfSenha(e.target.value)}
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