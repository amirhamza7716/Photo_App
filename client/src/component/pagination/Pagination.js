import React,{useEffect} from 'react'
// import Pagination from '@material-ui/lab';
import {Pagination,PaginationItem}  from '@material-ui/lab';
import { Link } from 'react-router-dom';
import {getposts} from '../../Api actions/action';
import { useLocation,useNavigate } from 'react-router'
import { useDispatch ,useSelector} from 'react-redux';


// function useQuery(){
//     return new URLSearchParams(useLocation().search);

// }




const PaginaTion = ({page}) => {
    
    const dispatch = useDispatch();
    const {NumberOfPages} =useSelector((state)=>state.reducer);
   

    useEffect(()=>{
      if(page) dispatch(getposts(page));
    },[page])

    return (
        <>
            <Pagination 
            count={NumberOfPages} 
            page={Number(page) || 1}
            variant="outlined"
            color="secondary"
            renderItem={(item)=>(
                    <PaginationItem  {...item} component={Link} to={`/posts?page=${item.page}`}/>
            )}
            />
        </>
    )
}

export default PaginaTion;
