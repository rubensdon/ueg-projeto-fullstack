package br.ueg.trindade.ueg_projeto_fullstack;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Api {

    @GetMapping("/usuarios")
    public List<Usuarios> getAllUsuariosWithClass() {
        List<Usuarios> users = new ArrayList<>();
        users.add(new Usuarios("João", "joao123", "senha123", "joao@example.com"));
        users.add(new Usuarios("Maria", "maria456", "senha456", "maria@example.com"));
        return users;
    }

    @GetMapping("/permissoes")

    public List<Permissao> getAllpermissoes(){

        List<Permissao> permissoes = new ArrayList<>();
        permissoes.add(new Permissao(2L,"ADMIN","Acesso total ao sitema"));
        permissoes.add(new Permissao(1L,"USUARIO","Acesso padrão do usuario"));
            return permissoes;


    }




}
