import {FILTER_DATE_RANGE, FILTER_DATE_SELECT} from "../constants";

const defaultFilter = {
    dateRange:
        {
            from: null,
             to: null
        },
    selected: []
};

export default (filters =  defaultFilter, action) => {
    const {payload, type} = action;

    switch (type) {
        case FILTER_DATE_RANGE:
            return {...filters, dateRange: payload.range};
    }

    switch (type) {
        case FILTER_DATE_SELECT:
            return {...filters, selected: payload.selected};
    }

    return filters;
}