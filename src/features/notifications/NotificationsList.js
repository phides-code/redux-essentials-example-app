import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectAllNotifications } from './notificationsSlice';

export default NotificationsList = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(selectAllNotifications);
};
