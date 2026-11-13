package br.ueg.trindade.ueg_projeto_fullstack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.ueg.trindade.ueg_projeto_fullstack.controller.AuthController.LoginResposta;
import br.ueg.trindade.ueg_projeto_fullstack.model.Permissao;
import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.repository.UsuarioRepository;
import br.ueg.trindade.ueg_projeto_fullstack.security.JwtUtil;

@Service
public class AuthService {

    @Autowired private UsuarioRepository usuarioRepository;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private JwtUtil jwtUtil;

    public LoginResposta login(String username, String senha) {
        Usuarios usuario = usuarioRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Credenciais inválidas"));

        if (!passwordEncoder.matches(senha, usuario.getSenha())) {
            throw new RuntimeException("Credenciais inválidas");
        }

        List<String> permissoes = usuario.getPermissao().stream()
                .map(Permissao::getNome).toList();

        return new LoginResposta(jwtUtil.gerarToken(usuario), usuario.getNome(), permissoes);
    }
}
