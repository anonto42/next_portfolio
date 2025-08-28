"use client";
import React, { useState } from "react";

// Message type
type MessageType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
};

// Replay type
type ReplayType = {
  id: number;
  messageId: number;
  content: string;
};

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"messages" | "replays">("messages");

  const [messages, setMessages] = useState<MessageType[]>([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", message: "Hello!" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210", message: "Hi there!" },
  ]);

  const [replays, setReplays] = useState<ReplayType[]>([]);

  const [selectedMessage, setSelectedMessage] = useState<MessageType | null>(null);
  const [replayContent, setReplayContent] = useState("");

  // Delete message
  const handleDelete = (id: number) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  // Open replay modal
  const handleReplay = (message: MessageType) => {
    setSelectedMessage(message);
    setReplayContent("");
  };

  // Send replay
  const handleSendReplay = () => {
    if (selectedMessage && replayContent.trim() !== "") {
      setReplays((prev) => [
        ...prev,
        { id: Date.now(), messageId: selectedMessage.id, content: replayContent },
      ]);
      setSelectedMessage(null);
      setReplayContent("");
    }
  };

  return (
    <div className="min-h-screen p-6 text-black">
      {/* Tabs */}
      <div className="flex mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "messages" ? "bg-blue-600 text-white" : "bg-white border"}`}
          onClick={() => setActiveTab("messages")}
        >
          Messages
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "replays" ? "bg-blue-600 text-white" : "bg-white border"}`}
          onClick={() => setActiveTab("replays")}
        >
          Replays
        </button>
      </div>

      {/* Messages Tab */}
      {activeTab === "messages" && (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-start">
              <div>
                <p><strong>Name:</strong> {msg.name}</p>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Phone:</strong> {msg.phone}</p>
                <p><strong>Message:</strong> {msg.message}</p>
              </div>
              <div className="flex flex-col space-y-2 ml-4">
                <button
                  onClick={() => handleReplay(msg)}
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                >
                  Replay
                </button>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {messages.length === 0 && <p>No messages available.</p>}
        </div>
      )}

      {/* Replays Tab */}
      {activeTab === "replays" && (
        <div className="space-y-4">
          {replays.map((rep) => {
            const originalMessage = messages.find((msg) => msg.id === rep.messageId);
            return (
              <div key={rep.id} className="bg-white p-4 rounded-lg shadow">
                <p><strong>To:</strong> {originalMessage?.name || "Unknown"}</p>
                <p><strong>Replay:</strong> {rep.content}</p>
              </div>
            );
          })}
          {replays.length === 0 && <p>No replays yet.</p>}
        </div>
      )}

      {/* Replay Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Replay to {selectedMessage.name}</h2>
            <textarea
              value={replayContent}
              onChange={(e) => setReplayContent(e.target.value)}
              placeholder="Write your reply..."
              className="w-full p-2 border rounded-lg min-h-[100px] mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setSelectedMessage(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSendReplay}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
