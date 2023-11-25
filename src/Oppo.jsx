import React from 'react'
import Data from './Data'
import oppo from './oppo.jpg'
import './index.css'

function Oppo() {
    return (
        <div>
            <div >
                <img className='oppo' src={oppo} alt="" />
            </div>
            <div>
                <Data one="nav link-dark" two="nav link-dark" three="nav link-dark" four="nav link-success" />
            </div>
            <div class="card-group">
                <div class="card mb-3" style={{ width: '500px' }}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/81ww2RdmvzL._AC_UY327_FMwebp_QL65_.jpg" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Oppo Find N2 Flip (Moonlit Purple)</h5>
                                <p class="card-text">RS.68,999 </p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="card mb-3" style={{ width: '500px' }}>
                    <div style={{ width: '500px' }} class="row g-0">
                        <div class="col-md-4">
                            <img style={{ width: '200px' }} src="https://m.media-amazon.com/images/I/41sw5uQabgL._AC_UY327_FMwebp_QL65_.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Oppo Reno10 5G Silvery Grey 256 GB 8 GB</h5>
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
                                <h5 class="card-title">
A58 (Glowing Black, 6GB RAM, 128GB Storage)</h5>
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

export default Oppo