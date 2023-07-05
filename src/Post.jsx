export function Post({author,content}){
   return(
      <div>
         <strong>{author}</strong>
         <span>{content}</span>
      </div>
   )
}