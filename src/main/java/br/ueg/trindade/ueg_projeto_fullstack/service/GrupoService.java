package br.ueg.trindade.ueg_projeto_fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ueg.trindade.ueg_projeto_fullstack.model.Grupo;
import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.repository.GrupoRepository;
import br.ueg.trindade.ueg_projeto_fullstack.repository.UsuarioRepository;

@Service 
public class GrupoService {
    @Autowired 
    private GrupoRepository grupoRepository;

    //post
    public Grupo criar(Grupo grupo){

    //regra de negocio :nome do grupo nao pode ser vazio
        if(grupo.getNome()== null|| grupo.getNome().isBlank()){

            throw new RuntimeException("Campo nome está vazio!");
        }

        return grupoRepository.save(grupo);
        
    }

    //get all

    public List<Grupo> listarTodos(){
        return grupoRepository.findAll();
    }
    // get by id

    public Grupo buscarPorId(Long id){
        return grupoRepository.findById(id).orElseThrow(()-> new RuntimeException("grupo nao encontrado"));
    }
    
    //put atualizar
    
    public Grupo atualizar(Long id,Grupo grupoAtualizado){
        Grupo grupo = buscarPorId(id);

        grupo.setDescricao(grupoAtualizado.getDescricao());
        grupo.setNome(grupoAtualizado.getNome());
        grupo.setDatacriacao(grupoAtualizado.getDatacriacao());
        if (grupoAtualizado.getIdcriador() != null) {
            grupo.setIdcriador(grupoAtualizado.getIdcriador());
        }

        return grupoRepository.save(grupo);
    }

    //del

    public void deletar(Long id){
        grupoRepository.deleteById(id);
    }

}
