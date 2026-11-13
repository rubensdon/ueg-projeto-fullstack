package br.ueg.trindade.ueg_projeto_fullstack.config;

import java.util.HashSet;
import java.util.Set;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import br.ueg.trindade.ueg_projeto_fullstack.model.Permissao;
import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.repository.PermissaoRepository;
import br.ueg.trindade.ueg_projeto_fullstack.repository.UsuarioRepository;

@Configuration
public class ConfiguracaoInicial {

    @Bean
    CommandLineRunner carregarDados(UsuarioRepository usuarios,
            PermissaoRepository permissoes, PasswordEncoder encoder) {
        return args -> {
            // O banco H2 é em arquivo: sem este teste o seed duplicaria a cada reinício.
            if (usuarios.count() > 0) {
                return;
            }

            Permissao admin = permissoes.save(new Permissao(null, "ADMIN", "Acesso total", new HashSet<>()));
            Permissao user = permissoes.save(new Permissao(null, "USER", "Acesso comum", new HashSet<>()));

            usuarios.save(new Usuarios(null, "Admin", "admin", encoder.encode("admin123"),
                    "admin@ueg.br", new HashSet<>(Set.of(admin, user))));

            usuarios.save(new Usuarios(null, "João", "joao", encoder.encode("joao123"),
                    "joao@ueg.br", new HashSet<>(Set.of(user))));
        };
    }
}
