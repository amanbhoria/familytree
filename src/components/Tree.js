import React, { useState } from "react";
import FamilyDetails from "./FamilyDetails";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Collapse from "@mui/material/Collapse";
import FolderIcon from "@mui/icons-material/Folder";
// eslint-disable-next-line
import Form from "./Form";

const Tree = () => {
  const [open, setOpen] = useState(true);
  const [property, setProperty] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [familyObj, setFamilyObj] = useState([]);

  // eslint-disable-next-line
  const [values, setValues] = useState([]);

  const [name, setName] = useState("");
  const [spouse, setSpouse] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [birthYear, setBirthYear] = useState("");

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
      birthYear: "2000",
    },
    {
      role: "Best Friend",
      name: "Aman Bhoria",
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
        setFamilyArr(familyArr.filter((x) => x.name === searchValue));
      }
    }
  };

  const handleFormSearch = (e) => {
    e.preventDefault();
    const newElement = {
      role: role,
      name: name,
      spouse: spouse,
      location: location,
      birthYear: birthYear,
    };

    let newState = [...familyArr, newElement];

    setFamilyArr(newState);
  };

  const changeState = (e) => {
    e.preventDefault();
    setProperty(!property);
  };

  return (
    <div className="row customrow1">
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
                      {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                    </ListItemButton>
                  </List>
                );
              })}
          </div>
        </div>
        <div className="functionalButton">
          <Button
            disabled
            type="submit"
            size="large"
            className="input-group-text"
          >
            Import Json
          </Button>
          <Button
            onClick={(e) => handleFormSearch(e)}
            type="submit"
            size="large"
            className="input-group-text"
          >
            Add Family
          </Button>
          <Button
            disabled
            type="submit"
            size="large"
            className="input-group-text"
          >
            Export JSON
          </Button>
          <Button type="submit" size="large" className="input-group-text">
            Print Family Tree
          </Button>
        </div>
      </div>
      <FamilyDetails isVisible={property} obj={familyObj}></FamilyDetails>
      {/* <Form isVisible={property} obj={familyObj} className="pull-right"></Form> */}
      <div className="col-4">
        <div className="card card-default" data-v-ce9038c6="">
          <div className="card-header" data-v-ce9038c6="">
            <div className="card-title" data-v-ce9038c6="">
              Add Family Member
            </div>
          </div>
          <div className="card-body" data-v-ce9038c6="">
            <div className="card-body">
              <div className="form-elements">
                <div className="form-element">
                  <TextField
                    id="form-element"
                    label="Role"
                    value={values.role}
                    onChange={(e) => setRole(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="form-element">
                  <TextField
                    id="form-element"
                    label="Name"
                    value={values.name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="form-element">
                  <TextField
                    id="form-element"
                    value={values.spouse}
                    onChange={(e) => setSpouse(e.target.value)}
                    label="Spouse"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="form-element">
                  <TextField
                    id="form-element"
                    label="Birth"
                    value={values.birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="form-element">
                  <TextField
                    id="form-element"
                    label="Location"
                    value={values.location}
                    onChange={(e) => setLocation(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree;
