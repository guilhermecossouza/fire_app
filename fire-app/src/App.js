import { useState, useEffect } from 'react';
import { db } from './firebaseConnection';
//import { doc, setDoc } from 'firebase/firestore';
import { 
  doc, 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  onSnapshot

} from 'firebase/firestore';

import './app.css';

export default function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState("");

  useEffect(() => {
    async function loadPosts() {
      // await onSnapshot(collection(db, "posts"), (snapshot) => {
      //   const listaPost = [];
      //   snapshot.forEach((doc) => {
      //     listaPost.push({
      //       id: doc.id,
      //       titulo: doc.data().titulo,
      //       autor: doc.data().autor
      //     });
      //   });
      //   setPosts(listaPost);
      // });
    }

    loadPosts();
  });

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // }).then(() => {
    //   console.log("Post cadastrado com sucesso!");
    // }).catch((error) => {
    //   console.log(`Gerou um erro: ${error}`);
    // });

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor
    }).then(() => {
      console.log("Post cadastrado com sucesso!");
      setTitulo("");
      setAutor("");
    }).catch((error) => {
      console.log(`Gerou um erro: ${error}`);
    });


  }

  async function buscaPost() {
    //busca post fixo
    // await getDoc(doc(db, "posts", "1234567")).then((snapshot) => {
    //   setAutor(snapshot.data().autor);
    //   setTitulo(snapshot.data().titulo);
    // }).catch((error) => {
    //   console.log(`Gerou um erro: ${error}`);
    // });

    await getDocs(collection(db, "posts")).then((snapshots) => {
      const lista = [];
      snapshots.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        });
      });
      setPosts(lista);

    }).catch((error) => {
      console.log(`Gerou um erro: ${error}`);
    })
  }

  async function editarPOst() {
    await updateDoc(doc(db, "posts", idPost), {
      titulo: titulo,
      autor: autor
    }).then(() => {
      console.log("Post editado com sucesso!");
      setIdPost("");
      setTitulo("");
      setAutor("");
    }).catch((error) => {
      console.log(`Gerou um erro: ${error}`);
    });

  }

  async function excluirPost(id) {
    await deleteDoc(doc(db, "posts", id)).then(() => {
      console.log("Post excluido com sucesso!");
    }).catch((error) => {
      console.log(`Gerou um erro: ${error}`);
    })
  }

  return (
    <div className="App">
      <h1>Projeto React com FireBase</h1>
      <div className="container">
        <label>Id do post</label>
        <input
          type="text"
          placeholder="Digite o id do post"
          value={idPost}
          onChange={(event) => { setIdPost(event.target.value) }}
        />
        <br />
        <label>Titulo:</label>
        <textarea
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(event) => { setTitulo(event.target.value) }}
        />

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Digite o autor do post"
          value={autor}
          onChange={(event) => { setAutor(event.target.value) }}
        />
        <br />
        <button
          type='button'
          onClick={handleAdd}
        >Cadastrar</button>
        <br />
        <button
          type='button'
          onClick={buscaPost}
        >Buscar post</button>
        <br />
        <button
          type='button'
          onClick={editarPOst}
        >editar post</button>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>Título:</strong> {post.id} <br />
                <strong>Título:</strong> {post.titulo} <br />
                <strong>Autor:</strong> {post.autor} <br />
                <button
                  type='button'
                  onClick={() => { excluirPost(post.id) }}
                >Deleta post</button> <br /><br />

              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
