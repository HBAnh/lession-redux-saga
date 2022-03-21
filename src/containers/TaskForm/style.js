
const style = () => ({
    textField: {
        width: '100%'
    },
    content: {
        padding: 20,
    },
    
    selectStatus: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    
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
    backgroundColor: "#1976d2",
    textAlign: "left",
  },
  title: {
      marginLeft: 10,
      fontWeight: 'bold', 
      fontSize: '2rem',
      fontFamily: 'tahoma',
      color: 'white'
  },
  iconClose:{
      float: 'right',
      color: 'white'
  }

})
export default style;