import { Post } from "./components/Post";
import { Header } from "./components/Header";

//styles
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

export function App(){
  return(
    <div>
      <Header/>

      <div className={styles.wrapper}>
      <Sidebar/>

        <main>
        <Post author="Lyris Nunes" content="texto exemplo"/>
        </main>
      </div>
      
    </div>
  )
}