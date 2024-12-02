import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Dashboard, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { text: "Dashboard", icon: <Dashboard />, path: "/tasks" },
    { text: "About", icon: <Settings />, path: "/about" },
  ];

  return (
    <List style={{ color: "white" }}>
      {links.map((link) => (
        <ListItem
          key={link.text}
          button
          component={Link}
          to={link.path}
          style={{ color: "white" }}
        >
          <ListItemIcon style={{ color: "white" }}>{link.icon}</ListItemIcon>
          <ListItemText primary={link.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
