import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import LensTwoToneIcon from "@material-ui/icons/LensTwoTone";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const StyledMenu = withStyles({
  paper: {
    // border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "#edf2f7",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    "&:focus": {
      backgroundColor: "#edf2f7",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AccountMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [status, setStatus] = React.useState({
    status: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setStatus({
      ...status,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <IconButton className="relative" onClick={handleClick}>
        <AccountCircleTwoToneIcon style={{ color: "#96a6ba" }} />
        <span
          className="status online bg-green-500 w-2 absolute h-2 rounded-full"
          style={{ bottom: "8px", right: "8px" }}
        ></span>
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem style={{ padding: "0px 16px", marginBottom: "8px" }}>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{
                  color: "#27303f",
                  padding: "0px",
                  fontSize: "13px",
                }}
              >
                Signed in as
                <br></br>
                <strong>watkins.andrew@company.com</strong>
              </Typography>
            }
          />
        </StyledMenuItem>

        <Divider />

        <StyledMenuItem style={{ marginTop: "8px" }}>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <AccountCircleTwoToneIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: "#27303f", fontSize: "14px" }}
              >
                Profile
              </Typography>
            }
          />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <SettingsTwoToneIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: "#27303f", fontSize: "14px" }}
              >
                Settings
              </Typography>
            }
          />
        </StyledMenuItem>
        <StyledMenuItem style={{ marginBottom: "8px" }}>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <LensTwoToneIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
            <Select
              native
              value={status.status}
              onChange={handleChange}
              label="Status"
              inputProps={{
                name: "status",
                id: "outlined-age-native-simple",
              }}
            >
              <option value={"Online"}>Online</option>
              <option value={"Away"}>Away</option>
              <option value={"Busy"}>Busy</option>
              <option value={"Invisible"}>Invisible</option>
            </Select>
          </FormControl>
        </StyledMenuItem>

        <Divider />

        <StyledMenuItem style={{ marginTop: "8px" }}>
          <ListItemIcon style={{ minWidth: "auto", marginRight: "12px" }}>
            <PowerSettingsNewIcon style={{ color: "#64738b" }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="subtitle1"
                style={{ color: "#27303f", fontSize: "14px" }}
              >
                Sign out
              </Typography>
            }
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
