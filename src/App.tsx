import {
  List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography variant="h6" component="h1" gutterBottom>AEM Explorer</Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="First item" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="Second item" />
        </ListItem>
      </List>
    </div>
  );
}

export default App;
