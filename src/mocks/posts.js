const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            name: 'Rafael',
            role: 'Gerente'
        },
        content: [
            { type: 'paragraph', content: 'Fala Marquinhos 👋 Acabei de conversar com o Chefe e vamos te dar um aumento.'},
            { type: 'paragraph', content: 'O projeto que fez no treinamento ficou lindo, parabéns. Você é um excelente profissional.'},
            { type: 'paragraph', content: 'Continue assim 🚀 👉 Marcos Bloguer'},
            { type: 'link', content: '#goKangu'},
            { type: 'link', content: '#marcosBloguer'},
            { type: 'link', content: '#aumento'},

        ],
        publishedAt: new Date('2022-11-25 14:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
            name: 'Felipe Consalter',
            role: 'Fullstack'
        },
        content: [
            { type: 'paragraph', content: 'Fala Mestre 👋 que dia virá aqui em casa pra gente matar um boi e comer uma costela fresca?'},
            { type: 'link', content: '#boraprosul'},

        ],
        publishedAt: new Date('2022-11-25 14:30:00'),
    }
];