import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: 650,
    height: 650,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "grid",
    gridTemplateRows: "10px 10px 5px 500px",
    rowGap: "1.5rem",
  },
  sendMail: {
    backgroundColor: "#457b9d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 0",
  },
  input: {
    borderRadius: "5px",
  },
  close: {
    justifySelf: "end",
    cursor: "pointer",
  },
  root: {
    maxWidth: 345,
    height: 320,
  },
  cardContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
}));

export default function MenuModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ordered, setordered] = useState(false);

  const inviteSentClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setordered(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  props.open && handleOpen();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            alt="Restaurant Image"
            height="160"
            image={props.Image}
            title="Restaurant Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.Name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.cardContent}
            >
              <p>{props.cuisine}</p>
              <p style={{ fontSize: "large", color: "black" }}>
                {props.Rating}
              </p>
              <p style={{ color: "green" }}>{props.time} mins</p>
              <p style={{ fontSize: "large", color: "red" }}>
                {props.discount}% off
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CloseIcon className={classes.close} onClick={handleClose} />

            <h2>MENU</h2>
            <hr></hr>
            <div>
              <ul className="menuContainer">
                <p className="menuitem">Chinese Sizzler</p>
                <p className="menuprice">
                  ₹ <b>500</b>
                </p>
                <p className="menuitem">Chowmein and Manchurian</p>
                <p className="menuprice">
                  ₹ <b>200</b>
                </p>
                <p className="menuitem">Butter Chicken</p>
                <p className="menuprice">
                  ₹ <b>520</b>
                </p>
                <p className="menuitem">Chole Bhature</p>
                <p className="menuprice">
                  ₹ <b>150</b>
                </p>
                <p className="menuitem">Uttapam</p>
                <p className="menuprice">
                  ₹ <b>120</b>
                </p>
                <p className="menuitem">Idli Sambhar</p>
                <p className="menuprice">
                  ₹ <b>150</b>
                </p>
                <p className="menuitem">Cheese Pizza</p>
                <p className="menuprice">
                  ₹ <b>300</b>
                </p>
                <p className="menuitem">Cheese Pasta</p>
                <p className="menuprice">
                  ₹ <b>270</b>
                </p>
                <p className="menuitem">Chocolate Cake</p>
                <p className="menuprice">
                  ₹ <b>1200</b>
                </p>
                <p className="menuitem">Waffles</p>
                <p className="menuprice">
                  ₹ <b>120</b>
                </p>
              </ul>
            </div>
          </div>
        </Fade>
      </Modal>
      <Snackbar
        open={ordered}
        autoHideDuration={3000}
        onClose={inviteSentClose}
      >
        <Alert onClose={inviteSentClose} severity="success">
          Invitation Sent
        </Alert>
      </Snackbar>
    </div>
  );
}
