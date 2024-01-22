// Home.js
import React, { useState } from "react";
import Styles from "./styles/HomeStyles.module.css";

import HomeLeft from "./HomeLeftBox/HomeLeft";
import HomeRight from "./HomeRightBox/HomeRight";
import HomeMid from "./HomeMidBox/HomeMid";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className={Styles.outerScreen}>
			<div className={Styles.authButtons}>
				<Link to={localStorage.getItem("token") ? "/messages" : "/auth/login"}>
					<button className="btn btn-primary" style={{ color: "white" }}>
						{localStorage.getItem("token") ? "Chat" : "Login"}
					</button>
				</Link>
				<Link
					to={localStorage.getItem("token") ? "/auth/login" : "/auth/register"}
				>
					<button className="btn btn-warning" style={{ color: "white" }}>
						{localStorage.getItem("token") ? "Logout" : "Register"}
					</button>
				</Link>
			</div>
			<div className={Styles.innerScreen}>
				{/*home left */}
				<HomeLeft />

				{/*home mid */}
				<HomeMid />

				{/*home right */}
				<HomeRight />
			</div>
		</div>
	);
}

export default Home;
