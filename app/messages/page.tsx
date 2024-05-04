import { CornerDownLeft, Mic, Paperclip, Search, Filter } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Textarea } from "@/components/ui/textarea";
import LayoutAuthenticated from "@/components/layouts/layout-authenticated";

export default function Messages() {
  return (
    <LayoutAuthenticated>
      <div className="grid h-screen w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 rounded-lg">
        {/* Left Column for My Messages */}
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">My Messages</h2>
            <Badge variant="outline">2 New</Badge>
          </div>

          {/* Search Input */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Search Messages..."
              className="rounded-lg"
            />
            <Button variant="ghost" size="icon">
              <Search />
            </Button>
          </div>

          {/* Toggle Filter Buttons */}
          <ToggleGroup
            className="flex gap-2"
            aria-label="Filter Messages"
            type="single"
          >
            <ToggleGroupItem value="all" className="rounded-lg">
              All
            </ToggleGroupItem>
            <ToggleGroupItem value="unread" className="rounded-lg">
              Unread
            </ToggleGroupItem>
            <ToggleGroupItem value="important" className="rounded-lg">
              Important
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Space for Conversations */}
          <div className="flex-1 flex flex-col gap-2 overflow-auto">
            {/* Hoverable Conversations */}
            <div className="p-3 rounded-lg bg-white shadow-sm hover:bg-gray-200 transition duration-200 ease-in-out cursor-pointer">
              <h3 className="text-md font-medium">Client A</h3>
              <p className="text-sm text-muted-foreground">
                Last message: &quot;Looking forward to our meeting...&quot;
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white shadow-sm hover:bg-gray-200 transition duration-200 ease-in-out cursor-pointer">
              <h3 className="text-md font-medium">Client B</h3>
              <p className="text-sm text-muted-foreground">
                Last message: &quot;Please find the attached...&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Main Message Section */}
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 ml-4">
          <Badge variant="outline" className="absolute right-3 top-3">
            Output
          </Badge>
          <div className="flex-1" />
          <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center p-3 pt-0">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Paperclip className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Mic className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button
                type="submit"
                size="sm"
                className="ml-auto gap-1.5 bg-yellow-400 text-black hover:bg-yellow-300"
              >
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </LayoutAuthenticated>
  );
}
