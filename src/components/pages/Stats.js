import React, {Component} from 'react'

class Stats extends Component {

    render(){
        return(
            <section className="statistics_area">
		<div className="container">
			<div className="row justify-content-lg-start justify-content-center">
				<div className="col-lg-2 col-md-3">
					<div className="statistics_item">
						<h3><span className="counter">100</span>+</h3>
						<p>Happy Customer</p>
					</div>
				</div>
				<div className="col-lg-2 col-md-3">
					<div className="statistics_item">
						<h3><span className="counter">500</span>+</h3>
						<p>Ticket Solved</p>
					</div>
				</div>
				<div className="col-lg-2 col-md-3">
					<div className="statistics_item">
						<h3><span className="counter">9</span>/10</h3>
						<p>Average Rating</p>
					</div>
				</div>
			</div>
		</div>
	</section>
        )
    }
}

export default Stats;