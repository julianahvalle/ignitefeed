import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/julianahvalle.png',
      name: 'Juliana Valle',
      role: 'Web Developer'
    },
    content: [
    { type: 'paragraph', content: 'Fala galera 👋',},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content:'juliana.valle/doctocare'},
    ],
    publishedAt: new Date('2022-09-23 20:00:01'),
  },  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Dev @ Rocketseat'
    },
    content: [
    { type: 'paragraph', content: 'Fala dev 👋',},
    { type: 'paragraph', content: 'Novo conteúdo na plataforma da Rocketseat foi postado, confere lá! 💜 🚀'},
    // {type: 'link', content:'juliana.valle/doctocare'},
    ],
    publishedAt: new Date('2022-09-23 20:00:01'),
  },{  
  id: 3,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
    { type: 'paragraph', content: 'Fala galera 👋',},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu profile. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content:'juliana.valle/doctocare'},
    ],
    publishedAt: new Date('2022-09-23 20:00:01'),
  },
];

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
         <main>
          {post.map(post => {
            return ( 
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
         </main>
      </div>      
    </div>    
  )
}
