import React, {Component} from 'react';
import {
    Badge, 
    Col, 
    Nav, 
    NavItem, 
    NavLink, 
    Row, 
    TabContent,
    Card,
    CardHeader,
    CardBody, 
    Table,
    TabPane} from 'reactstrap';
import classnames from 'classnames';

class detailkaryawan extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

//   lorem() {
//     return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
//   }

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
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Simple Table
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <td>Nama Lengkap</td>
                    <td>:</td>
                    <td>Diah Hasna Salsabila</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>NIK</td>
                    <td>:</td>
                    <td>160319079</td>
                  </tr>
                  <tr>
                    <td>No. KTP</td>
                    <td>:</td>
                    <td>3277035603960001</td>
                  </tr>
                  <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td>Perempuan</td>
                  </tr>
                  <tr>
                    <td>Tempat Lahir</td>
                    <td>:</td>
                    <td>Cimahi</td>
                  </tr>
                  <tr>
                    <td>Tanggal Lahir</td>
                    <td>:</td>
                    <td>16-03-1996</td>
                  </tr>
                  <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>Komp. Puri Cipageran Indah 1 Blok H3 No. 30 Cimahi Utara</td>
                  </tr>
                  <tr>
                    <td>Kode Pos</td>
                    <td>:</td>
                    <td>40511</td>
                  </tr>
                  <tr>
                    <td>No. Telepon</td>
                    <td>:</td>
                    <td>087737433243</td>
                  </tr>
                  <tr>
                    <td>Tanggal Lahir</td>
                    <td>:</td>
                    <td>16-03-1996</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>dhasnasalsabila@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Linked In</td>
                    <td>:</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Agama</td>
                    <td>:</td>
                    <td>Islam</td>
                  </tr>
                  <tr>
                    <td>Kesehatan</td>
                    <td>:</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <td>Objektif</td>
                    <td>:</td>
                    <td>Front End Programmer</td>
                  </tr>
                  <tr>
                    <td>Level</td>
                    <td>:</td>
                    <td>Junior</td>
                  </tr>
                  <tr>
                    <td>Penempatan</td>
                    <td>:</td>
                    <td>Bandung</td>
                  </tr>
                  <tr>
                    <td>Awal Kontrak</td>
                    <td>:</td>
                    <td>04-03-2019</td>
                  </tr>
                  <tr>
                    <td>Akhir Kontrak</td>
                    <td>:</td>
                    <td>24-05-2020</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col xs="12" lg="6">
            <Card>
            <CardBody>
                <Table responsive bordered>
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
                    <td>SDN Cimahi Mandiri 1</td>
                    <td>-</td>
                    <td>SD / MI</td>
                    <td>2002</td>
                    <td>2008</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>SMPN 1 Cimahi</td>
                    <td>-</td>
                    <td>SLTP / MTs</td>
                    <td>2008</td>
                    <td>2011</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>SMAN 1 Cimahi</td>
                    <td>IPA</td>
                    <td>SLTA / SMK / MA</td>
                    <td>2011</td>
                    <td>2014</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Universitas Jenderal Achmad Yani</td>
                    <td>Informatika</td>
                    <td>Sarjana</td>
                    <td>2014</td>
                    <td>2018</td>
                </tr>
                </tbody>
                </Table>
            </CardBody>
            </Card>
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
          <Col xs="12" md="12" className="mb-7">
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

export default detailkaryawan;
