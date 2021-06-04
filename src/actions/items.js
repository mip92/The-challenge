export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items,
        filteredItems:items.filter(i=>i.parent_id===0)
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                //console.log(items)
                dispatch(itemsFetchDataSuccess(items))});
    };
}
