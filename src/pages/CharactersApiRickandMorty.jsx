import {useState} from "react";
import {useEffect} from "react";
import Card from "../components/Card";

function  charactersApiRickandMorty(){
    const [count, setCount] = useState(1);
const [data, setData]=useState(null);


useEffect(function (){

    fetch(`https://rickandmortyapi.com/api/character?page=${count}`)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log("fail"))

},[count])

    return(
    <div className={"character_container"}>

        <button onClick={() => setCount(count + 1)}> next</button>
        <button onClick={() => setCount(count - 1)}> previous</button>

        {
           data && data.results.map ( character=>
                <Card
                    key={character.id}
                    name={character.name}
                    image={character.image}
                />
            )
        }
    </div>
    );
}export default charactersApiRickandMorty;