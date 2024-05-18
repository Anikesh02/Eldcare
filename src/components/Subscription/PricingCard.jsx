import "./PricingCardStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3 className="heading">----Basic----</h3>
                <span className="bar">Free Plan</span>
                <p className="btc">₹ 0</p>
                <p>Online Appointment Booking</p>
                <p><s>24/7 priority support for urgent issues</s></p>
                <p><s>Qualified caregivers who can assist them with various tasks</s></p>
                <p><s>In-app messaging and communication tools for coordinating care among family members</s></p>
                <p><s>Priority in Appointment Queue</s></p>
                <p>Add maximum upto 10 contacts</p>
                <button className="button">Current</button>
            </div>

            <div className="card">
                <h3 className="heading">----Gold⭐----</h3>
                <span className="bar">Monthly Plan</span>
                <p className="btc">₹ 500</p>
                <p>Online Appointment Booking</p>
                <p>24/7 priority support for urgent issues.</p>
                <p>Qualified caregivers who can assist them with various tasks</p>
                <p>In-app messaging and communication tools for coordinating care among family members</p>
                <p><s>Priority in Appointment Queue</s></p>
                <p>Add unlimited contacts.</p>
                <button className="button"><Link to="https://buy.stripe.com/test_6oE29d91y3X4e0o144">Purchase Now</Link></button>
            </div>

            <div className="card">
                <h3 className="heading text-[22px]">----Diamond💎----</h3>
                <span className="bar">Yearly Plan</span>
                <p className="btc">₹ 3000</p>
                <p>Online Appointment Booking</p>
                <p>24/7 priority support for urgent issues.</p>
                <p>Qualified caregivers who can assist them with various tasks</p>
                <p>In-app messaging and communication tools for coordinating care among family members</p>
                <p>Priority in Appointment Queue</p>
                <p>Add unlimited contacts.</p>
                <button className="button"><Link to="https://buy.stripe.com/test_6oE29d91y3X4e0o144" >Purchase Now</Link></button>
            </div>
        </div>
    </div>
  )
}

export default PricingCard