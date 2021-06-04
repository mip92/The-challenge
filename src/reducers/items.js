export function items(state = {}, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {items: action.items, filteredItems:action.filteredItems};

        default:
            return state;
    }
}
