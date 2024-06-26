import courses from "./courses";
import studyGroups from "./courses";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number;
  eventType: 'courses' | 'groups';
};

let enrolledEvents = (Course | StudyGroup)[] = []

function searchEvents(options: SearchEventsOptions) {
  const events: (Course | StudyGroup)[] =
    options.eventType === 'courses' ? courses : studyGroups;

  events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === 'number') {
      return event.id === options.query;
    }

    if (typeof options.query === 'string') {
      return event.keywords.includes(options.query);
    }
  })
}

function enroll(event: Course | StudyGroup) {
  enrolledEvents = [...enrolledEvents, event];
}

const searchResults = searchEvents({ query: 'art', eventType: 'courses'})

enroll(searchResults[0]);

console.log(enrolledEvents)
