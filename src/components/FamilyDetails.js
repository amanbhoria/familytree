import React from "react";
import "../index.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const FamilyDetails = (props) => {
  if (props.isVisible) {
    return (
      <div className="col-8">
        <div className="card card-default" data-v-ce9038c6="">
          <div className="card-header" data-v-ce9038c6="">
            <div className="card-title" data-v-ce9038c6="">
              Family Details
            </div>
          </div>
          <div className="card-body" data-v-ce9038c6="">
            <div className="card-body">
              <div className="info">
                <label htmlFor="">Name</label>
                <label htmlFor="">Spouse:</label>
                <label htmlFor="">Birth:</label>
                <label htmlFor="">Location:</label>
                <label htmlFor="">Present Address:</label>
              </div>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>Ishika is mad</>;
};

export default FamilyDetails;
