import React,{useState} from 'react'

export default function About() {

    const[myStyle,setMyStyle]= useState({
        color:'red',
        backgroundColor:'lightgreen'
     
    });
   const[btnText,setBtnText] =useState("Enable To Dark Mode");

   let toggleChange = ()=>{
      if (myStyle.color === 'red'){
          setMyStyle({
            color:'white',
            backgroundColor:'black'

          })
          setBtnText("Enable To Dark Mode");

    

      }
      else{
          setMyStyle({
            color:'red',
            backgroundColor:'lightgreen'
          })
      }
      setBtnText("Enable To Light Mode");

    }
    return (

        <div className='container my-3'style={myStyle}>

            <h1>About Us</h1>
            {/* <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                Product description
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in">
                        <div className="panel-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, ipsa. Tenetur officia esse iusto veniam fugiat in id cupiditate distinctio veritatis! Asperiores explicabo cupiditate cumque natus quasi fugit, voluptates ipsum eos omnis! Libero numquam voluptatum earum. Alias sequi voluptate a! Beatae repellat dolores ipsa neque animi minus dolore, odit cupiditate at enim necessitatibus quas reiciendis aperiam et nihil laboriosam magnam distinctio ex nisi qui itaque quam. Iste id accusamus nihil quae aspernatur libero? Maiores voluptatibus, vel ad sint laboriosam repellat id et accusamus dolorum aliquid sequi nisi laborum? Iusto, cum.
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                Reviews
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem ab eos in, fugit rerum ex, sequi iure sunt quos cumque id ut? Tenetur assumenda dolor quibusdam illum, eaque repudiandae maiores inventore. Culpa corrupti nemo dignissimos numquam eveniet iste architecto laboriosam! Distinctio labore nobis aspernatur architecto officia exercitationem doloremque itaque provident voluptates facilis veritatis ab porro nisi, earum vitae impedit animi perspiciatis a soluta inventore rerum assumenda. Fugit provident repellendus placeat earum consequatur voluptatum consectetur blanditiis dolorum illum deserunt ut dolor culpa eveniet a, modi omnis. Dolorem ea eaque at!
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn my-3">

            <button onClick={toggleChange}type="button" className="btn-btn-primary">{btnText}</button>

            </div>
        </div>
    )
}
