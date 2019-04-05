// Componente que lê os dados dos usuários do App
import React from 'react';
import { Table } from 'react-bootstrap';
import loadData from '../utils/load_data'


export default function UsersList (props) {
	const [items, loading] = loadData("http://localhost:3001/userlist")

	return (
		<div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
					<section>
						<div className="container">
							<div className="row">
								<h1>Users</h1>

								<Table responsive striped hover>
									<thead>
									    <tr>
									      <th>Nome</th>
									      <th>E-mail</th>
									      <th>Localização</th>
									      <th>Device</th>
									      <th>Local Clicado</th>
									    </tr>
									</thead>
									<tbody>
									{ loading ? (
										<tr>
											<td colSpan="5">
											Carregando...
											</td>
										</tr>
										) : (
										items.map(user =>
											<tr key={user._id}>
												<td>{user.name}</td>						
												<td>{user.email}</td>						
												<td>{user.userLocationLat + ' ' + user.userLocationLng}</td>
												<td>{user.userDevice}</td>
												<td>{user.userPlace}</td>
										    </tr>	
										)
										)
									}
									</tbody>
								</Table>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

