"""Core management logic for the student association.

The goal is to provide a light‑weight in‑memory model of the features
highlighted in ``instruction.pdf``.  It is not a full application, but a
reference implementation that could be extended with a database and web
interfaces.
"""
from __future__ import annotations

from datetime import datetime
from typing import Dict, Optional

from .models import Event, Member, Role


class Association:
    """Container for members, roles and events."""

    def __init__(self) -> None:
        self.members: Dict[int, Member] = {}
        self.roles: Dict[str, Role] = {}
        self.events: Dict[str, Event] = {}

    # -- Member management -------------------------------------------------
    def add_member(self, member: Member) -> None:
        if member.id in self.members:
            raise ValueError("Member already exists")
        self.members[member.id] = member

    def assign_role(self, member_id: int, role_name: str) -> None:
        if member_id not in self.members:
            raise KeyError("Unknown member")
        if role_name not in self.roles:
            raise KeyError("Unknown role")
        self.members[member_id].roles.add(role_name)

    # -- Role management ---------------------------------------------------
    def add_role(self, role: Role) -> None:
        self.roles[role.name] = role

    def has_permission(self, member_id: int, perm: str) -> bool:
        member = self.members.get(member_id)
        if not member:
            return False
        for role_name in member.roles:
            role = self.roles.get(role_name)
            if role and perm in role.permissions:
                return True
        return False

    # -- Event management --------------------------------------------------
    def create_event(self, event: Event) -> None:
        if event.title in self.events:
            raise ValueError("Event already exists")
        self.events[event.title] = event

    def register_attendance(self, event_title: str, member_id: int) -> None:
        if event_title not in self.events:
            raise KeyError("Unknown event")
        if member_id not in self.members:
            raise KeyError("Unknown member")
        self.events[event_title].attendees.append(member_id)

    def upcoming_events(self) -> Dict[str, Event]:
        """Return events that are in the future."""
        return {
            title: event
            for title, event in self.events.items()
            if event.date >= datetime.now()
        }
