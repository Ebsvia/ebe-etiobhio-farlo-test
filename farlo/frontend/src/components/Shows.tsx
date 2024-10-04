import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shows.css";

// Define types for the show data
interface Show {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  see_tickets_url_infos: { url: string }[];
}

const Shows: React.FC = () => {
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    // Fetch shows data from API
    axios
      .get<Show[]>("http://localhost:5001/api/shows")
      .then((response) => setShows(response.data))
      .catch((error) => console.error("Error fetching shows:", error));
  }, []);

  const getBookingLink = (ticketInfos: { url: string }[]) => {
    // Check if the tickets are available, and return the correct link
    if (ticketInfos.length === 0) return null;

    const preferredLink = ticketInfos.find((info) =>
      info.url.includes("tktsonline.seetickets.com")
    );
    if (preferredLink) return preferredLink.url;

    return (
      ticketInfos.find((info) =>
        info.url.includes("officiallondontheatre.seetickets.com")
      )?.url || null
    );
  };

  return (
    <>
      <div className="header">
        {" "}
        <h1>Today's Deals</h1>{" "}
      </div>

      <div className="shows-container">
        {shows.map((show) => {
          const bookingLink = getBookingLink(show.see_tickets_url_infos);
          const isSoldOut = !bookingLink;

          return (
            <div
              key={show.id}
              className={`show-tile ${isSoldOut ? "sold-out" : ""}`}
            >
              <img src={show.image} alt={show.title} className="show-image" />
              <h2>{show.title}</h2>

              {isSoldOut ? (
                <p className="sold-out-text">SOLD OUT</p>
              ) : (
                <>
                  <h3>About the Show</h3>
                  <a href={bookingLink} className="book-now-button">
                    BOOK NOW
                  </a>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shows;
