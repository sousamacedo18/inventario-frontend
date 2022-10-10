import React,{useState,useEffect} from "react";
import '../../global.css';
import './styles.css';
import logo from '../../assets/images/logo2.png';
import { useHistory } from 'react-router-dom';
import Usuario from '../../server/usuario.json';
import api from "../../server/api";

export default function Logon(){
    const history =useHistory();
    const [id,setId] = useState(0);
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('max@gmail.com');
    const [senha,setSenha] = useState('123');
    const [msg,setMsg] = useState("");
 
    const dados=[
        {
           email:email,
            nome:nome,
              id:id
        }

    ]

 function logar(e){
    e.preventDefault();
  
    
        let usu;
        if(email==="" || senha===""){
            alert("Campos vazios, verifique!");
        }else{
            //  usu=Usuario.filter(function(value){
            //     return value.email==email && value.senha==senha
            // })
       
                // if(usu.length>0){
               
                //     setNome(usu[0].nomeusuario);
                //     setId(usu[0].id);
                  
                    // localStorage.setItem("usuario",JSON.stringify(dados))
                    // const value=localStorage.getItem("usuario");
                    // const json=JSON.parse(value);
                    // console.log(value);
                   
                    api.post(`/usuario/logar`,{email:email,senha:senha})
                    .then(res => {
                      if(res.status==200){
                        let resultado=res.data.usuario;
                            if(resultado.length>0){
                                //criei uma variavel do tipo JSON para
                                //armazenar dados na sessionStorege
                               
                                let session=
                                {
                                    nome:resultado[0].nome,
                                    email:resultado[0].email,
                                    id:resultado[0].id
                                }
                               
                                //aqui setamos a chave na sessionStorage
                                sessionStorage.setItem("session",JSON.stringify(session))

                                window.location.href="/dashboard"
                            }else{
                                sessionStorage.clear();
                                alert("Digite Email ou Senha validos")
                            }
                
                      }else{
                          console.log("houve um erro na requisição")
                      }
          
                    })  
                    .catch(function (error) {
                      console.log(error);
                    });
                 
                   
    

            // }else{
            //     alert("Dados não encontrados!")
            // }
       

        }
        
    }


    return(
        <div className="logon-container">

            <section className="form">
                    <form onSubmit={logar}>
                        <h1>Faça seu login</h1>
                        <input placeholder="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        />
                        <input placeholder="senha" type="password"
                        value={senha}
                        onChange={e=>setSenha(e.target.value)}
                        />
                        <h3>{msg}</h3>
                        <button className="button_login" type="submit">
                            Entrar
                        </button>
                        <a href="#">Cadastrar Nova Empresa</a>
                    </form>

                
            </section>
            <section className="div-imagem">
                    <img src={logo} alt="logo" width={150} />
                    <h1>Sistema de Inventário</h1>
                    <h1>Aqui está o melhor professor do SENAI, humilde também</h1>
            </section>
   



        </div>

    )
}