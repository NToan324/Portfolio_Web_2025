import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Certificate from "../../assets/certificate.jpg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  minWidth: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
};

interface BasicModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BasicModal({ open, setOpen }: BasicModalProps) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="absolute inset-0 z-10 h-full w-full">
      <Button
        onClick={handleOpen}
        style={{
          backgroundColor: "#fff",
        }}
        className="h-full w-full opacity-0"
      >
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-white text-2xl bg-black p-2 rounded-full w-[20px] h-[20px] absolute top-4 right-4 cursor-pointer opacity-55 hover:opacity-100"
            onClick={handleClose}
          />
          <img
            src={Certificate}
            alt="Certificate"
            className="object-contain w-full h-full"
          />
        </Box>
      </Modal>
    </div>
  );
}
