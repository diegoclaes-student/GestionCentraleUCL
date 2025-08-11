from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Set


@dataclass
class Role:
    """Represent a role within the association."""

    name: str
    permissions: Set[str] = field(default_factory=set)


@dataclass
class Member:
    """Store member information.

    The "consent" flag is used to demonstrate GDPR compliance.
    """

    id: int
    name: str
    email: str
    consent: bool = False
    roles: Set[str] = field(default_factory=set)
    groups: Set[str] = field(default_factory=set)


@dataclass
class Event:
    """Basic event representation."""

    title: str
    date: datetime
    description: str = ""
    attendees: List[int] = field(default_factory=list)
