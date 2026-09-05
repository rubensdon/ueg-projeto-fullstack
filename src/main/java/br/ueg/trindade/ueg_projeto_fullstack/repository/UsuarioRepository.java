package br.ueg.trindade.ueg_projeto_fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ueg.trindade.ueg_projeto_fullstack.model.Usuarios;

public interface UsuarioRepository extends JpaRepository<Usuarios,Long >{
    
}
