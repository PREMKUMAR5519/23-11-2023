import React from 'react'
import All from './All'
import Data from './Data'

function Oneplus() {
  return (
    <div>
      <img className="oneplus"src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MobileAccessories/OnePlus_accessories/PC_accesories_banner._CB443675846_.jpg" alt="" />
      <Data one ="nav link-dark" two="nav link-dark" three="nav link-danger" four="nav link-dark"/>
      <div class="card-group">
                <div class="card mb-3" style={{ width: '500px'}}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY327_FMwebp_QL65_.jpg" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div  style={{paddingLeft:'40px'}} class="card-body">
                                <h5  class="card-title"> Nord CE 3 5G</h5>
                                <p class="card-text">RS.68,999 </p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="card mb-3" style={{ width: '500px' }}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UY327_FMwebp_QL65_.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"> Nord N20 SE</h5>
                                <p class="card-text">RS.60,000</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>

                        </div>
                    </div>


                </div>
                <div class="card mb-3" style={{ width: '500px' }}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/81gpCfWufkL._AC_UY327_FMwebp_QL65_.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">11R 5G</h5>
                                <p class="card-text">RS.21,000</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
    </div>
    
  )
}

export default Oneplus