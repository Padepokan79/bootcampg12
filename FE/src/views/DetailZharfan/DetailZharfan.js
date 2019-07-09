import React, {Component} from 'react';
import {Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table} from 'reactstrap';
import classnames from 'classnames';

class DetailZharfan extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  lorem() {
    return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <Row>
						<Col>
							<Table> 
								<tbody>
									<tr>
										<th>Nama Lengkap</th>
										<td>Zharfan Nugraha Permadi</td>										
									</tr>
									<tr>
										<th>No KTP</th>
										<td>3204051804980003</td>
									</tr>
									<tr>
										<th>Jenis Kelamin</th>
										<td>Laki-Laki</td>
									</tr>
									<tr>
										<th>Tempat Lahir</th>
										<td>Bandung</td>
									</tr>
									<tr>
										<th>Tanggal Lahir</th>
										<td>18-04-1998</td>
									</tr>
									<tr>
										<th>Alamat</th>
										<td>Komplek Permata Biru Blok U no 93, RT02/R23, Desa Cinunuk, Kecamatan Cileunyi, Kabupaten Bandung</td>
									</tr>
									<tr>
										<th>Kode Pos</th>
										<td>40624</td>
									</tr>
									<tr>
										<th>No Telepon</th>
										<td>087743579538</td>
									</tr>
									<tr>
										<th>Email</th>
										<td>zharfannp@gmail.com</td>
									</tr>
									<tr>
										<th>Agama</th>
										<td>Islam</td>
									</tr>
									<tr>
										<th>Kesehatan</th>
										<td>Very Good</td>
									</tr>
									<tr>
										<th>Objektif</th>
										<td>A position as FULL STACK DEVELOPER</td>
									</tr>
									<tr>
										<th>Level</th>
										<td>Junior</td>
									</tr>
									<tr>
										<th>Status</th>
										<td>Contract</td>
									</tr>
									<tr>
										<th>Penempatan</th>
										<td>Bandung</td>
									</tr>
									<tr>
										<th>Awal Kontrak</th>
										<td>13-05-2018</td>
									</tr>
									<tr>
										<th>Akhir Kontrak</th>
										<td>13-05-2019</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
        </TabPane>
				<TabPane tabId="2">
					<Row>
						<Col>
							<Table hover bordered striped responsive size="sm">
								<thead>
									<tr>
										<th>No</th>
										<th>Nama Sekolah</th>
										<th>Jurusan</th>
										<th>Tingkat</th>
										<th>Tahun Masuk</th>
										<th>Tahun Keluar</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>SD Labschool UPI CIBIRU</td>
										<td>-</td>
										<td>SD</td>
										<td>2004</td>
										<td>2009</td>
									</tr>
									<tr>
										<td>2</td>
										<td>SMPN 17 Bandung</td>
										<td>-</td>
										<td>SMP</td>
										<td>2009</td>
										<td>2012</td>
									</tr>
									<tr>
										<td>3</td>
										<td>SMAN 23 Bandung</td>
										<td>IPA</td>
										<td>SMA</td>
										<td>2012</td>
										<td>2015</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Universitas Padjadjaran</td>
										<td>Teknik Informatika</td>
										<td>S1</td>
										<td>2015</td>
										<td>2019</td>
									</tr>
								</tbody>
							</Table>
						</Col>
					</Row>
				</TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  Data Pribadi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Pendidikan
                </NavLink>
              </NavItem>
            </Nav>
						<TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DetailZharfan;
