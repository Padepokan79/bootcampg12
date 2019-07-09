import React, { Component} from 'react';
import { Table, Card, CardBody, CardHeader, Col, Row,
        Nav, NavItem, NavLink, TabContent, TabPane,
        ButtonGroup,
        Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter,
        FormGroup,
        Input,
        InputGroup,
        InputGroupAddon,
        InputGroupText } from 'reactstrap';

class DataKaryawan extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(1).fill('1'),
    };
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
                <Col md="12">
                    <Table hover striped responsive Style="font-size:14px;">
                        <tr>
                            <td width="27%">Nama Lengkap</td>
                            <td width="2%;">:</td>
                            <td>Hadi Pramono</td>
                        </tr>
                        <tr>
                            <td width="27%">NIK</td>
                            <td width="2%;">:</td>
                            <td>2200013414</td>
                        </tr>
                        <tr>
                            <td width="27%">Nomor KTP</td>
                            <td width="2%;">:</td>
                            <td>17987828222193</td>
                        </tr>
                        <tr>
                            <td width="27%">Jenis Kelamin</td>
                            <td width="2%;">:</td>
                            <td>Laki-laki</td>
                        </tr>
                        <tr>
                            <td width="27%">Tempat Lahir</td>
                            <td width="2%;">:</td>
                            <td>Bandung</td>
                        </tr>
                        <tr>
                            <td width="27%">Tanggal Lahir</td>
                            <td width="2%;">:</td>
                            <td>09-07-2019</td>
                        </tr>
                        <tr>
                            <td width="27%">Alamat</td>
                            <td width="2%;">:</td>
                            <td>Jln. Podok Baru Kel. Cipageran Kec. Cimahi Utara Kota Cimahi</td>
                        </tr>
                        <tr>
                            <td width="27%">Kode POS</td>
                            <td width="2%;">:</td>
                            <td>40155</td>
                        </tr>
                        <tr>
                            <td width="27%">No Telepon</td>
                            <td width="2%;">:</td>
                            <td>0213-9784-1823</td>
                        </tr>
                        <tr>
                            <td width="27%">Email</td>
                            <td width="2%;">:</td>
                            <td>hadi.phee@gmail.com</td>
                        </tr>
                        <tr>
                            <td width="27%">Linked In</td>
                            <td width="2%;">:</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td width="27%">Agama</td>
                            <td width="2%;">:</td>
                            <td>Islam</td>
                        </tr>
                        <tr>
                            <td width="27%">Kesehatan</td>
                            <td width="2%;">:</td>
                            <td>Baik-baik saja</td>
                        </tr>
                        <tr>
                            <td width="27%">Objektif</td>
                            <td width="2%;">:</td>
                            <td>Bootcamp G12</td>
                        </tr>
                        <tr>
                            <td width="27%">Level</td>
                            <td width="2%;">:</td>
                            <td>Junior</td>
                        </tr>
                        <tr>
                            <td width="27%">Status</td>
                            <td width="2%;">:</td>
                            <td>Pelatihan</td>
                        </tr>
                        <tr>
                            <td width="27%">Penempatan</td>
                            <td width="2%;">:</td>
                            <td>Bandung</td>
                        </tr>
                        <tr>
                            <td width="27%">Awal Kontrak</td>
                            <td width="2%;">:</td>
                            <td>13-06-2019</td>
                        </tr>
                        <tr>
                            <td width="27%">Akhir Kontrak</td>
                            <td width="2%;">:</td>
                            <td>08-08-2019</td>
                        </tr>
                        <tr>
                            <td width="27%">Posisi</td>
                            <td width="2%;">:</td>
                            <td>Programmer</td>
                        </tr>
                    </Table>
                </Col>
            </Row>
        </TabPane>
        <TabPane tabId="2">
            <Table hover bordered striped responsive>
                <thead>
                <tr>
                  <th Style="text-align:center; width:6%;">No</th>
                  <th Style="text-align:center; width:30%;">Nama Sekolah</th>
                  <th Style="text-align:center; width:15%;">Jurusan</th>
                  <th Style="text-align:center; width:19%;">Tingkat</th>
                  <th Style="text-align:center; width:15%;">Tahun Masuk</th>
                  <th Style="text-align:center; width:15%;">Tahun Keluar</th>
                </tr>
                </thead>
                <tbody Style="text-align:center;">
                  <tr>
                    <td>1</td>
                    <td>SDN Cipageran Mandiri 1</td>
                    <td>-</td>
                    <td>SD / MI</td>
                    <td>2007</td>
                    <td>2013</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>SMP Negeri 5 Cimahi</td>
                    <td>-</td>
                    <td>SLTP / MTs</td>
                    <td>2013</td>
                    <td>2016</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>SMK Negeri 2 Cimahi</td>
                    <td>RPL</td>
                    <td>SLTA / SMK / MA</td>
                    <td>2016</td>
                    <td>2019</td>
                  </tr>
                </tbody>
            </Table>
        </TabPane>
        <TabPane tabId="3">
          TAB TIGA
        </TabPane>
        <TabPane tabId="4">
          TAB EMPAT
        </TabPane>
        <TabPane tabId="5">
          TAB LIMA
        </TabPane>
    </>
    );
  }

    
  render() {
    return (
      <Row>
        <Col xm="12">
          <Card>
            <CardHeader>
              <i className="fa fa-table"></i><strong>Tabel</strong>
            </CardHeader>
            <CardBody>
            <Col xs="12" md="12">
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
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Tab 3
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '4'}
                  onClick={() => { this.toggle(0, '4'); }}
                >
                  Tab 4
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '5'}
                  onClick={() => { this.toggle(0, '5'); }}
                >
                  Tab 5
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>   
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default DataKaryawan;