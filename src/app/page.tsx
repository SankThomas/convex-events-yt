"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  const events = useQuery(api.events.get);
  const mutation = useMutation(api.events.deleteEvent);

  return (
    <div className="mx-auto max-w-3xl space-y-4 px-2 py-20">
      {events?.map((event) => (
        <Card key={event._id} className="group">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <CardTitle>{event.name}</CardTitle>
              <p>{event.organizer}</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <CardDescription>{event.description}</CardDescription>
            <CardDescription>
              {event.location} &middot; {event.date}
            </CardDescription>

            <Button
              variant="destructive"
              size="sm"
              className="ml-auto block opacity-0 transition group-hover:opacity-100"
              onClick={function handleDeleteEvent() {
                mutation({ id: event._id });
                toast("Event deleted", {
                  description: "You have successfully deleted the event",
                });
              }}
            >
              <Trash />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
