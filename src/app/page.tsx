"use client";
import React, { useState } from "react";
import { useChat } from "ai/react";
const Chatbot: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [pdfText, setPdfText] = useState<string | null>(null);

  // const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("pdf", file);

  //     try {
  //       const response = await axios.post(
  //         "http://localhost:3000/api/upload-pdf",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //       setPdfText(response.data.text);
  //       setChatMessages([
  //         ...chatMessages,
  //         {
  //           sender: "AI",
  //           text: "PDF uploaded successfully. You can now ask questions about it.",
  //         },
  //       ]);
  //     } catch (error) {
  //       console.error("Error uploading PDF:", error);
  //       setChatMessages([
  //         ...chatMessages,
  //         { sender: "AI", text: "Failed to upload PDF. Please try again." },
  //       ]);
  //     }
  //   }
  // };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-center text-lg tracking-tight text-black">
            Your Own Chatbot
          </h2>
        </div>

        <div className="overflow-y-auto pr-4 h-[474px] flex flex-col">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-3 my-4 text-gray-600 text-sm">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                <div className="rounded-full bg-gray-100 border p-1">
                  {msg.role === "user" ? (
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  ) : (
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  )}
                </div>
              </span>
              <p className="leading-relaxed">
                <span className="block font-bold text-gray-700">
                  {msg.role}
                </span>
                {msg.content}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center pt-0 space-x-2">
          <form
            className="flex items-center justify-center w-full space-x-2"
            encType="multipart/form-data"
            method="POST"
            onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label className="flex items-center justify-center text-xl font-medium text-white bg-black h-8 w-8 cursor-pointer rounded-full">
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  // onChange={handleFileChange}
                />
                +
              </label>
            </div>
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-900"
              placeholder="Type your message"
              value={input}
              onChange={handleInputChange}
            />
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-black hover:bg-gray-800 h-10 px-4 py-2"
              type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
