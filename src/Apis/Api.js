import  axios from 'axios' ;

export default function fetch_api(method , Endpoints , data){
  return axios({
    method  : method ,
    url : `http://localhost:8888/${Endpoints}` ,
    data : data
  })
}
