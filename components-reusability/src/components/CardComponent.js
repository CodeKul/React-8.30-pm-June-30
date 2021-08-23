import React from 'react'

import course3 from "../components/course3.png"


function CardRoot({children, ...rest}) {
    return <div {...rest}>{children}</div>
}


function CardHeader ({children}) {
    return <h5>{children}</h5>
}

export default function CardComponent({ items= [], label, labelValue, sublabel, limit = 0}) {

    const [collapsed, setCollapsed] = React.useState(members.length > 3)


    //condition for how much members are allowed and it will display ony that much members
    const constrainedMembers =  collapsed ? members.slice(0,3): members

    function toggle() {
        setCollapsed((prevValue) => !prevValue)
    }
    return (
        <div className="card border" style={{width: "300px"}}>
            <img className="card-img-top" src={course3} alt="" />

            <div className="card-body">

                <h5>{label} : <em>{labelValue}</em></h5>
                {/* <h5>Group : <em>{groupName}</em></h5> */}
                <ul>
                    <p>{sublabel}</p>

                    {constrainedMembers.map((member) => {
                        return(
                        <li key={member}>{member}</li>
                        )})}


                        {members.length > 3 && (
                            <li className="expand">
                                <button type="expand" className="btn btn-primary" onClick={toggle}>Expand</button>
                            </li>
                        )}

                    {/* <li>Sanket</li>
                    <li>Swati</li>
                    <li>Vaishnavi</li>
                    <li>Shubham</li> */}
                </ul>
            </div>
        </div>

        // <div>
        //     {props.children}
        // </div>
    )
}


function List ({CardHeader, label, members =[], limit}) {
    return(
        <CardRoot>
            <CardHeader>

            </CardHeader>

            <CardComponent>

            </CardComponent>
        </CardRoot>
    )
}
