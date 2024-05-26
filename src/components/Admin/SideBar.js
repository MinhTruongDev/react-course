import 'react-pro-sidebar/dist/css/styles.css'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaGem, FaGithub } from 'react-icons/fa';
import { DiReact } from "react-icons/di";
import { MdDashboard } from 'react-icons/md'
import sidebarBg from '../../asset/bg2.jpg';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const { collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <DiReact size={'3em'} color={"oobfff"} />
                        <span>Minh Truong Admin</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                        >
                            <Link to="/admins" />
                            Dashboard
                        </MenuItem>
                        <SubMenu
                            icon={<FaGem />}
                            title="Features"
                        >
                            <MenuItem>
                                User Management
                                <Link to="/admins/manage-users" />
                            </MenuItem>
                            <MenuItem>Quiz Management</MenuItem>
                            <MenuItem>Question Management</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://minhtruongdev.github.io/"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                &#169;MinhTruongDev
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;