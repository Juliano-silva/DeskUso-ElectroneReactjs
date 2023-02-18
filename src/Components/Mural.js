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
        <div  className={style.CorpoMural}>
            {items.map((item) => {
                const {id,title,image} = item;
                return(
                    <ul key={id} className={style.MuralDv}>
                        <li>
                           <h1>{title}</h1>
                            <img src={image} alt="" />
                            <div className={style.ButtonMural}>
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

const Mural = () =>{
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [list,setList] = useState(getLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:"",type:""});
  const [editId,setEditID] = useState(null);
  const [isEditing,setIdEditing] = useState(false);
  function Esconder(){
    document.getElementById("FORMural").style.display = "none"
  }
  function Aparecer(){
    document.getElementById("FORMural").style.display = "block"
  }
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name,!image){
      ShowAlert(true,"danger","Please Enter Value")
    }else if(name && isEditing,image && isEditing){
      setList(
        list.map((item) => {
          if(item.id === editId){
            return {...item,title:name,image:image}
          }
          return item
        })
      );
      setName("");
      setImage("");
      setEditID(null);
      setIdEditing(false);
      ShowAlert(true,"Sucesso","Value Changes")
    }else{
      ShowAlert(true,"Sucesso")
      const newItem = {id: new Date().getTime().toString(),title:name,image:image};
      setList([...list,newItem]);
      setName("");
      setImage("");
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
    setName(EditItem.title);
    setImage(EditItem.image);
  };
  const clearList = () => {
    ShowAlert(true,"danger","Lista Limpa");
    setList([]);
  };
  return(
    <div className={style.Container}>
      <section>
        <form onSubmit={handleSubmit} id="FORMural">
          {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={list}/>}
          <div className={style.ImageInput}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Nome da Imagem"/>
            <input type="text" onChange={(e) => setImage(e.target.value)} value={image} placeholder="URL da Imagem"/>
            <button type="submit">
              {isEditing ? "Editando" : "Enviar"}
            </button>
            <button id="Esconder" onClick={Esconder}>Esconder</button>
          </div>
        </form>
        <div className={style.BotãoAparecer}>
        <button onClick={Aparecer}>Aparecer</button>
        </div>
        {list.length > 0 && (
          <div>
            <List items={list} removeItem={removeItem} editItem={EditItem}/>
            <div>
              <button onClick={clearList} className={style.RT}>
                Remover Tudo
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
export default Mural
