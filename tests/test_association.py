from datetime import datetime, timedelta

from association import Association, Event, Member, Role


def test_member_role_and_permission():
    assoc = Association()
    assoc.add_role(Role(name="president", permissions={"approve_budget"}))
    assoc.add_member(Member(id=1, name="Alice", email="a@example.com", consent=True))

    assoc.assign_role(1, "president")
    assert assoc.has_permission(1, "approve_budget")


def test_event_registration_and_upcoming():
    assoc = Association()
    assoc.add_member(Member(id=2, name="Bob", email="b@example.com"))

    future_date = datetime.now() + timedelta(days=1)
    past_date = datetime.now() - timedelta(days=1)

    assoc.create_event(Event(title="Future", date=future_date))
    assoc.create_event(Event(title="Past", date=past_date))

    assoc.register_attendance("Future", 2)
    assert assoc.events["Future"].attendees == [2]

    upcoming = assoc.upcoming_events()
    assert "Future" in upcoming and "Past" not in upcoming
