import React,{useState,useEffect} from "react";
import {FaEdit,FaTrash} from 'react-icons/fa'
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
        <div className="container">
            {items.map((item) => {
                const {id,title,texto} = item;
                return(
                    <ul key={id}>
                        <li>
                            {/* Aqui fica o Titúlo */}
                            <h1>{title}</h1>
                            <p>{texto}</p>
                            <div style={{float:"right"}}>
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
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!nome,!texto){
      ShowAlert(true,"danger","Please Enter Value")
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
      ShowAlert(true,"Sucesso","Value Changes")
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
  const clearList = () => {
    ShowAlert(true,"danger","Lista Limpa");
    setList([]);
  };
  return(
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={list}/>}
          <div>
            <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} />
            <input type="text" onChange={(e) => setTexto(e.target.value)} value={texto} />
            <button type="submit">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={EditItem}/>
            <div>
              <button onClick={clearList}>
                Clear all item
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
export default Api
