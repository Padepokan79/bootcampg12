import React, { Component } from 'react'
import {Col, Nav, NavItem, NavLink, TabContent, TabPane, Card, Table} from 'reactstrap'

export default class Agung extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: new Array(4).fill('1'),
          name: 'Agung Rizki Hermawan',
          nik: '020718280',
          noKTP: '3273042802010004',
          gender: 'Laki-Laki',
          birthPlace: 'Bandung',
          birthdate: '2019-02-28',
          address: 'Gg.Madesa 3 Kopo Bandung Jawa Barat',
          postalCode: '40233',
          phoneNumber: '089627771628',
          email: 'agungrizki2802@gmail.com',
          linkedIn: '-',
          religion: 'Islam',
          healty: 'Good',
          objektif: 'A position as Front End Programmer',
          level: 'Junior',
          status: 'Contract',
          workPlace: 'Bandung',
          beginContract: '2019-05-13',
          endContract: '2019-08-07',
          position: '???',
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
              <div>
            <Table responsive Style='font-size:16px;'>
                <tr>
                    <td>Nama Lengkap</td>
                    <td>:</td>
                    <td>{this.state.name}</td>
                </tr>
                <tr>
                    <td>NIK</td>
                    <td>:</td>
                    <td>{this.state.nik}</td>
                </tr>
                <tr>
                    <td>No. KTP</td>
                    <td>:</td>
                    <td>{this.state.noKTP}</td>
                </tr>
                <tr>
                    <td>Jenis Kelamin	</td>
                    <td>:</td>
                    <td>{this.state.gender}</td>
                </tr>
                <tr>
                    <td>Tempat Lahir	</td>
                    <td>:</td>
                    <td>{this.state.birthPlace}</td>
                </tr>
                <tr>
                    <td>Tanggal Lahir	</td>
                    <td>:</td>
                    <td>{this.state.birthdate}</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>{this.state.address}</td>
                </tr>
                <tr>
                    <td>Kode POS</td>
                    <td>:</td>
                    <td>{this.state.postalCode}</td>
                </tr>
                <tr>
                    <td>No Telepon</td>
                    <td>:</td>
                    <td>{this.state.postalCode}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>{this.state.email}</td>
                </tr>
                <tr>
                    <td>LinkedIn</td>
                    <td>:</td>
                    <td>{this.state.linkedIn}</td>
                </tr>
                <tr>
                    <td>Agama</td>
                    <td>:</td>
                    <td>{this.state.religion}</td>
                </tr>
                <tr>
                    <td>Kesehatan</td>
                    <td>:</td>
                    <td>{this.state.healty}</td>
                </tr>
                <tr>
                    <td>Objektif</td>
                    <td>:</td>
                    <td>{this.state.objektif}</td>
                </tr>
                <tr>
                    <td>Level</td>
                    <td>:</td>
                    <td>{this.state.level}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>{this.state.status}</td>
                </tr>
                <tr>
                    <td>Penempatan</td>
                    <td>:</td>
                    <td>{this.state.workPlace}</td>
                </tr>
                <tr>
                    <td>Awal Kontrak</td>
                    <td>:</td>
                    <td>{this.state.beginContract}</td>
                </tr>
                <tr>
                    <td>Akhir Kontrak</td>
                    <td>:</td>
                    <td>{this.state.endContract}</td>
                </tr>
                <tr>
                    <td>Posisi</td>
                    <td>:</td>
                    <td>{this.state.position}</td>
                </tr>
            </Table>
        </div>
            </TabPane>
            <TabPane tabId="2">
              <Table hover bordered responsive  Style='text-align:center;'>
                  <tr>
                      <th>No</th>
                      <th>Nama Sekolah</th>
                      <th>Jurusan</th>
                      <th>Tingkat</th>
                      <th>Tahun Masuk</th>
                      <th>Tahun Keluar</th>
                  </tr>
                  <tr>
                      <th>1</th>
                      <td>SDN Citarip Barat 1 Bandung</td>
                      <td>-</td>
                      <td>SD/MI</td>
                      <td>2007</td>
                      <td>2013</td>
                  </tr>
                  <tr>
                      <th>2</th>
                      <td>SMPN 24 Bandung</td>
                      <td>-</td>
                      <td>SLTP/MTs</td>
                      <td>2013</td>
                      <td>2016</td>
                  </tr>
                  <tr>
                      <th>3</th>
                      <td>SMKN 4 Bandung</td>
                      <td>Rekayasa Perangkat Lunak</td>
                      <td>SLTA/SMK/MA</td>
                      <td>2016</td>
                      <td>2019</td>
                  </tr>

              </Table>
            </TabPane>
          </>
        );
      }
    render() {
        return (
            <div>
                <Card>
                    <br></br>
                <Col xs="12" md="12">
                    <Nav tabs>
                    <NavItem>
                        <NavLink active={this.state.activeTab[0] === '1'} onClick={() => { this.toggle(0, '1'); }}>
                        Data diri
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={this.state.activeTab[0] === '2'} onClick={() => { this.toggle(0, '2'); }}>
                        Pendidikan
                        </NavLink>
                    </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab[0]}>
                    {this.tabPane()}
                    </TabContent>
                </Col>
                <br></br>
                </Card>
            </div>
        )
    }
}
