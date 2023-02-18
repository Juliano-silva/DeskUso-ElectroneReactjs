import React,{useState,useEffect} from "react";
import {FaEdit,FaTrash} from 'react-icons/fa'
import style from './Style.module.css'
const Alert = ({type,msg,removeAlert,list}) => {
  useEffect(() => {
      const timeout = setTimeout(() => {
          removeAlert();
      },3000);
      return () => clearTimeout(timeout)
  },[list]);
  return <p className={`alert alert-${type}`}>{msg}</p>
}
const List = ({items,removeItem,editItem}) => {
    return(
        <div>
            {items.map((item) => {
                const {id,title,texto} = item;
                return(
                    <ul key={id} className={style.List}>
                        <li>
                            {/* Aqui fica o Titúlo */}
                            <h1>{title}</h1>
                            <p>{texto}</p>
                            <div >
                                <button onClick={() => editItem(id)}>
                                    <FaEdit/>
                                </button>
                                <button onClick={() => removeItem(id)}>
                                    <FaTrash/>
                                </button>
                            </div>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list){
    return (list = JSON.parse(localStorage.getItem("list")));
  } else{
    return [];
  }
}

const Api = () =>{
  const [nome,setNome] = useState("");
  const [texto,setTexto] = useState("");
  const [list,setList] = useState(getLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:"",type:""});
  const [editId,setEditID] = useState(null);
  const [isEditing,setIdEditing] = useState(false);
  function Esconder(){
    document.getElementById("FORM").style.display = "none"
  }
  function Aparecer(){
    document.getElementById("FORM").style.display = "block"
  }
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!nome,!texto){
    }else if(nome && isEditing,texto && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editId){
            return {...item,title:nome,texto:texto}
          }
          return item
        })
      );
      setNome("");
      setTexto("");
      setEditID(null);
      setIdEditing(false);
    }else{
      ShowAlert(true,"Sucesso")
      const newItem = {id: new Date().getTime().toString(),title:nome,texto:texto};
      setList([...list,newItem]);
      setNome("");
      setTexto("");
    }
  };
  const ShowAlert = (show = false, type = "" , msg ="") => {
    setAlert({show,type,msg})
  };
  const removeItem = (id) => {
    ShowAlert(true,"danger","Item Remove")
    setList(list.filter((item) => item.id !== id));
  };
  const EditItem = (id) => {
    const EditItem = list.find((item) => item.id === id);
    setIdEditing(true);
    setEditID(id);
    setNome(EditItem.title);
    setTexto(EditItem.texto);
  };
  return(
    <div className={style.Container}>
      <section>
        <form onSubmit={handleSubmit} id="FORM">
          {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={list}/>}
          <div className={style.Inputs}>
            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} placeholder="Titulo" required/>
            <textarea type="text" onChange={(e) => setTexto(e.target.value)} value={texto} placeholder="Texto" required/>
            <div>
            <button type="submit">
              {isEditing ? "Editar" : "Enviar"}
            </button>
            <button id="Esconder" onClick={Esconder}>Esconder</button>
            </div>
          </div>
        </form>
        <div className={style.BotãoAparecer}>
        <button onClick={Aparecer}>Aparecer</button>
        </div>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={EditItem}/>
          </div>
        )}
      </section>
    </div>
  )
}
export default Api
