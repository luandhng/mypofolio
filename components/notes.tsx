"use client";

import { useNotesDataStore } from "@/stores/notesDataStore";
import { useSelectedTopicStore } from "@/stores/selectedTopicStore";

export const Notes = () => {
  const { selectedTopic, setSelectedTopic } = useSelectedTopicStore();
  const { data, updateTopic, updateNote } = useNotesDataStore();

  return (
    <div className="col-span-10 h-full ">
      {data?.map(
        (item: any, index: number) =>
          item.topic === selectedTopic && (
            <div key={index} className="flex flex-col h-full">
              <input
                onChange={(e) => {
                  updateTopic(item.this_topic, e.target.value);
                  setSelectedTopic(e.target.value);
                }}
                defaultValue={item.topic}
                className=" p-3 border-b border-neutral-400 font-semibold"
              ></input>

              <textarea
                onChange={(e) => {
                  updateNote(item.this_topic, e.target.value);
                }}
                className="p-3 flex-1 h-full focus:outline-none"
                defaultValue={item.note}
              ></textarea>
            </div>
          )
      )}
    </div>
  );
};
