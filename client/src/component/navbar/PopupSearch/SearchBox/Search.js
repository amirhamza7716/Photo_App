import React from 'react'
import { Paper,AppBar,TextField,Button } from '@material-ui/core'
import {useNavigate } from 'react-router'

import ChipInput from 'material-ui-chip-input'
import useStyles from './searchBoxStyles'
import {FetchPostBySearch} from '../../../../Api actions/action'
import { useDispatch } from 'react-redux';







const Search = ({search,setsearch,tags,settags,setOpen}) => {
   
    const navigate=useNavigate();
    const dispatch = useDispatch();
    
    const classes = useStyles();
    

    function HandleKeyPress(e){
       if(e.keyCode==13){
           //serch post
           SearchPost();
       }
    }

    function HandleAdd(tag){
        return settags([...tags,tag])
    }
    
    function HandleDelete(tagToDelete){
           return settags(tags.filter((tag)=>tag!=tagToDelete))
    }

    function SearchPost(){
        if(search.trim() || tags ){
            
              dispatch(FetchPostBySearch({search,tags:tags.join(',')}));
            navigate(`/posts/find?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
        }else{
            navigate('/')
        }
    }


    return (
        <Paper>
            
            <AppBar position='static' color='inherit' className={classes.appBar}>
             <TextField 
             name='search'
             variant='outlined'
             label='Search Memories'
             fullWidth
             value={search}
             onKeyPress={HandleKeyPress}
             onChange={(e)=>{setsearch(e.target.value)}}
             />
             <ChipInput
             style={{margin:'10px 0'}}
             value={tags}
             onAdd={HandleAdd}
             onDelete={HandleDelete}
             label='Search Tags'
             variant='outlined'
             />
             <Button onClick={()=>{SearchPost();setOpen(false);}} className={classes.SearchButton} variant='contained' color='primary'>Search</Button>
            </AppBar>

        </Paper>    
    )
}

export default Search
