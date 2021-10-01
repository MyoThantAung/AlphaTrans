import firebase from "firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import db from "./firebase";
import { Alert } from "react-native";

export async function verifiedUser(comname, pass) {
  alert(comname + pass);
  try {
    db.collection("company")
      .doc(comname)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //alert("Document data:" + JSON.stringify(doc.data()));
          //alert("Email:" + doc.data().passhash);
          const data = doc.data();
          if (data.passhash == pass) {
            alert("Password Correct!");
            return data.webhash;
          } else {
            alert("Password Incorrect!");
          }
        } else {
          // doc.data() will be undefined in this case
          alert("No such document!");
        }
      })
      .catch((error) => {
        alert("Error getting document:" + error);
      });
  } catch (err) {
    Alert.alert("There is something wrong!", err.message);
  }
}
