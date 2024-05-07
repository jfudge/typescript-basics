"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const courses_2 = require("./courses");
let enrolledEvents = (Course | StudyGroup)[] = [];
function searchEvents(options) {
    const events = options.eventType === 'courses' ? courses_1.default : courses_2.default;
    events.filter((event) => {
        if (typeof options.query === 'number') {
            return event.id === options.query;
        }
        if (typeof options.query === 'string') {
            return event.keywords.includes(options.query);
        }
    });
}
function enroll(event) {
    enrolledEvents = [...enrolledEvents, event];
}
const searchResults = searchEvents({ query: 'art', eventType: 'courses' });
enroll(searchResults[0]);
console.log(enrolledEvents);
