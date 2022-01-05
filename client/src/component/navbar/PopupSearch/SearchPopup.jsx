import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import styles from './SearchPopupStyle';
import Search from './SearchBox/Search'


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



export default function CustomizedDialogs({search,setsearch,tags,settags}) {
  const [open, setOpen] = useState(false);
// const [search,setsearch]=useState();
// const [tags,settags]=useState();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Avatar alt="Search" onClick={handleClickOpen} >
        <SearchIcon/>
      </ Avatar>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Search
        </DialogTitle>
       
          <Search
          search={search}
          setsearch={setsearch}
          tags={tags}
          settags={settags}
          setOpen={setOpen}
          />
        
      </Dialog>
    </div>
  );
}