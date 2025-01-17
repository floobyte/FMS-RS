import './Partenr-With-us.css'

function PartnerPage() {
  return (
    <>
    <div className="partnerpage-main-main-div">


        {/* hersection  */}
        <div className="partner-main-herosection">
        <div className="partner-hero-content">
                    <h1>Join Us and Grow Your Business with Our Franchise</h1>
                    <p>Transform your food business with our innovative platform</p>
                    <a href="#apply-form" className="partner-btn-primary">Apply Now</a>
                </div>
        </div>



       {/* Why Partner with Us */}
       <section className="why-partner">
                <h2>Why Partner with Us?</h2>
                <div className="partner-card-main-div-benefits">
                    <div className="partner-card-benefit">
                        <img src="https://th.bing.com/th/id/OIP.BqUBRdRdKC9vzwwoETLtzAHaEn?rs=1&pid=ImgDetMain" alt="Business Model" />
                        <h3>Proven Business Model</h3>
                        <p>Join an established business model that's growing rapidly.</p>
                    </div>
                    <div className="partner-card-benefit">
                        <img src="https://www.bing.com/images/search?view=detailV2&ccid=zBv32YKi&id=4DEE046F96C191D5B7CF48AB5AE90CE0C3041088&thid=OIP.zBv32YKibOb17WLvb7wocAAAAA&mediaurl=https%3a%2f%2fwww.madgeek.in%2fwp-content%2fuploads%2f2023%2f10%2ffrom-chaos-to-order-success-stories-of-tech-driven-enterprise-solutions.jpg&exph=316&expw=474&q=Tech-Driven+Solution&simid=608027818035847037&FORM=IRPRST&ck=46615EEE87FC18C09BBCFE84E866F522&selectedIndex=2&itb=0" alt="Tech Solution" />
                        <h3>Tech-Driven Solution</h3>
                        <p>Access to cutting-edge food delivery technology for seamless orders.</p>
                    </div>
                    <div className="partner-card-benefit">
                        <img src="https://www.bing.com/images/search?view=detailV2&ccid=zBv32YKi&id=4DEE046F96C191D5B7CF48AB5AE90CE0C3041088&thid=OIP.zBv32YKibOb17WLvb7wocAAAAA&mediaurl=https%3a%2f%2fwww.madgeek.in%2fwp-content%2fuploads%2f2023%2f10%2ffrom-chaos-to-order-success-stories-of-tech-driven-enterprise-solutions.jpg&exph=316&expw=474&q=Tech-Driven+Solution&simid=608027818035847037&FORM=IRPRST&ck=46615EEE87FC18C09BBCFE84E866F522&selectedIndex=2&itb=0" alt="Support" />
                        <h3>Marketing Support</h3>
                        <p>Benefit from our marketing expertise and brand recognition.</p>
                    </div>
                </div>
            </section>


                    {/* Process Section */}
                    <section className="partner-process-main">
                <h2>How It Works</h2>
                <div className="steps">
                    <div className="step">
                        <h3>Step 1</h3>
                        <p>Fill the Franchise Application</p>
                    </div>
                    <div className="step">
                        <h3>Step 2</h3>
                        <p>Evaluate Your Location & Market</p>
                    </div>
                    <div className="step">
                        <h3>Step 3</h3>
                        <p>Sign Partnership Agreement</p>
                    </div>
                </div>
            </section>


                  {/* Application Form */}
                  <section id="apply-form" className="apply-form">
                <h2>Become Our Partner</h2>
                <form action="#">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="text" name="location" placeholder="Your Location" required />
                    <textarea name="message" placeholder="Why are you interested?" required></textarea>
                    <button type="submit" className="btn-primary">Submit Your Application</button>
                </form>
            </section>


    </div>
    </>
  )
}

export default PartnerPage