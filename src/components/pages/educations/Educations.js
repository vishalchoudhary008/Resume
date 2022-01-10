import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>From</th>
								<th>When</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Good Shephred Public School</td>
								<td>2019</td>
								<td>
									<Link to='/https://www.goodshepherdpublicschool.in/' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Allen</td>
								<td> 2020</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>IIT ROORKEE</td>
								<td> 2021</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
