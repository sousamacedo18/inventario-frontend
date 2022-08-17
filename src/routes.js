import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import Listausuarios from './pages/Listausuarios';
import Listaempresa from './pages/listaEmpresa';
import Listapatrimonio from './pages/listaPatrimonio';
import Listasetor from './pages/listaSetor';
import Listalotacao from './pages/listaLotacao';
import Cadastrousuario from './pages/cadastroUsuario';
import Cadastroempresa from './pages/cadastroEmpresa';
import Cadastropatrimonio from './pages/cadastroPatrimonio';
import Cadastrolotacao from './pages/cadastroLotacao';
import Cadastrosetor from './pages/cadastroSetor';
import Editarusuario from './pages/Editarusuario';
import editarEmpresa from './pages/editarEmpresa';
import editarPatrimonio from './pages/editarPatrimonio';



export default function Routes(){
    return(
            <BrowserRouter>
              <Switch>
                <Route path={"/"} exact component={Logon}/>
                <Route path={"/dashboard"}  component={Dashboard}/>
                <Route path={"/listausuario"}  component={Listausuarios}/>
                <Route path={"/listaempresa"}  component={Listaempresa}/>
                <Route path={"/listapatrimonio"}  component={Listapatrimonio}/>
                <Route path={"/listasetor"}  component={Listasetor}/>
                <Route path={"/listalotacao"}  component={Listalotacao}/>
                <Route path={"/cadastrousuario"}  component={Cadastrousuario}/>
                <Route path={"/cadastrolotacao"}  component={Cadastrolotacao}/>
                <Route path={"/cadastropatrimonio"}  component={Cadastropatrimonio}/>
                <Route path={"/cadastroempresa"}  component={Cadastroempresa}/>
                <Route path={"/cadastrosetor"}  component={Cadastrosetor}/>
                <Route path={"/editarusuario/:idusuario"}  component={Editarusuario}/>
                <Route path={"/editarempresa/:idempresa"}  component={editarEmpresa}/>
                <Route path={"/editapatrimonio/:idpatrimonio"}  component={editarPatrimonio}/>
              </Switch>
            </BrowserRouter>
    )
}