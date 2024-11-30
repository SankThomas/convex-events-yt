"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateEvent() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");

  const router = useRouter();

  const mutation = useMutation(api.events.createEvent);

  function handleCreateEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation({
      name,
      date,
      description,
      location,
      organizer,
    });

    toast("New event has been created", {
      description: "You have successfully created a new event",
    });
    router.push("/");
  }

  return (
    <div className="mx-auto mt-10 max-w-3xl px-2">
      <h2 className="mb-6 text-xl font-bold">Create Event</h2>
      <form onSubmit={handleCreateEvent} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <article>
            <Label className="mb-2 inline-block" htmlFor="event-name">
              Event name
            </Label>
            <Input
              id="event-name"
              placeholder="Event name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </article>
          <article>
            <Label className="mb-2 inline-block" htmlFor="event-date">
              Event date
            </Label>
            <Input
              id="event-date"
              placeholder="Event date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </article>
        </div>

        <div>
          <Label className="mb-2 inline-block" htmlFor="event-description">
            Event description
          </Label>
          <Textarea
            id="event-description"
            placeholder="Event description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <article>
            <Label className="mb-2 inline-block" htmlFor="event-location">
              Event location
            </Label>
            <Input
              id="event-location"
              placeholder="Event location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </article>
          <article>
            <Label className="mb-2 inline-block" htmlFor="event-organizer">
              Event organizer
            </Label>
            <Input
              id="event-organizer"
              placeholder="Event organizer"
              required
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
            />
          </article>
        </div>

        <Button variant="secondary" type="submit">
          Create event
        </Button>
      </form>
    </div>
  );
}
