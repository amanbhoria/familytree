import React, { useState } from "react";
import FamilyDetails from "./FamilyDetails";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";

const Tree = () => {
  const [open, setOpen] = useState(true);
  const [property, setProperty] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const changeState = () => {
    setProperty(true);
  };

  return (
    <div className="row">
      <div className="col-4">
        <div class="card card-default" data-v-ce9038c6="">
          <div class="card-header" data-v-ce9038c6="">
            <div class="card-title" data-v-ce9038c6="">
              Family Tree
            </div>
          </div>
          <div className="card-body" data-v-ce9038c6="">
            <div className="input-group mb-3">
              <TextField
                id="standard-basic"
                type="text"
                size="small"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button type="submit" className="input-group-text">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
            </div>

            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={changeState}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Grand Father" />
                {/* <FamilyDetails isVisible={property}></FamilyDetails> */}
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <FolderIcon></FolderIcon>
                </ListItemIcon>
                <ListItemText primary="Uncle" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Father" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Me" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </div>
        </div>
        <div className="functionalButton">
          <Button type="submit" size="large" className="input-group-text">
            Import Json
          </Button>
          <Button type="submit" size="large" className="input-group-text">
            Add Family
          </Button>
          <Button type="submit" size="large" className="input-group-text">
            Export JSON
          </Button>
          <Button type="submit" size="large" className="input-group-text">
            Print Family Tree
          </Button>
        </div>
      </div>
      <FamilyDetails />
    </div>
  );
};

export default Tree;
