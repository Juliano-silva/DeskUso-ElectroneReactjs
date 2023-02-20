import React,{useState,useEffect} from "react";
import {FaEdit,FaTrash} from 'react-icons/fa'
import style from './Style.module.css'
const Alert = ({type,msg,removeAlert,listM}) => {
  useEffect(() => {
      const timeout = setTimeout(() => {
          removeAlert();
      },3000);
      return () => clearTimeout(timeout)
  },[listM]);
  return <p className={`alert alert-${type}`}>{msg}</p>
}
const ListM = ({itemsM,removeItem,editItem}) => {
    return(
      <div>
        <div  className={style.CorpoMural}>
            {itemsM.map((itemM) => {
                const {id,titleM,image} = itemM;
                return(
                    <ul key={id} className={style.MuralDv}>
                        <li>
                           <h1>{titleM}</h1>
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
  let listM = localStorage.getItem("listM");
  if(listM){
    return (listM = JSON.parse(localStorage.getItem("listM")));
  } else{
    return [];
  }
}

const Mural = () =>{
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [listM,setListM] = useState(getLocalStorage());
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
    localStorage.setItem("listM",JSON.stringify(listM));
  },[listM]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name,!image){
      ShowAlert(true,"danger","Please Enter Value")
    }else if(name && isEditing,image && isEditing){
      setListM(
        listM.map((itemM) => {
          if(itemM.id === editId){
            return {...itemM,titleM:name,image:image}
          }
          return itemM
        })
      );
      setName("");
      setImage("");
      setEditID(null);
      setIdEditing(false);
      ShowAlert(true,"Sucesso","Value Changes")
    }else{
      ShowAlert(true,"Sucesso")
      const newItem = {id: new Date().getTime().toString(),titleM:name,image:image};
      setListM([...listM,newItem]);
      setName("");
      setImage("");
    }
  };
  const ShowAlert = (show = false, type = "" , msg ="") => {
    setAlert({show,type,msg})
  };
  const removeItem = (id) => {
    ShowAlert(true,"danger","Item Remove")
    setListM(listM.filter((itemM) => itemM.id !== id));
  };
  const EditItem = (id) => {
    const EditItem = listM.find((itemM) => itemM.id === id);
    setIdEditing(true);
    setEditID(id);
    setName(EditItem.titleM);
    setImage(EditItem.image);
  };
  const clearList = () => {
    ShowAlert(true,"danger","Lista Limpa");
    setListM([]);
  };
  return(
    <div className={style.Container}>
      <section>
        <form onSubmit={handleSubmit} id="FORMural">
          {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={listM}/>}
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
        {listM.length > 0 && (
          <div>
            <ListM itemsM={listM} removeItem={removeItem} editItem={EditItem}/>
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
