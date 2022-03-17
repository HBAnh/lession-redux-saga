const style = () => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "white",
    boxShadow: 10,
  },
  modalhead: {
    margin: 0,
    padding: 10,
    backgroundColor: "lightgreen",
    textAlign: "left",
  },
  title: {
      marginLeft: 10,
      fontWeight: 'bold', 
      fontSize: '2rem',
      fontFamily: 'tahoma',
      color: 'black'
  },
  iconClose:{
      float: 'right'
  }

});
export default style;
