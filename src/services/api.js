export function loadLists() {
  return [
    {
      title: "Tarefas Já",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Apresentação Projeto",
          labels: ["#7159c1"],
          user: "images/fotocris.jpg",
        },
        {
          id: 2,
          content: "Criação do Logotipo Max3",
          labels: ["#7159c1"],
          user: "images/fotocris.jpg",
        },
        {
          id: 3,
          content: "Inserir API no Projeto",
          labels: ["#7159c1"],
          user: "images/fotocris.jpg",
        },
        {
          id: 4,
          content: "Aula online",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
        {
          id: 5,
          content: "Mostrar todo projeto integrante novo",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
      ],
    },
    {
      title: "Fazendo",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Projeto Integrador",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
      ],
    },
    {
      title: "Pausado",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Corrigir campo de Login",
          labels: ["#7159c1"],
          user: "images/fotocris.jpg",
        },
        {
          id: 8,
          content: "Criar dois campos de Rotas",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
        {
          id: 9,
          content: "Testar responsivo",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
      ],
    },
    {
      title: "Concluído",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "API",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
        {
          id: 11,
          content: "Layout do NavBar",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
        {
          id: 12,
          content: "Briefing, Mer",
          labels: ["#54e1f7"],
          user: "images/fotocris.jpg",
        },
      ],
    },
  ];
}
