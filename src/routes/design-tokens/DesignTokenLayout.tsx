import {GoADropdown, GoADropdownItem, GoASideMenu, GoASideMenuHeading, GoASpacer,} from "@abgov/react-components";
import {Link, Outlet} from "react-router-dom";
import "./DesignTokens.css"
import {SupportInfo} from "@components/support-info/SupportInfo";

export function DesignTokenLayout() {
    return (
        <>
            <div className="content">
                <section className="side-menu" style={{paddingTop: 0}}>
                    <GoASideMenu>
                        <GoASideMenuHeading>Styles</GoASideMenuHeading>
                        <GoASpacer vSpacing="xs"/>
                        <GoADropdown mb="m" value="scss" onChange={
                            () => {
                            }}>
                            <GoADropdownItem label="SCSS" value="scss"/>
                            <GoADropdownItem label="CSS" value="css"/>
                        </GoADropdown>
                        <Link to="">All</Link>
                        <Link to="border-radius">Border Radius</Link>
                        <Link to="border-width">Border Width</Link>
                        <Link to="color">Color</Link>
                        <Link to="icon-size">Icon Size</Link>
                        <Link to="opacity">Opacity</Link>
                        <Link to="shadow">Shadow</Link>
                        <Link to="spacing">Spacing</Link>
                        <Link to="typography">Typography</Link>
                    </GoASideMenu>
                </section>

                <main className="main design-tokens">
                    <GoASpacer vSpacing="xs"/>
                    <section>
                        <Outlet/>
                        <GoASpacer vSpacing="3xl"/>
                        <div className="support-info">
                            <SupportInfo/>
                        </div>
                    </section>
                    <GoASpacer vSpacing="3xl"/>
                </main>

            </div>
        </>
    )
}

export default DesignTokenLayout;
