import React, { Component } from "react";
import moment from "moment";
import Header from "./components/Header";
import AddClocks from "./components/AddClocks";
import ClocksList from "./components/ClocksList";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			clocksList: [],
			timezoneUTC: null
		};
	}

	loadTime = () => {
		setInterval(() => {
			this.setState({
				timezoneUTC: moment().utc()
			});
		}, 1000);
	};

	componentDidMount() {
		this.loadTime();
	}

	handleAdd = clocks => {
		this.setState(prevState => ({
			clocksList: [...prevState.clocksList, clocks]
		}));
	};

	handleDelete = id => {
		this.setState(prevState => ({
			clocksList: prevState.clocksList.filter(clocks => clocks.id !== id)
		}));
	};

	componentWillUnmount() {
		clearInterval(this.loadTime);
	}

	render() {
		return (
			<div className="App">
				<Header />
				<div>
					<AddClocks handleAdd={this.handleAdd} />
					<ClocksList
						clocksList={this.state.clocksList}
						timezoneUTC={this.state.timezoneUTC}
						handleDelete={this.handleDelete}
					/>
				</div>
			</div>
		);
	}
}
export default App;
