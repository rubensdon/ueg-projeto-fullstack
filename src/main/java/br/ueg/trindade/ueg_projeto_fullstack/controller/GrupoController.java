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

import br.ueg.trindade.ueg_projeto_fullstack.model.Grupo;
import br.ueg.trindade.ueg_projeto_fullstack.repository.GrupoRepository;

@RestController 
@RequestMapping("/grupo")
@CrossOrigin(origins = "http://localhost:5173")
public class GrupoController {

    @Autowired 
    private GrupoRepository grupoRepository;


    @GetMapping("/")

    public List<Grupo> getAllGrupos(){
        return  grupoRepository.findAll();
    }


    @GetMapping("/{id}")
    public Grupo getGruposById(@PathVariable Long id){
        return  grupoRepository.findById(id)
        .orElseThrow(()->new RuntimeException("Grupo não encontrado"));
    }

    @PostMapping("/")
    public Grupo createGrupo(@RequestBody Grupo grupo){

        return grupoRepository.save(grupo);
    }

    @PutMapping("/{id}")
    public Grupo updateGrupo(@PathVariable Long id, @RequestBody Grupo dadosGrupo) {
        Grupo grupo = grupoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Grupo não encontrado"));

        grupo.setNome(dadosGrupo.getNome());
        grupo.setDescricao(dadosGrupo.getDescricao());
        grupo.setDatacriacao(dadosGrupo.getDatacriacao());
        grupo.setIdcriador(dadosGrupo.getIdcriador());

        return grupoRepository.save(grupo);
    }

    @DeleteMapping("/{id}")
    public void deleteGrupo(@PathVariable Long id){
        grupoRepository.deleteById(id);
    }


}
