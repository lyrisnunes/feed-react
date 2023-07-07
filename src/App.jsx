import { Post } from "./components/Post";
import { Header } from "./components/Header";

//styles
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/lyrisnunes.png',
      name: 'Lyris Nunes',
      role: 'Programadora Front End'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋' },
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio.'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023/07/06 13:17:30'),
  },
  {
  id: 2,
  author:{
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego',
    role: 'Programadora Front End'
  },
  content:[
    {type: 'paragraph', content: 'Fala galeraa 👋' },
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio.'},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2023/07/06 13:30:30'),
},
]


export function App(){
  return(
    <div>
      <Header/>

      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          {posts.map(post =>{
            return(
              <Post
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