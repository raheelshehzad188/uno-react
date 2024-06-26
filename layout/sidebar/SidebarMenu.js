import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ChevronsRight } from 'react-feather';
import { SidebarMenuItem } from '../../data/sidebarMenu';

const SidebarMenu = () => {
    const router = useRouter();
    const [activeMenu, setActiveMenu] = useState();
    const [childMenu, setChildMenu] = useState();

    useEffect(() => {
        if (router.asPath) {
            SidebarMenuItem.forEach((item) => {
                if (item.children) {
                    item.children.forEach((child) => {
                        if (child.path === router.asPath) { setChildMenu(child.title); setActiveMenu(item.title); return true }
                        else return false;
                    })
                } else {
                    if (item.path === router.asPath) { setActiveMenu(item.title); return true }
                    else return false;
                }
            })
        }
    }, [router])

    return (
        <ul className="sidebar-menu custom-scrollbar">
            {
                SidebarMenuItem && SidebarMenuItem.map((item, i) => {
                    return (
                        <li key={i} className="sidebar-item">
                            {item.type === 'link' && <Link href={`${item.path}`} className={`sidebar-link only-link ${activeMenu === item.title ? 'active' : ''}`} onClick={() => { setActiveMenu(prev => prev !== item.title && item.title) }}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>}
                            {
                                item.type === 'sub' &&
                                <a href="#" className={`sidebar-link ${activeMenu === item.title ? 'active' : ''}`} onClick={() => { setActiveMenu(prev => prev !== item.title && item.title) }}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    <div className="according-menu"><i className="fa fa-angle-right" /></div>
                                </a>
                            }
                            {
                                Array.isArray(item.children) &&
                                <ul className={`nav-submenu menu-content ${item.title === activeMenu ? 'd-block' : 'd-none'}`}>
                                    {item.children.map((child, i) => {
                                        return (
                                            <li key={i}>
                                                <Link href={`${child.path}`} className={`${child.title === childMenu ? 'active' : ''}`} onClick={() => { setChildMenu(child.title) }}>
                                                    <ChevronsRight />
                                                    {child.title}
                                                    {
                                                        child.badge && <span className="label label-shadow ms-1">New</span>
                                                    }
                                                </Link>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SidebarMenu