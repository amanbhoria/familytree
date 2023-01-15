import React from "react";
import "../index.scss";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const FamilyDetails = (props) => {
  if (props.isVisible) {
    return (
      <div className="col-4">
        <div className="card card-default" data-v-ce9038c6="">
          <div className="card-header" data-v-ce9038c6="">
            <div className="card-title" data-v-ce9038c6="">
              Family Details
            </div>
          </div>
          <div className="card-body" data-v-ce9038c6="">
            <div className="card-body">
              <div className="info">
                <div className="small-text" htmlFor="">
                  <p>Name: {props.obj.name}</p>
                </div>
                <div className="small-text" htmlFor="">
                  <p>Spouse/Husband: {props.obj.spouse}</p>
                </div>
                <div className="small-text" htmlFor="">
                  <p>Birth: {props.obj.birthYear}</p>
                </div>
                <div className="small-text" htmlFor="">
                  <p>Location: {props.obj.location}</p>
                </div>
              </div>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label" disabled>
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton
                  disabled
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
};

export default FamilyDetails;
