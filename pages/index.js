import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
  };
  const response = await fetch(
    "https://nextjs-course-caeb6-default-rtdb.firebaseio.com/events"
  );
  const data = await response.json();
}

export default HomePage;
