import React from "react";

import course3 from "../components/course3.png";

function ListRoot({ children, ...rest }) {
  return <div style={{display: "inline"}} {...rest}>{children}</div>;
}

function ListHeader({ children }) {
  return <h5>{children}</h5>;
}



// function CardComponent({
//   items = [],
//   members,
//   toggle,
//   collapsed,
//   header,
//   label,
//   renderList,
//   total,
//   renderListItem,
//   renderCollapser,
//   renderExpander,
//   sublabel,
//   limit = 0,
// }) {
//   let expandCollapse;

//   if (collapsed) {
//     expandCollapse = renderExpander ? (
//       renderExpander({ collapsed, toggle })
//     ) : (
//       <button className="btn btn-primary">Expand</button>
//     );
//   } else {
//     expandCollapse = renderCollapser ? (
//       renderCollapser({ collapsed, toggle })
//     ) : (
//       <button className="btn btn-primary">Collapse</button>
//     );
//   }

//   // const [collapsed, setCollapsed] = React.useState(members.length > 3)

//   //condition for how much members are allowed and it will display ony that much members
//   // const constrainedMembers =  collapsed ? members.slice(0,3): members

//   // function toggle() {
//   //     setCollapsed((prevValue) => !prevValue)
//   // }

//   return (
//     <div className="card border" style={{ width: "300px" }}>
//       <img className="card-img-top" src={course3} alt="" />

//       <div className="card-body">
//         {/* <h5>{label} : <em>{labelValue}</em></h5> */}
//         {/* <h5>Group : <em>{groupName}</em></h5> */}
//         <ul>
//           <p>{label}</p>

//           {items.map((member) => {
//             renderListItem ? (
//               <React.Fragment key={member}>
//                 {renderListItem({ collapsed, toggle, member })}
//               </React.Fragment>
//             ) : (
//               <ListItem key={member}>{member}</ListItem>
//             );
//           })}

//           {total > limit && (
//             <ListItem className="expand">{expandCollapse}</ListItem>
//           )}

//           {/* {members.length > 3 && (
//             <li className="expand">
//               <button
//                 type="expand"
//                 className="btn btn-primary"
//                 onClick={toggle}
//               >
//                 Expand
//               </button>
//             </li>
//           )} */}

//           {/* <li>Sanket</li>
//                     <li>Swati</li>
//                     <li>Vaishnavi</li>
//                     <li>Shubham</li> */}
//         </ul>
//       </div>
//     </div>

//     // <div>
//     //     {props.children}
//     // </div>
//   );
// }


function ListComponent({label, items=[], collapsed, toggle, limit, total}) {
  return (
    <ul>
      <p>{label}</p>
      {items.map((members) => {
        return(
          <ListItem key={members}>{members}</ListItem>
        )
      })
      }


      {total > limit && (
        <ListItem className= "expand">
          <button type="button" onClick={toggle}>
            {collapsed ? 'Expand' : 'Collapse'}
          </button>

        </ListItem>
      )}
    </ul>
  )
}

function ListItem({ children, ...rest }) {
  return <li {...rest}>{children}</li>;
}

function List({
  component: RootComponent = ListRoot,
  ListHeader,
  label,
  header,
  items = [],
  limit = 3,
  collapsed,
  toggle,
  renderCollapser,
  renderExpander,
  renderListItem,
  renderList,
  renderHeader
}) {
  return (
    <RootComponent>
        {renderHeader ? (
            renderHeader()
        ): header !== null ? (
            <ListHeader>
                {header}
            </ListHeader>
        ) : null}


        {renderList ? (renderList()) : (
            <ListComponent 
            label={label}
             items= {collapsed && items.length > limit ? items.slice(0,limit) : items}
             collapsed={collapsed}
             toggle={toggle}
             total={items.length}
             renderListItem={renderListItem}
             renderCollapser={renderCollapser}
             renderExpander={renderExpander}/>
            
            
        )}
    </RootComponent>
  );
}


export default List;