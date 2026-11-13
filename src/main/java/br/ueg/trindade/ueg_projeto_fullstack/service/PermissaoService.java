package br.ueg.trindade.ueg_projeto_fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ueg.trindade.ueg_projeto_fullstack.model.Permissao;
import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.repository.PermissaoRepository;
import org.springframework.transaction.annotation.Transactional;
@Service 
public class PermissaoService{

    
    @Autowired 
    private PermissaoRepository permissaoRepository;

    //post
    public Permissao create(Permissao permissao){

        return  permissaoRepository.save(permissao);

    }

    //
    @Transactional(readOnly = true)
        public List<Permissao> listar() {
        return permissaoRepository.findAll();
}

    //list(ge all)
    public List<Permissao> listarTodos(){
        return permissaoRepository.findAll();
    }

    //get
    public Permissao buscarPorId(Long id){

        return permissaoRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("grupo não encontrado"));
    }
    //atualizar

    public Permissao atualizar(Long id,Permissao permissaoAtualizada){
        Permissao permissao = buscarPorId(id);

        permissao.setDescricao(permissaoAtualizada.getDescricao());
        permissao.setNome(permissaoAtualizada.getNome());

        return permissaoRepository.save(permissao);
    }

    //delete

    public void deletar(Long id){
        permissaoRepository.deleteById(id);

    }


}