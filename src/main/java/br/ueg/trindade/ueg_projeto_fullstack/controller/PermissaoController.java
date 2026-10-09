package br.ueg.trindade.ueg_projeto_fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import br.ueg.trindade.ueg_projeto_fullstack.model.Permissao;
import br.ueg.trindade.ueg_projeto_fullstack.repository.PermissaoRepository;
import br.ueg.trindade.ueg_projeto_fullstack.service.PermissaoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/permissoes")

public class PermissaoController {
    @Autowired
    private PermissaoService permissaoService;

    @GetMapping("/{id}")
    public Permissao getPermissaoById(@PathVariable Long id){
        return permissaoService.buscarPorId(id);
    }

    @GetMapping
    public List<Permissao> getAllPermissoes(){
        return permissaoService.listarTodos();
    }

    @PostMapping
    public Permissao createPermissao(@RequestBody Permissao permissao){
        return permissaoService.create(permissao);
    }

    @PutMapping("/{id}")
    public Permissao updatePermissao(@PathVariable Long id, @RequestBody Permissao dadosPermissao) {
       return  permissaoService.atualizar(id, dadosPermissao);
    }

    @DeleteMapping("/{id}")
    public void deletePermissao(@PathVariable Long id){
        permissaoService.deletar(id);
    }
}
