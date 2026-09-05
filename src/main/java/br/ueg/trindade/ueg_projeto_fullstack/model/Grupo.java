package br.ueg.trindade.ueg_projeto_fullstack.model;

import com.fasterxml.jackson.annotation.JsonGetter;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity 
public class Grupo {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    public String nome;
    public String descricao;
    public String datacriacao;
    public Long id_criador;

    public Grupo() {
    }

    public Grupo(String nome, String descricao, String datacriacao, Long id_criador) {
        this.nome = nome;
        this.descricao = descricao;
        this.datacriacao = datacriacao;
        this.id_criador = id_criador;
    }

    public Long getId(){
        return id;
    }
    
    public void setId(long id){
        this.id = id;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
            this.nome= nome;


    }

    public String getDescricao(){
        return descricao;
    }

    public void setDescricao(String descricao){
            this.descricao = descricao;


    }

    
    public String getDatacriacao(){
        return datacriacao;
    }

    public void setDatacriacao(String datacriacao){
            this.datacriacao = datacriacao;


    }

    public Long getIdcriador(){
        return id_criador;
    }
    public void setIdcriador(long id_criador){
        this.id_criador = id_criador;
    }

}
