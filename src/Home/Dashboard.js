
import SideBar from '../components/Sidebar'; 
import Header  from '../components/Header';

const Dashbaord = () => {  
    return ( 
 <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">   
        <SideBar />

      <div class="layout-page">  
        <Header /> 

        <div class="content-wrapper">    

        <div class="container-xxl flex-grow-1 container-p-y">
             
          <div class="row">

              {/* analytics */}
             <div class="col-lg-6 col-md-12 mb-4">
                  <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="card-title mb-0">Dashbaord Analytics</h5>
                      <div class="dropdown">
                        <button
                          class="btn p-0"
                          type="button"
                          id="analyticsOptions"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="analyticsOptions">
                          <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                          <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                          <a class="dropdown-item" href="javascript:void(0);">Share</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body pb-2">
                      <div class="d-flex justify-content-around align-items-center flex-wrap mb-4">
                        <div class="user-analytics text-center me-2">
                          <i class="bx bx-user me-1"></i>
                          <span>Users</span>
                          <div class="d-flex align-items-center mt-2">
                            <div class="chart-report" data-color="success" data-series="35"></div>
                            <h3 class="mb-0">61K</h3>
                          </div>
                        </div>
                        <div class="sessions-analytics text-center me-2">
                          <i class="bx bx-pie-chart-alt me-1"></i>
                          <span>Sessions</span>
                          <div class="d-flex align-items-center mt-2">
                            <div class="chart-report" data-color="warning" data-series="76"></div>
                            <h3 class="mb-0">92K</h3>
                          </div>
                        </div>
                        <div class="bounce-rate-analytics text-center">
                          <i class="bx bx-trending-up me-1"></i>
                          <span>Bounce Rate</span>
                          <div class="d-flex align-items-center mt-2">
                            <div class="chart-report" data-color="danger" data-series="65"></div>
                            <h3 class="mb-0">72.6%</h3>
                          </div>
                        </div>
                      </div>
                      <div id="analyticsBarChart"></div>
                    </div>
                  </div>
                </div>
             </div>   
               
               <div class="d-flex align-items-center"> 
              <div class="col-xl-8 col-12 mb-4">
                  <div class="card">
                    <div class="row row-bordered m-0">
                      {/* <!-- Order Summary --> */}
                      <div class="col-md-8 col-12 px-0">
                        <div class="card-header d-flex justify-content-between align-items-center">
                          <h5 class="card-title mb-0">Weekly Order Summary</h5>
                          <div class="dropdown">
                            <button
                              class="btn p-0"
                              type="button"
                              id="orderSummaryOptions"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orderSummaryOptions">
                              <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                              <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                              <a class="dropdown-item" href="javascript:void(0);">Share</a>
                            </div>
                          </div>
                        </div>
                        <div class="card-body p-0">
                          <div id="orderSummaryChart"></div>
                        </div>
                      </div>
                      {/* <!-- Sales History --> */}
                      <div class="col-md-4 col-12 px-0">
                        <div class="card-header d-flex justify-content-between align-items-center">
                          <h5 class="card-title mb-0">Sales Overview</h5>
                          <div class="dropdown">
                            <button
                              class="btn p-0"
                              type="button"
                              id="salesOverviewOptions"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="salesOverviewOptions">
                              <a class="dropdown-item" href="javascript:void(0);">Select All</a>
                              <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                              <a class="dropdown-item" href="javascript:void(0);">Share</a>
                            </div>
                          </div>
                        </div>
                        <div class="card-body">
                          <h6 class="mt-1">Last Week</h6>
                          <p class="mb-4">Performance 45% 🤩 better compare to last month</p>
                          <ul class="list-unstyled m-0 pt-0">
                            <li class="mb-4">
                              <div class="d-flex align-items-center mb-2">
                                <div class="avatar avatar-sm flex-shrink-0 me-2">
                                  <span class="avatar-initial rounded bg-label-primary"
                                    ><i class="bx bx-trending-up"></i
                                  ></span>
                                </div>
                                <div>
                                  <p class="mb-0 lh-1 text-muted text-nowrap">Earnings This Month</p>
                                  <small class="fw-semibold text-nowrap">$84,789</small>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="d-flex align-items-center mb-2">
                                <div class="avatar avatar-sm flex-shrink-0 me-2">
                                  <span class="avatar-initial rounded bg-label-success"
                                    ><i class="bx bx-dollar"></i
                                  ></span>
                                </div>
                                <div>
                                  <p class="mb-0 lh-1 text-muted text-nowrap">Average Daily Sales</p>
                                  <small class="fw-semibold text-nowrap">$12,398</small>
                                </div>
                              </div>
                             
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
                {/* latest update */}
                <div class="col-md-6 col-lg-6 col-xl-4 col-xl-4 mb-4 space">
                  <div class="card">
                    <div class="card-header d-flex align-items-center justify-content-between mb-3">
                      <h5 class="card-title mb-0">Latest Update</h5>
                      <div class="dropdown">
                        <button
                          class="btn btn-sm btn-outline-secondary dropdown-toggle"
                          type="button"
                          id="orederStatistics"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          2021
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                          <a class="dropdown-item" href="javascript:void(0);">2020</a>
                          <a class="dropdown-item" href="javascript:void(0);">2021</a>
                          <a class="dropdown-item" href="javascript:void(0);">2022</a>
                        </div>
                      </div>
                    </div>
                    <div class="card-body">
                      <ul class="p-0 m-0">
                        <li class="d-flex mb-4">
                          <div class="avatar avatar-sm flex-shrink-0 me-3">
                            <span class="avatar-initial rounded-circle bg-label-primary"
                              ><i class="bx bx-cube"></i
                            ></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <p class="mb-0 lh-1">Total Products</p>
                              <small class="text-muted">2k New Products</small>
                            </div>
                            <div class="item-progress">10k</div>
                          </div>
                        </li>
                        <li class="d-flex mb-4">
                          <div class="avatar avatar-sm flex-shrink-0 me-3">
                            <span class="avatar-initial rounded-circle bg-label-info"
                              ><i class="bx bx-pie-chart-alt"></i
                            ></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <p class="mb-0 lh-1">Total Sales</p>
                              <small class="text-muted">39k New Sales</small>
                            </div>
                            <div class="item-progress">26M</div>
                          </div>
                        </li>
                        <li class="d-flex mb-4">
                          <div class="avatar avatar-sm flex-shrink-0 me-3">
                            <span class="avatar-initial rounded-circle bg-label-danger"
                              ><i class="bx bx-credit-card"></i
                            ></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <p class="mb-0 lh-1">Total Revenue</p>
                              <small class="text-muted">43k New Revenue</small>
                            </div>
                            <div class="item-progress">15M</div>
                          </div>
                        </li>
                        <li class="d-flex">
                          <div class="avatar avatar-sm flex-shrink-0 me-3">
                            <span class="avatar-initial rounded-circle bg-label-success"
                              ><i class="bx bx-dollar"></i
                            ></span>
                          </div>
                          <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div class="me-2">
                              <p class="mb-0 lh-1">Total Cost</p>
                              <small class="text-muted">Total Expenses</small>
                            </div>
                            <div class="item-progress">2B</div>
                          </div>
                        </li>
                      </ul>
                    </div> 
                  </div> 

                </div>
          
          
                </div>
          
           </div>

        </div>

      </div>
      
    </div> 
 </div>
    );
} 

export default Dashbaord;