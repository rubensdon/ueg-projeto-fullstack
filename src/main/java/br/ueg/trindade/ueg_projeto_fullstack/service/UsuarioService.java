package br.ueg.trindade.ueg_projeto_fullstack.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.ueg.trindade.ueg_projeto_fullstack.model.Permissao;
import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.repository.PermissaoRepository;
import br.ueg.trindade.ueg_projeto_fullstack.repository.UsuarioRepository;
import jakarta.transaction.Transactional;

@Service 
public class UsuarioService {
    @Autowired 
    private  PermissaoRepository  permissaoRepository;

    @Autowired 
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    //post
    


    /////////////////////
    @Transactional
    public Usuarios atribuirPermissoes(Long usuarioId, List<Long> idsPermissoes) {
        Usuarios usuario = buscarPorId(usuarioId);

        Set<Permissao> permissoes = new HashSet<>(
                permissaoRepository.findAllById(idsPermissoes));

        usuario.setPermissao(permissoes);
        return usuarioRepository.save(usuario);
    }
    ///////////////////////
    public Usuarios criar(Usuarios usuario){

        if(usuario.getNome()==null||usuario.getNome().isBlank()){
            throw new RuntimeException("Nome não preenchido");

        }
        if(usuario.getSenha()==null||usuario.getSenha().isBlank()){
            throw new RuntimeException("Senha não preenchida");
        }
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
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
        // senha em branco na edição mantém a senha atual
        if(usuarioAtualizado.getSenha()!=null&&!usuarioAtualizado.getSenha().isBlank()){
            usuario.setSenha(passwordEncoder.encode(usuarioAtualizado.getSenha()));
        }
        return usuarioRepository.save(usuario);
    }

    //deletar
    public void deletar(Long id){

        usuarioRepository.deleteById(id);
    }
}
