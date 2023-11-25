import React from 'react'
import Data from './Data'

function Iphone () {
  return (
    <div>
      <img className="iphone" src="https://www.apple.com/in/iphone-15-pro/images/overview/welcome/hero_endframe__ov6ewwmbhiqq_large.jpg" alt="" />
      <Data one ="nav link-dark" two="nav link-warning" three="nav link-dark" four="nav link-dark"/>
      <div class="card-group">
                <div class="card mb-3" style={{ width: '500px' }}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/619f09kK7tL._AC_UY327_FMwebp_QL65_.jpg" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div  style={{paddingLeft:'40px'}} class="card-body">
                                <h5  class="card-title"> 
iPhone 14 (128 GB)</h5>
                                <p class="card-text">RS.68,999 </p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="card mb-3" style={{ width: '500px' }}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">iPhone 15 (128 GB)</h5>
                                <p class="card-text">RS.77,900 </p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>

                        </div>
                    </div>


                </div>
                <div class="card mb-3" style={{ width: '500px' }}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY327_FMwebp_QL65_.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Apple iPhone 15 Pro Max</h5>
                                <p class="card-text">RS.1,57,900</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
    </div>
  )
}

export default Iphone