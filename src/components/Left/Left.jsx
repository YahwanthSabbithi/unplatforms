import './Left.css';
import {Bookmarks, Chat, Event, Group, HelpOutline, RssFeed, School, VideoLibrary, WorkOutlineOutlined} from "@material-ui/icons"

function Left (){
  return(
    <div className="sidebar">
      <div className="sidebarWarapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText" >Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText" >Chats</span>
          </li>
          <li className="sidebarListItem">
            <VideoLibrary className="sidebarIcon"/>
            <span className="sidebarListItemText" >Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText" >Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon"/>
            <span className="sidebarListItemText" >Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText" >Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutlineOutlined className="sidebarIcon"/>
            <span className="sidebarListItemText" >Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText" >Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText" >Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">
          Show More
        </button>
         <hr className="sidebarHr" />
      </div>
    </div>
  )
}

export default Left;