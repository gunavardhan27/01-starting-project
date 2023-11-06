import { useState } from "react"
export default function UserInput({data,onUpdate}){
   
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" onChange={(event)=>onUpdate('initialInvestment',event.target.value)} value={data.initialInvestment}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" onChange={(event)=>onUpdate('annualInvestment',event.target.value)} value={data.annualInvestment}required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" onChange={(event)=>onUpdate('expectedReturn',event.target.value)} value={data.expectedReturn} required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" onChange={(event)=>onUpdate('duration',event.target.value)} value={data.duration}required/>
                </p>
            </div>
        </section>
    )
}