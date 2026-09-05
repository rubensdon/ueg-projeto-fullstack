package br.ueg.trindade.ueg_projeto_fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ueg.trindade.ueg_projeto_fullstack.model.Permissao;
import br.ueg.trindade.ueg_projeto_fullstack.repository.PermissaoRepository;

@RestController 
@RequestMapping("/permissoes") 
public class PermissaoController {
    @Autowired
    private PermissaoRepository permissaoRepository;

    @GetMapping("/permissoes/{id}")
    public Permissao getPermissaoById(@PathVariable Long id){
        return permissaoRepository.findById(id)
                .orElseThrow(()->new RuntimeException("usuario não encontrado"));
    }



    @PostMapping("/permissoes")
    public Permissao createPermissao(@RequestBody Permissao permissao){
        return permissaoRepository.save(permissao);



    }



}
