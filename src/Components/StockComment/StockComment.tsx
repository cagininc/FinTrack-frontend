import React, { ReactEventHandler } from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';

interface Props  {
stockSymbol:string;

}
type CommentFormInputs = {
    title: string;
    content: string;


}
const StockComment = ({stockSymbol }: Props) => {
    const handleComment=(e:CommentFormInputs)=>{
commentPostAPI(e.title,e.content,stockSymbol)
.then((res)=>{if(res)

{toast.success("Comment created succesfully")}

}).catch((e)=> {
    toast.warning(e)
})

    }



  return (
   <StockCommentForm handleComment={handleComment} symbol={stockSymbol}/>
  )
}

export default StockComment