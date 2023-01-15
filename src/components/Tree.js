import React, { useState } from "react";
import FamilyDetails from "./FamilyDetails";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";

const Tree = () => {
  const [open, setOpen] = useState(true);
  const [property, setProperty] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [familyObj, setFamilyObj] = useState([]);
  const [familyArr, setFamilyArr] = useState([
    {
      role: "Grand Father",
      name: "Ganga Bishan",
      spouse: "Roshni",
      location: "HR",
      birthYear: "1950",
    },
    {
      role: "Father",
      name: "Manoj Kumar",
      spouse: "Vidya Swaroop",
      location: "Delhi",
      birthYear: "1971",
    },
    {
      role: "Me",
      name: "Ishika Raj",
      spouse: "Unmarried",
      location: "Delhi",
      birthYear: "1998",
    },
  ]);

  const handleClick = (obj) => {
    setFamilyObj(obj);
    setOpen(!open);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchValue.length === 0) {
      alert("Please add some value");
    } else {
      console.log(searchValue);
      const element = familyArr.filter((x) => x.name === searchValue);
      if (element && searchValue.length > 0) {
        console.log(element);
        setFamilyArr(familyArr.filter((x) => x.name === searchValue));
      }
    }
  };

  const changeState = (e) => {
    e.preventDefault();
    const getName = e.target.innerText;
    console.log(getName);
    setProperty(!property);
  };

  return (
    <div className="row">
      <div className="col-4">
        <div className="card card-default" data-v-ce9038c6="">
          <div className="card-header" data-v-ce9038c6="">
            <div className="card-title" data-v-ce9038c6="">
              Family Tree
            </div>
          </div>
          <div className="card-body" data-v-ce9038c6="">
            <div className="input-group mb-3">
              <TextField
                label="Search Member"
                id="standard-basic searchedText"
                type="text"
                onChange={(e) => handleSearch(e)}
                size="small"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                onClick={(e) => handleSearchClick(e)}
                type="submit"
                className="input-group-text"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </Button>
            </div>
            {familyArr
              .filter((item) => {
                if (
                  item.name
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase())
                ) {
                  return true;
                }

                return false;
              })
              .map((obj, index) => {
                const role = obj.role;
                return (
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    id="list"
                  >
                    <ListItemButton
                      key={index}
                      onClick={(e) => {
                        handleClick(obj);
                        changeState(e);
                      }}
                    >
                      <ListItemIcon>
                        <FolderIcon />
                      </ListItemIcon>
                      <ListItemText>{role}</ListItemText>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    {/* <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <FolderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Me" />
                      </ListItemButton>
                    </List>
                  </Collapse> */}
                  </List>
                );
              })}
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
      <FamilyDetails isVisible={property} obj={familyObj}></FamilyDetails>
    </div>
  );
};

export default Tree;
