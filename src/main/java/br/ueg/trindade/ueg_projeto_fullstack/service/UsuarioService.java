package br.ueg.trindade.ueg_projeto_fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.repository.UsuarioRepository;

@Service 
public class UsuarioService {

    @Autowired 
    private UsuarioRepository usuarioRepository;
    //post
    public Usuarios criar(Usuarios usuario){

        if(usuario.getNome()==null||usuario.getNome().isBlank()){
            throw new RuntimeException("Nome não preenchido");

        }
        return usuarioRepository.save(usuario);

    }

    //get
    public List<Usuarios> listarTodos(){

        return usuarioRepository.findAll();
    }

    //listar por id
    public Usuarios buscarPorId(Long id){
        return usuarioRepository.findById(id)
        .orElseThrow(()-> new RuntimeException("usuario não encontrado"));
    }

    //atualizar
    public Usuarios atualizar(Long id,Usuarios usuarioAtualizado){
        Usuarios usuario = buscarPorId(id);
        usuario.setEmail(usuarioAtualizado.getEmail());
        usuario.setNome(usuarioAtualizado.getNome());
        usuario.setUsername(usuarioAtualizado.getUsername());
        return usuarioRepository.save(usuario);
    }

    //deletar
    public void deletar(Long id){

        usuarioRepository.deleteById(id);
    }
}
