import React from 'react';
import { useDispatch } from 'react-redux';
import withReducer from '../../../store/withReducer';
const HomeScreen = (props) => {
    const dispatch = useDispatch();
    return <div>
        hello home screen
    </div>
}
export default HomeScreen;