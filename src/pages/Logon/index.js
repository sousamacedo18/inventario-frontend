import React,{useState,useEffect} from "react";
import '../../global.css';
import './styles.css';
import logo from '../../assets/images/logo2.png';
import { useHistory } from 'react-router-dom';
import Usuario from '../../server/usuario.json';

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
    
        let usu;
        if(email==="" || senha===""){
            alert("Campos vazios, verifique!");
        }else{
             usu=Usuario.filter(function(value){
                return value.email==email && value.senha==senha
            })
       
                if(usu.length>0){
               
                    setNome(usu[0].nomeusuario);
                    setId(usu[0].id);
                  
                    localStorage.setItem("usuario",JSON.stringify(dados))
                    const value=localStorage.getItem("usuario");
                    const json=JSON.parse(value);
                    console.log(value);
                 
                   history.push('/dashboard');
    

            }else{
                alert("Dados não encontrados!")
            }
       

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
            </section>
   



        </div>

    )
}