import "./style.css";
import "./chooseus.css";
import whychooseusbanner from '../images/whychooseusbanner.jpg';
import HomepageChoose from "../cards/HomepageChoose";
import data from "../../arraydata/HomepageChoosearray"
import SplitText from '../SingleComponents/SplitText';

function chooseus() {  
    return (
        <> 
            {/* Why Choose Us Start */}
            <div className="main-body">
            <div className="choose-body">
                <div className="choose-body-box">
                    <h4 className="choose-body-header1">OUR BENEFITS</h4>
                    {/* <h2 className="choose-body-header2">Why Should Choose Us?</h2> */}
                    <SplitText text="Why Should Choose Us?" className="choose-body-header2" delay={50}/>
                    <div className="choose-body-why-main-box">
                    <div className="choose-body-why-box">

                    {data.map((data,index)=>(<HomepageChoose key={index} icon={data.icon} head={data.head} para={data.para}/>))}       
                    </div>
                    </div>
                </div>
                <div className="whychoosebanner"><img src={whychooseusbanner} alt="banner"/></div>
                
            </div>
            </div>
            {/* Why Choose Us End */}
        </>
    )
}

export default chooseus;
