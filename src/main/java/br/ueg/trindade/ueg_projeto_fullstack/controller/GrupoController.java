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

import br.ueg.trindade.ueg_projeto_fullstack.model.Grupo;
import br.ueg.trindade.ueg_projeto_fullstack.repository.GrupoRepository;
import br.ueg.trindade.ueg_projeto_fullstack.service.GrupoService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController 
@RequestMapping("/grupo")

public class GrupoController {

    @Autowired 
    private GrupoService grupoService;


    @GetMapping

    public List<Grupo> getAllGrupos(){
        return grupoService.listarTodos();
    }


    @GetMapping("/{id}")
    public Grupo getGruposById(@PathVariable Long id){
        return  grupoService.buscarPorId(id);
    }

    @PostMapping
    public Grupo createGrupo(@RequestBody Grupo grupo){

        return grupoService.criar(grupo);
    }

    @PutMapping("/{id}")
    public Grupo updateGrupo(@PathVariable Long id, @RequestBody Grupo dadosGrupo) {
       return grupoService.atualizar(id, dadosGrupo);
    }

    @DeleteMapping("/{id}")
    public void deleteGrupo(@PathVariable Long id){
        grupoService.deletar(id);
    }


}
