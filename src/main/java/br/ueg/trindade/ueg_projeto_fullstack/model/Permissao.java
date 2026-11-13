package br.ueg.trindade.ueg_projeto_fullstack.model;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.ManyToAny;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity 
public class Permissao {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;

    @ManyToMany(mappedBy = "permissao")
    @JsonIgnore
    private Set<Usuarios> usuarios = new HashSet<>();


    public Permissao(){

        
    }
    public Permissao(Long id, String nome, String descricao, Set<Usuarios> usuarios) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.usuarios = usuarios;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public Set<Usuarios> getUsuarios() {
        return usuarios;
    }
    public void setUsuarios(Set<Usuarios> usuarios) {
        this.usuarios = usuarios;
    }


    
    
}
