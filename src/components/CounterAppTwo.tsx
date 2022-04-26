import React, { useState, useEffect } from "react";
import "@trutoo/event-bus";
import "./CounterAppTwo.css";
import { ChannelEvent } from "@trutoo/event-bus/dist/event-bus";

const Counter = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    function handleSubscribe(countEvent: ChannelEvent<number>) {
      setCount(countEvent.payload!);
    }
    eventBus.register("count:set", { type: "number" });
    const sub = eventBus.subscribe<number>("count:set", handleSubscribe);
    return function cleanup() {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div className="CounterAppTwo">
      <p>Your click count : {count} </p>
      <button onClick={() => eventBus.publish("count:set", count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
