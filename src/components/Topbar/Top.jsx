import { Search, Person, Chat, Notifications} from "@material-ui/icons";
import './top.css'
function Top(){
  return(
      <div className="topbarContainer">
      <div className="topbarLeft">
          <span className="logo">Unplatforms</span>
      </div>
      <div className="topbarCenter"> 
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Seacrh for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
     
    </div>
    </div>
  );
}

export default Top;