import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Button, styled } from "@mui/material";
import { Typography } from "@mui/material";
import "./App.css";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "dodgerblue",
    color: "white",
    margin: 5,
    "&:hover": {
      backgroundColor: "skyblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    }
  })
  return (
    <div>
      <p>app works!</p>
      <div>
        <Button variant="text">text</Button>
        <Button variant="contained" color="secondary">
          contained
        </Button>
        <Button variant="outlined">outlined</Button>
      </div>
      <br />
      <div>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div>
        <p>Typography</p>
        <Typography variant="h1" component="h1">
          h1. Heading
        </Typography>
        <Typography variant="h1" component="p">
          it uses h1 style but its a p tag
        </Typography>

        <Button
          variant="contained"
          disabled
          sx={{
            backgroundColor: "dodgerblue",
            color: "white",
            margin: 5,
            "&:hover": {
              backgroundColor: "skyblue",
            },
            "&:disabled": {
              backgroundColor: "gray",
              color: "white",
            },
          }}
        >
          my disabled button
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "dodgerblue",
            color: "white",
            margin: 5,
            "&:hover": {
              backgroundColor: "skyblue",
            },
            "&:disabled": {
              backgroundColor: "gray",
              color: "white",
            },
          }}
        >
          my unique button
        </Button>
        <BlueButton>
          my blue button
        </BlueButton>
      </div>
    </div>
  );
}

export default App;
