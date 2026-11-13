package br.ueg.trindade.ueg_projeto_fullstack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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

import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;
import br.ueg.trindade.ueg_projeto_fullstack.service.UsuarioService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/usuarios")
@PreAuthorize("hasRole('ADMIN')")

public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;


     // GET /api/usuarios/{id}/permissoes - permissões atuais do usuário
    @GetMapping("/{id}/permissoes")
    public Usuarios getPermissoes(@PathVariable Long id) {
        return usuarioService.buscarPorId(id);
    }

    // PUT /api/usuarios/{id}/permissoes - salvar nova seleção (ex.: [1, 2])
    @PutMapping("/{id}/permissoes")
    public Usuarios atualizarPermissoes(
            @PathVariable Long id,
            @RequestBody List<Long> idsPermissoes) {
        return usuarioService.atribuirPermissoes(id, idsPermissoes);
    }

    @GetMapping
    public List<Usuarios> getAllUsuarios() {
        return usuarioService.listarTodos();
    }

    @PutMapping("/{id}")
    public Usuarios updateUsuario(@PathVariable Long id, @RequestBody Usuarios usuarioAtualizado) {
       return  usuarioService.atualizar(id, usuarioAtualizado);
    }

    @PostMapping
    public Usuarios createUsuario(@RequestBody Usuarios usuario) {
        return usuarioService.criar(usuario);
    }

    @GetMapping("/{id}")
    public Usuarios getUsuariosById(@PathVariable Long id) {

        return usuarioService.buscarPorId(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.deletar(id);
    }

}
