import aluraBooks from "imagen-projetos/aluraBooks.png";
import adivinheNumero from "imagen-projetos/adivinheNumero.png";
import cinetag from "imagen-projetos/cinetag.png";
import geradorDeSenha from "imagen-projetos/geradorDeSenha.png";
import meusAniversarios from "imagen-projetos/meusAniversarios.png";
import word from "imagen-projetos/word.png";
import organo from "imagen-projetos/organo.png";
import rpg from "imagen-projetos/rpg.png";

export const projetos = [
    {
        id: 1,
        urlImagem: aluraBooks, 
        urlGithub: "https://github.com/Hekth/alura-books", 
        titulo: "Alura Books", 
        link: "https://alurabooks-hekth.vercel.app/",
        tag: ["HTML", "CSS"]
    },
    {
        id: 2,
        urlImagem: adivinheNumero, 
        urlGithub: "https://github.com/Hekth/adivinhe-o-numero", 
        titulo: "Adivinhe o número",
        link: "https://secretnumber-hekth.vercel.app",
        tag: ["JAVASCRIPT"]
    },
    {
        id: 3,
        urlImagem: cinetag, 
        urlGithub: "https://github.com/Hekth/Cinetag",
        titulo: "Cinetag",
        link: "https://cinetag-tau-lac.vercel.app/",
        tag: ["REACT"]
    },
    {
        id: 4,
        urlImagem: geradorDeSenha, 
        urlGithub: "https://github.com/Hekth/gerador-de-senha", 
        titulo: "Gerador de Senha",
        link: "https://geradordesenha-hekth.vercel.app/",
        tag: ["JAVASCRIPT"]
    },
    {
        id: 5,
        urlImagem: meusAniversarios, 
        urlGithub: "https://github.com/Hekth/Calend-rio-de-anivers-rios", 
        titulo: "Calendário de Aniversários",
        link: "https://calendariodeaniversarios-hekth.vercel.app/",
        tag: ["JAVASCRIPT"]
    },
    {
        id: 6,
        urlImagem: word, 
        urlGithub: "https://github.com/Hekth/word", 
        titulo: "Word",
        link: "https://word-hekth.vercel.app/",
        tag: ["JAVASCRIPT"]
    },
    {
        id: 7,
        urlImagem: organo, 
        urlGithub: "https://github.com/Hekth/organo", 
        titulo: "Organo",
        link: "https://organo-hekth.vercel.app/",
        tag: ["REACT"]
    },
    {
        id: 8,
        urlImagem: rpg, 
        urlGithub: "https://github.com/Hekth/RPG-Rolagem-de-Dados", 
        titulo: "RPG - Rolagem de dados",
        link: "https://rpg-rolagem-de-dados.vercel.app/",
        tag: ["TYPESCRIPT"]
    }
];

export const tecnologias = ["HTML", "CSS", "JAVASCRIPT", "REACT", "TYPESCRIPT"];