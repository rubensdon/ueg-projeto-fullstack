package br.ueg.trindade.ueg_projeto_fullstack;

import com.fasterxml.jackson.annotation.JsonGetter;

public class Grupo {

    public Long id;
    public String nome;
    public String descricao;
    public String datacriacao;
    public Long id_criador;

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
