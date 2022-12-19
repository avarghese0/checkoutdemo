import { useEffect, useState } from "react";
import { DISCOUNT } from "../Constants";



function MainScreen() {

    const [checkout, setCheckout] = useState(false);


    const [discount, setDiscount] = useState("");

    const [policy, setPolicy] = useState({
        policyType: "Tools Insurance",
        coverLevel: "1000",
        typeOfCover: "Classic",
        annualPayment:53.88,
        excess:100,
        total:153.88
    })




    function proceed(e) {
        e.preventDefault();
        setCheckout((last) => !last);
        // console.log(checkout)
    }


    function applyDiscount(){
        console.log(DISCOUNT)

        if(DISCOUNT[discount]){

            let value = parseInt(policy.annualPayment) + policy.excess;
            let disValue = value - (value *  DISCOUNT[discount] /100) ;
             console.log(disValue)

            setPolicy(prev=>{
               return{ ...prev,total:disValue}
            })

            alert("Successfull Applied")
        }
        else{
            alert("Wrong Discount")
        }
        
    }

    return (
        <div className="split-screen">
            {checkout &&
                (<div className="container split-screen-item checkout-screen">
                    <button className="btn btn-back" onClick={(e) => { proceed(e) }}>{"<Back"}</button>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                                <form onSubmit={(e) => proceed(e)}>

                                    <div className="row">
                                        <h2 className="title"> Your Total Bill £{policy.total}</h2>

                                        <div className="col-50">
                                            <h3>Billing Address</h3>
                                            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
                                            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                                            <input type="text" id="email" name="email" placeholder="john@example.com" />
                                            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
                                            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                                            <input type="text" id="city" name="city" placeholder="New York" />

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="state">State</label>
                                                    <input type="text" id="state" name="state" placeholder="NY" />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="zip">Zip</label>
                                                    <input type="text" id="zip" name="zip" placeholder="10001" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-50">
                                            <h3>Payment</h3>
                                            <label htmlFor="fname">Accepted Cards</label>
                                            <div className="icon-container">
                                                <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                                                <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                                                <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                                                <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                                            </div>
                                            <label htmlFor="cname">Name on Card</label>
                                            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                            <label htmlFor="ccnum">Credit card number</label>
                                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                                            <label htmlFor="expmonth">Exp Month</label>
                                            <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="expyear">Exp Year</label>
                                                    <input type="text" id="expyear" name="expyear" placeholder="2018" />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <label>
                                        <input type="checkbox" name="sameadr" /> Shipping address same as
                                        billing
                                    </label>
                                    <button type="submit" className="btn btn-primary" onClick={(e) => proceed(e)}>  PAY</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>)
            }
            {!checkout && (<div className="container split-screen-item detail-screen">


                <div>
                    <h5 data-typo-variant="subheading2">Tools
                        insurance</h5>
                    <hr />
                    <p data-typo-variant="paragraph">We'll take
                        your payment in full today.</p>
                    <div>
                        <ul className="policy-grid">
                            <li>
                                <div data-typo-variant="paragraph">
                                    <p data-typo-variant="paragraph"><span
                                        style={{ color: "rgb(21, 26, 79)" }}>Policy
                                        type</span></p>
                                </div>
                                <p>
                                    <div data-typo-variant="paragraph">
                                        <p data-typo-variant="footer"><span
                                            style={{ color: "rgb(51, 51, 51)" }}>{policy.policyType}</span></p>
                                    </div>
                                </p>
                            </li>
                            <li>
                                <div data-typo-variant="paragraph">
                                    <p data-typo-variant="paragraph"><span
                                        style={{ color: "rgb(21, 26, 79)" }}>Cover
                                        level</span></p>
                                </div>
                                <p>
                                    <div data-typo-variant="paragraph">
                                        <p data-typo-variant="footer"><span style={{ color: "rgb(51, 51, 51)" }}>£{policy.coverLevel}</span></p>
                                    </div>
                                </p>
                            </li>
                            <li>
                                <div data-typo-variant="paragraph">
                                    <p data-typo-variant="paragraph"><span
                                        style={{ color: "rgb(21, 26, 79)" }}>Type of cover</span></p>
                                </div>
                                <p>
                                    <div data-typo-variant="paragraph">
                                        <p data-typo-variant="footer"><span style={{ color: "rgb(51, 51, 51)" }}>{policy.typeOfCover}</span>
                                        </p>
                                    </div>
                                </p>
                            </li>
                        </ul>
                        <p data-typo-variant="paragraph">Is there anything you would
                            like to change from the above? <a href="/quote/tools/86f30b3922ff">edit</a></p>
                    </div>
                </div>
                <div>
                    <div className="flex-amount">
                        <h3 color="headingColor" data-typo-variant="subheading2">Annual payment</h3>
                        <p color="headingColor" data-typo-variant="paragraphLarge">£{policy.annualPayment}</p>
                    </div>
                    <hr />
                </div>
                <div>
                    <div className="flex-amount">
                        <h3 color="headingColor" data-typo-variant="paragraph">Excess</h3>
                        <p data-typo-variant="paragraph">£100.00
                        </p>
                    </div>
                    <hr />
                    <p data-typo-variant="footer">(Excess figure will only be deducted
                        from a claim settlement payment)</p>
                </div>
                <div>
                    <div>
                        <div aria-label="Form section">
                            <div>
                                <div>
                                    <div>Enter discount
                                        code
                                        <div value="" data-dashlane-rid="e50b0fbe7583d355" data-form-type="other"></div>
                                        <div className="styles__Wrapper-fvBDTY dvAuLF"><input  type="text" className=""
                                            onChange={(e) => setDiscount(e.target.value)} data-dashlane-rid="e50b0fbe7583d355" data-form-type="other" />
                                        </div>
                                    </div>
                                    <div className="actions-buttons">
                                        <button mode="primary" className="btn btn-secondary" type="button" role="button" onClick={()=>{applyDiscount()}}
                                            data-dashlane-rid="c03a0da33f3eb309"
                                            data-form-type="other"><span>Apply</span></button>
                                        <button mode="primary" className="btn btn-primary" type="button" role="button" onClick={(e)=>proceed(e)}
                                            data-dashlane-rid="c03a0da33f3eb309"
                                            data-form-type="other"><span>Continue</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p color="headingColor" data-typo-variant="paragraph">Payment schedule</p>
                    <hr />
                    <p data-typo-variant="footer">Your premium includes Insurance
                        premium tax (IPT) at 12%</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Payment date</th>
                                <th>Amount due</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>19 Dec 2022</td>
                                <td>£{policy.total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <ul></ul>
                </div>
                <ul width="calc(100% + 2rem)" className="actions-buttons">
                    <li><a href="https://cdn.sanity.io/files/dgokjyq3/production/7c1a0bc2242cec192ddd81a1352df7f7c1a2ed45.pdf"
                        download="">Policy
                        Summary</a></li>
                    <li><a href="https://cdn.sanity.io/files/dgokjyq3/production/f9cf78e5cb38481a816d0937a4aebdf5c85af227.pdf"
                        download="">Policy
                        Wording</a></li>
                </ul>


            </div>)
            }

        </div>
    )

}


export default MainScreen;