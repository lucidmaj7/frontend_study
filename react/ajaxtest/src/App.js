import React, { useEffect ,useState} from 'react';

function Nav(props){

  let list = props.data;
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

  return(
    <article>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </article>
  );
}

function App() {
  let [selected , setSelect]=useState(0);
  let [navList, setNavList] = useState([ ]);
  let [isNavFetch,setIsNavFetch] = useState(false);
  let [_title,setTitle] = useState("Welcome");
  let [_desc,setDesc] = useState("Hello React~");


  useEffect(()=>{
    if(isNavFetch===false)
    {
      fetch('list.json')
      .then((res)=>{
        return res.json();
      }).then((json)=>{
        console.log("fetch");
        setIsNavFetch(true);
        setNavList(json);
      });
    }
  },[navList]);

  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav data={navList} onClick={(id)=>{
          console.log(`id is clicked ${id}`);
          if(id!==0)
          { 
            fetch(`${id}.json`)
            .then((res)=>{
              return res.json();
            }).then((json)=>{
              console.log("Article Fetched!");
              setTitle(json.title);
              setDesc(json.desc);
            }).catch(()=>{
              setTitle(`${id} is not found`);
              setDesc("");
            });
          }
      }}></Nav>
      <Article id={selected} title={_title} desc={_desc}></Article>
    </div>
  );
}

export default App;
