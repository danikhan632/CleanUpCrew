//create a class in javascript
import { functions, firestore} from "../firebase"
class CRUD_firestore {
    constructor() {

        this.state = {
        data: [],
        size: 0,
        };
    }
    //create an async function
    async getdata() {
        const tmpArr = [];
        firestore.collection("posts").doc("top_posts").collection("current").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            //console.log(JSON.stringify(doc.data()));
            tmpArr.push({"id":doc.id,"data":doc.data()});
            });
            console.log(tmpArr.length);
            this.state=({
            data: tmpArr,
            loading: false,
            size: tmpArr.length,
            });
        });
        return tmpArr;
    }
    //add a new document to the collection
    async addData(data) {
        firestore.collection("posts").doc("top_posts").collection("current").add(data)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    getSize(){
        return this.state.size;
    }
    getData(){
        return this.state.data;
    }
    


}
export default CRUD_firestore;