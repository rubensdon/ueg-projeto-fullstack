package br.ueg.trindade.ueg_projeto_fullstack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ueg.trindade.ueg_projeto_fullstack.model.Grupo;
import br.ueg.trindade.ueg_projeto_fullstack.repository.GrupoRepository;

@RestController 
@RequestMapping("/grupo")
public class GrupoController {

    @Autowired 
    private GrupoRepository grupoRepository;


    @GetMapping("/grupo")

    public List<Grupo> getAllGrupos(){
        return  grupoRepository.findAll();
    }


    @GetMapping("/grupo/{id}")
    public Grupo getGruposById(@PathVariable Long id){
        return  grupoRepository.findById(id)
        .orElseThrow(()->new RuntimeException("Grupo não encontrado"));
    }

    @PostMapping("/grupo")
    public Grupo createGrupo(@RequestBody Grupo grupo){

        return grupoRepository.save(grupo);
    }

    @DeleteMapping("/grupo")
    public void deleteGrupo(@PathVariable Long id){
        grupoRepository.deleteById(id);
    }


}
