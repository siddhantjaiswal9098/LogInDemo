export function SignUpSave(data){
   return (dispatch) => {
       dispatch({type : "SAVE",data});
   };
}