import React, { useState,useEffect } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import CRUD_firestore from "./CRUD_firestore"
 import ReactLoading from "react-loading";
import PostCard from "./PostCard"
import { functions, firestore} from "../firebase"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const history = useHistory();
  const soething=[];
  const crud = new CRUD_firestore();

  useEffect(() => {
   if(loading){
    getdata();
   }
  });

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

//create an async function
    const getdata = async () => {
      const tmpArr = [];
      firestore.collection("posts").doc("top_posts").collection("current").get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
          //console.log(JSON.stringify(doc.data()));
          tmpArr.push({"id":doc.id,"data":doc.data()});
          });
          setData(tmpArr);
          setLoading(false)
         
      });
        
  


  }

const add_Posts = async () => {
  setError("")

  try {
    history.push("/make_post")
  } catch {
    setError("Failed to render make_post")
  }
}


  return (
    <>
       {loading == true ? (
        <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
       ) : (
        data.map(dataIn => {
          console.log(dataIn.data);
          return (
            <div>
            <button onClick={add_Posts}>Add Data</button>
            <div className={dataIn.key}><PostCard data={dataIn} /> </div>
            </div>
          )
          })
       )}
    </>
  )
}
