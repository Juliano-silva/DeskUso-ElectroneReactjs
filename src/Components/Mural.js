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
                const {id,title,image} = item;
                return(
                    <ul key={id}>
                        <li>
                            {/* Aqui fica o Titúlo */}
                            {title}
                            <img src={image} alt="" />
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

const Mural = () =>{
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [list,setList] = useState(getLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:"",type:""});
  const [editId,setEditID] = useState(null);
  const [isEditing,setIdEditing] = useState(false);
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
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} removeAlert={ShowAlert} list={list}/>}
          <div>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" onChange={(e) => setImage(e.target.value)} value={image} />
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
export default Mural
