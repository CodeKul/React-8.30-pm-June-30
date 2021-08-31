function ListComponent({
    label,
    items = [],
    collapsed,
    toggle,
    limit,
    total,
    renderListItem,
    renderCollapser,
    renderExpander,
  }) {
    let expandCollapse
  
    if (total > limit) {
      if (collapsed) {
        expandCollapse = renderExpander ? (
          renderExpander({ collapsed, toggle })
        ) : (
          <button type="button" onClick={toggle}>
            Expand
          </button>
        )
      } else {
        expandCollapse = renderCollapser ? (
          renderCollapser({ collapsed, toggle })
        ) : (
          <button type="button" onClick={toggle}>
            Collapse
          </button>
        )
      }
    }
  
    return (
      <ul>
        <p>{label}</p>
        {items.map((member) =>
          renderListItem ? (
            <React.Fragment key={member}>
              {renderListItem({ collapsed, toggle, member })}
            </React.Fragment>
          ) : (
            <ListItem key={member}>{member}</ListItem>
          ),
        )}
        {total > limit && (
          <ListItem className="expand">{expandCollapse}</ListItem>
        )}
      </ul>
    )
  }
  
  function ListItem({ children, ...rest }) {
    return <li {...rest}>{children}</li>
  }
  
  function List({
    component: RootComponent = ListRoot,
    collapsed,
    toggle,
    header,
    label,
    items = [],
    limit = 3,
    renderHeader,
    renderList,
    renderListItem,
    renderCollapser,
    renderExpander,
  }) {
    return (
      <RootComponent>
        {renderHeader ? (
          renderHeader()
        ) : header !== null ? (
          <ListHeader>{header}</ListHeader>
        ) : null}
        {renderList ? (
          renderList()
        ) : (
          <ListComponent
            label={label}
            items={
              collapsed && items.length > limit ? items.slice(0, limit) : items
            }
            collapsed={collapsed}
            toggle={toggle}
            limit={limit}
            total={items.length}
            renderListItem={renderListItem}
            renderCollapser={renderCollapser}
            renderExpander={renderExpander}
          />
        )}
      </RootComponent>
    )
  }