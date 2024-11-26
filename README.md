<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <h1>Projeto: fire_app</h1>
    </header>
    <main>
        <section>
            <h2>Descrição</h2>
            <p>
                O <strong>fire_app</strong> é um projeto desenvolvido em React, com o objetivo de estudar e explorar as funcionalidades do Firebase, fornecido pelo Google. O foco principal foi aprender diferentes formas de implementar operações CRUD e autenticação usando as bibliotecas do Firebase.
            </p>
            <p>
                Este projeto não utiliza nenhum estilo CSS, sendo totalmente funcional e minimalista para fins de estudo.
            </p>
        </section>
      <section>
            <h2>Funcionalidades Estudadas</h2>
            <h3>CRUD com Firestore</h3>
            <ul>
                <li><strong>doc:</strong> Acessa um documento específico em uma coleção.</li>
                <li><strong>collection:</strong> Acessa uma coleção de documentos no Firestore.</li>
                <li><strong>addDoc:</strong> Adiciona um novo documento a uma coleção.</li>
                <li><strong>getDoc:</strong> Recupera dados de um documento específico.</li>
                <li><strong>getDocs:</strong> Recupera todos os documentos de uma coleção.</li>
                <li><strong>updateDoc:</strong> Atualiza campos específicos de um documento.</li>
                <li><strong>deleteDoc:</strong> Exclui um documento do Firestore.</li>
                <li><strong>onSnapshot:</strong> Escuta mudanças em tempo real em documentos ou coleções.</li>
            </ul>
        <h3>Autenticação com Firebase Auth</h3>
            <ul>
                <li><strong>createUserWithEmailAndPassword:</strong> Cria um novo usuário com e-mail e senha.</li>
                <li><strong>signInWithEmailAndPassword:</strong> Realiza o login de um usuário com e-mail e senha.</li>
                <li><strong>signOut:</strong> Faz o logout do usuário autenticado.</li>
                <li><strong>onAuthStateChanged:</strong> Escuta mudanças no estado de autenticação em tempo real.</li>
            </ul>
        </section>
      <section>
            <h2>Motivação</h2>
            <p>
                Este projeto foi criado para aprofundar o conhecimento no uso do Firebase em aplicações React, abordando não apenas a criação e manipulação de dados no Firestore, mas também o gerenciamento de usuários e sessões usando o Firebase Auth.
            </p>
        </section>
      <section>
            <h2>Como executar o projeto</h2>
            <ol>
                <li>Clone o repositório para sua máquina.</li>
                <li>Instale as dependências usando o comando <code>npm install</code>.</li>
                <li>Configure as credenciais do Firebase no arquivo <code>firebase-config.js</code>.</li>
                <li>Inicie o projeto com o comando <code>npm start</code>.</li>
            </ol>
        </section>
        <footer>
            <p>Feito para fins de estudo do Firebase.</p>
        </footer>
    </main>
        
</body>
</html>

