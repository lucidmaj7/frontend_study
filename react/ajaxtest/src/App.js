import React, { useEffect ,useState} from 'react';

function Nav(props){
  let [list,setList] = useState([]);
  let [isFetch,setIsFetch] = useState(false);

  useEffect(()=>{
    if(isFetch===false)
    { 
      fetch('list.json')
      .then((res)=>{
        return res.json();
      }).then((json)=>{
        console.log("fetch");
        setIsFetch(true);
        setList(json);
      });
    }
  },);

  let navlist = [];

  for(let i = 0;i<list.length;i++)
  {
    navlist.push(<li key={list[i].id} ><a href={list[i].id} onClick={(e)=>{
      e.preventDefault();
      props.onClick(list[i].id);


    }}> {list[i].title}</a></li>);
  }

  return(
  <nav>
    <ul>
    {navlist}
    </ul>
  </nav>
  );
}

function Article(props){
  let [title,setTitle] = useState(props.title);
  let [desc,setDesc] = useState(props.desc);


  useEffect(()=>{
    if(props.id!==0)
    { 
      fetch(`${props.id}.json`)
      .then((res)=>{
        return res.json();
      }).then((json)=>{
        console.log("Article Fetched!");
        setTitle(json.title);
        setDesc(json.desc);
      }).catch(()=>{
        setTitle(`${props.id} is not found`);
        setDesc("");
      });
    }
  },[props.id]);

  return(
    <article>
      <h2>{title}</h2>
      <p>{desc}</p>
    </article>
  );
}

function App() {
  let [selected , setSelect]=useState(0);
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav onClick={(id)=>{
          console.log(`id is clicked ${id}`);
          setSelect(id);
      }}></Nav>
      <Article id={selected} title={"Welcome"} desc={"Hello React~"}></Article>
    </div>
  );
}

export default App;
