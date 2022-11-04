function Card({name, image}){
 return(
     <div className={"container_charater.card"}>
         <img src={image}/>
         <span> {name}</span>
     </div>
 );
}export default Card;