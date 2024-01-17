import React from 'react'
import './Page3.css'

function Page3() {

    // let b = document.querySelectorAll(".elem")
    // b.forEach(function (e) {
    //     console.log(e)
    //     e.addEventListener("mouseenter", function () {
    //         let c = e.getAttribute("data-image")
    //         fix.style.backgroundImage = `url(${c})`
    //     })

    //})
    return (
        <>
            <div id="page3">
                <div id="page2-down">
                    <div class="Gola"></div>
                    <h6>
                        FEATURED PROJECTS
                    </h6>
                </div>
                <div id="elem-container">
                    <div class="elem"
                        data-image="https://images.unsplash.com/photo-1705002455875-29da8631d626?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8">
                        <div class="overlay"></div>
                        <h2>SOHO 2023</h2>
                        <div class="side">
                            <h5>CONVERSE</h5>
                            <h5>Environment</h5>
                        </div>
                    </div>
                    <div class="elem"
                        data-image="https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D">
                        <div class="overlay"></div>
                        <h2>Air 12021</h2>
                        <div class="side">
                            <h5>NIKE</h5>
                            <h5>Environment</h5>
                        </div>
                    </div>

                    <div class="elem"
                        data-image="https://images.unsplash.com/photo-1705077111154-94a4a210461e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D">
                        <div class="overlay"></div>
                        <h2>NYFW Popup</h2>
                        <div class="side">
                            <h5>AFTERPAY</h5>
                            <h5>Experiential</h5>
                        </div>
                    </div>

                    <div class="elem"
                        data-image="https://images.unsplash.com/photo-1703981933962-1367fb375d7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D">
                        <div class="overlay"></div>
                        <h2>SOHO NYC</h2>
                        <div class="side">
                            <h5>ARC'TERYX</h5>
                            <h5>Environment</h5>
                        </div>
                    </div>

                    <div class="elem"
                        data-image="https://images.unsplash.com/photo-1704993237481-f073025181e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D">
                        <div class="overlay"></div>
                        <h2>Makers Studio HOI</h2>
                        <div class="side">
                            <h5>NIKE</h5>
                            <h5>Experiential</h5>
                        </div>
                    </div>



                    <div class="elem"
                        data-image="https://images.unsplash.com/photo-1704981103922-3d80a026922e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OXx8fGVufDB8fHx8fA%3D%3D">
                        <div class="overlay"></div>
                        <h2>50th Anniversary</h2>
                        <div class="side">
                            <h5>NIKE</h5>
                            <h5>Environment</h5>
                        </div>
                    </div>
                    <div class="elem"
                        data-image="https://plus.unsplash.com/premium_photo-1682339539425-7380649a0864?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D">
                        <div class="overlay"></div>
                        <h2>Play New Kidvision</h2>
                        <div class="side">
                            <h5>NIKE</h5>
                            <h5>Environment</h5>
                        </div>
                    </div>

                </div>
                <div id="Project-button">

                    <h4>
                        <div><a href="">All Projects</a>
                            <i class="ri-arrow-right-line"></i>
                        </div>
                    </h4>



                </div>

            </div>
        </>
    )
}

export default Page3
