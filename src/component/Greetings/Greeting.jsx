import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../../redux/greetings/greeting';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const greetings = useSelector((state) => state.greetings);

  return (
    <div>
      <h1>Greeting</h1>
      <p key={greetings.id}>
        {greetings.message}
      </p>
    </div>
  );
}

export default Greeting;
