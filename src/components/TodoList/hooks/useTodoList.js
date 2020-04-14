import { useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../../context/GlobalProvider";

const propTypes = {
    initValue: PropTypes.string,
};
const defaultProps = {
    initValue: "",
};

const useTodoList = (initValue) => {
    const { state, dispatch } = useContext(GlobalContext);

    const onClickHandler = useCallback(
        ({ event, idx }) => {
            if (event.detail || event.key === 13) {
                dispatch({
                    type: "TICK_TEXT",
                    idx,
                });
            }
        },
        [dispatch]
    );

    return {
        onClickHandler,
        state,
    };
};

useTodoList.displayName = "useTodoList";
useTodoList.defaultProps = defaultProps;
useTodoList.propTypes = propTypes;

export default useTodoList;
