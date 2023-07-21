import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBRipple,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarNav className='me-auto ps-lg-0' style={{ paddingLeft: '0.15rem' }}>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#'>
              Regular link
            </MDBNavbarLink>
          </MDBNavbarItem>

          <MDBNavbarItem className='position-static'>
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link'>
                Mega menu
              </MDBDropdownToggle>
              <MDBDropdownMenu
                className='mt-0 w-100 justify-content-center'
                style={{
                  borderTopLeftRadius: '0',
                  borderTopRightRadius: '0',
                }}
              >
                <MDBContainer>
                  <MDBRow className='my-4'>
                    <MDBCol md='12' xl='6' className='mb-4 col-lg-0'>
                      <p
                        className='
                  text-uppercase
                  font-weight-bold
                  text-center
                  d-flex
                  justify-content-center
                  align-items-center
                '
                      >
                        
                      </p>
                      <MDBRow className='gx-4'>
                        <MDBCol md='6' className='mb-4'>
                          <MDBRipple
                            rippleTag='div'
                            rippleColor='light'
                            className='bg-image hover-overlay shadow-1-strong rounded mb-4'
                          >
                            <img src='https://mdbcdn.b-cdn.net/img/new/slides/080.webp' className='img-fluid' />
                            <a href='#!'>
                              <div
                                className='mask'
                                style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                              ></div>
                            </a>
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol md='6' className='mb-3'>
                          <p className='text-muted'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                            eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                            sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                          </p>
                          <button type='button' className='btn btn-primary'>
                            Read more
                          </button>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md='6' xl='3' className='mb-4 mb-md-0'>
                      <p className='text-uppercase font-weight-bold'>Explicabo voluptas</p>
                      <MDBRipple
                        rippleTag='div'
                        rippleColor='light'
                        className='bg-image hover-overlay shadow-1-strong rounded mb-4'
                      >
                        <img src='https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp' className='img-fluid' />
                        <a href='#!'>
                          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                      </MDBRipple>
                      <div className='d-flex justify-content-between'>
                        <a href='' className='text-info'>
                          <MDBIcon icon='plane' className='pe-1'></MDBIcon>Travels
                        </a>
                        <p>
                          <u>15.07.2020</u>
                        </p>
                      </div>
                      <a href='' className='text-dark'>
                        <h5>This is title of the news</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iste aliquid. Sed id
                          nihil magni, sint vero provident esse numquam perferendis ducimus dicta adipisci iusto
                          nam temporibus modi animi laboriosam?
                        </p>
                      </a>
                    </MDBCol>
                    <MDBCol md='6' xl='3'>
                      <p className='text-uppercase font-weight-bold'>Explicabo voluptas</p>
                      <a href='' className='text-dark'>
                        <MDBRow className='mb-4 border-bottom pb-2'>
                          <MDBCol col='3'>
                            <img
                              src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'
                              className='img-fluid shadow-1-strong rounded'
                              alt='Hollywood Sign on The Hill'
                            />
                          </MDBCol>
                          <MDBCol col='9'>
                            <p className='mb-2'>
                              <strong>Lorem ipsum dolor sit amet</strong>
                            </p>
                            <p>
                              <u>15.07.2020</u>
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>
                      <a href='' className='text-dark'>
                        <MDBRow className='mb-4 border-bottom pb-2'>
                          <MDBCol col='3'>
                            <img
                              src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'
                              className='img-fluid shadow-1-strong rounded'
                              alt='Palm Springs Road'
                            />
                          </MDBCol>
                          <MDBCol col='9'>
                            <p className='mb-2'>
                              <strong>Lorem ipsum dolor sit amet</strong>
                            </p>
                            <p>
                              <u>15.07.2020</u>
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>
                      <a href='' className='text-dark'>
                        <MDBRow className='mb-4 border-bottom pb-2'>
                          <MDBCol col='3'>
                            <img
                              src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp'
                              className='img-fluid shadow-1-strong rounded'
                              alt='Los Angeles Skyscrapers'
                            />
                          </MDBCol>
                          <MDBCol col='9'>
                            <p className='mb-2'>
                              <strong>Lorem ipsum dolor sit amet</strong>
                            </p>
                            <p>
                              <u>15.07.2020</u>
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>
                      <a href='' className='text-dark'>
                        <MDBRow className='mb-4 border-bottom pb-2'>
                          <MDBCol col='3'>
                            <img
                              src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp'
                              className='img-fluid shadow-1-strong rounded'
                              alt='Skyscrapers'
                            />
                          </MDBCol>
                          <MDBCol col='9'>
                            <p className='mb-2'>
                              <strong>Lorem ipsum dolor sit amet</strong>
                            </p>
                            <p>
                              <u>15.07.2020</u>
                            </p>
                          </MDBCol>
                        </MDBRow>
                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}