package br.ueg.trindade.ueg_projeto_fullstack.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.repository.UsuarioRepository;

@RestController
@RequestMapping("/api")
public class Api {
    @Autowired 
    private UsuarioRepository usuarioRepository;

    @GetMapping("/usuarios")
    public List<Usuarios> getAllUsuarios() {
        return usuarioRepository.findAll();
    }


    @PostMapping("/usuarios")
    public Usuarios createUsuario(@RequestBody Usuarios usuario){
        return usuarioRepository.save(usuario);
    }

    @GetMapping ("/usuarios/{id}")
    public Usuarios getUsuariosById(@PathVariable Long id){

        return usuarioRepository.findById(id)
                .orElseThrow(()->new RuntimeException("usuario não encontrado"));
    }


    @DeleteMapping("/usuarios/{id}")
    public void deleteUsuario(@PathVariable Long id) {
    usuarioRepository.deleteById(id);
    }

}
