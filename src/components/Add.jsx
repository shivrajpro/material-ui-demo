import {
    Add as AddIcon
} from "@mui/icons-material";
import {
    Fab,
    Modal,
    styled,
    Tooltip
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Add = () => {
  const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)" } }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
