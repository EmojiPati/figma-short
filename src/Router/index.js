import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import HomeScreenshot from '../Components/HomeScreenshot';
import Frame8 from '../Components/Frame8';
import Frame12 from '../Components/Frame12';
import Frame1 from '../Components/Frame1';
import Frame11 from '../Components/Frame11';
import Frame10 from '../Components/Frame10';
import Property1Variant8 from '../Components/Property1Variant8';
import Frame1_1 from '../Components/Frame1_1';
import Property1ip from '../Components/Property1ip';
import Property1Nodejs from '../Components/Property1Nodejs';
import Property1Postgres from '../Components/Property1Postgres';
import Property1Prisma from '../Components/Property1Prisma';
import Property1gql from '../Components/Property1gql';
import Property1React from '../Components/Property1React';
import Property1pckd from '../Components/Property1pckd';
import Property1Variant9 from '../Components/Property1Variant9';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/homescreenshot"><HomeScreenshot /></Route>
				<Route exact path="/frame8"><Frame8 /></Route>
				<Route exact path="/frame12"><Frame12 /></Route>
				<Route exact path="/frame1"><Frame1 /></Route>
				<Route exact path="/frame11"><Frame11 /></Route>
				<Route exact path="/frame10"><Frame10 /></Route>
				<Route exact path="/property1variant8"><Property1Variant8 /></Route>
				<Route exact path="/frame1_1"><Frame1_1 /></Route>
				<Route exact path="/property1ip"><Property1ip /></Route>
				<Route exact path="/property1nodejs"><Property1Nodejs /></Route>
				<Route exact path="/property1postgres"><Property1Postgres /></Route>
				<Route exact path="/property1prisma"><Property1Prisma /></Route>
				<Route exact path="/property1gql"><Property1gql /></Route>
				<Route exact path="/property1react"><Property1React /></Route>
				<Route exact path="/property1pckd"><Property1pckd /></Route>
				<Route exact path="/property1variant9"><Property1Variant9 /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;