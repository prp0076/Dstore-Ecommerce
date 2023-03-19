import "./Footer.scss";
import React from "react";
import { FaLocationArrow,FaMobileAlt,FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio qui sapiente quam? Magni libero delectus aperiam nisi! Beatae veritatis modi non qui unde expedita ut, itaque consequatur. Libero, quo dolore.</div>
            </div>
            <div className="col">
            <div className="title">Contact</div> 

            <div className="c-item">
            <FaLocationArrow/>
            <div className="text">Dharamsinh Desai Marg, Chhani Jakat Naka ,Vadodara,Gujarat, 390002, India</div>
            </div>

            <div className="c-item">
            <FaMobileAlt/>
            <div className="text">Phone : 8471 272 0261</div>
            </div>

            <div className="c-item">
            <FaEnvelope/>
            <div className="text">Email : dstore@bussinessmail.com</div>
            </div>

            </div>
            <div className="col">
            <div className="title">Categories</div>
            <div className="text">Headphones</div>
            <div className="text">Smart Watches</div>
            <div className="text">Bluetooth Speaker</div>
            <div className="text">Wireless Earbuds</div>
            <div className="text">Home Theater</div>
            <div className="text">Projectors</div>
            </div>
            <div className="col">
            <div className="title">Pages</div>
            <div className="text">Home</div>
            <div className="text">About</div>
            <div className="text">Privacy Policy</div>
            <div className="text">Returns</div>
            <div className="text">Terms & Condition</div>
            <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                DSTORE 2023 CREATED BY PUSHPRAJ. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
