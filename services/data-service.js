import jsondata from "./data.json";
let msg = "this is message";

if (process.env.NODE_ENV == "production"){
  msg = jsondata.msg
}


export default {
  msg: msg
}