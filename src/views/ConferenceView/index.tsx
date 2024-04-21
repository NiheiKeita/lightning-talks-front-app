// import React from "react";

// export const ConferenceView = (() => {
//   return (
//     <div className="bg-gray-100">
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold text-center mb-8">カンファレンス一覧</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">カンファレンス名</h2>
//             <p className="text-gray-700 mb-1">開催日時: 2024年4月14日 10:00</p>
//             <p className="text-gray-700 mb-1">開催場所: 東京</p>
//             <p className="text-gray-700">終了時間: 2024年4月14日 16:00</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold mb-2">カンファレンス名</h2>
//             <p className="text-gray-700 mb-1">開催日時: 2024年4月15日 10:00</p>
//             <p className="text-gray-700 mb-1">開催場所: 大阪</p>
//             <p className="text-gray-700">終了時間: 2024年4月15日 16:00</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });
type Conference = {
  name: string,
  date: string,
  location: string,
  endTime: string
}
const conferences: Array<Conference> = [
  {
    name: "カンファレンスA",
    date: "2024年4月14日 10:00",
    location: "東京",
    endTime: "2024年4月14日 16:00",
  },
  {
    name: "カンファレンスB",
    date: "2024年4月15日 10:00",
    location: "大阪",
    endTime: "2024年4月15日 16:00",
  },
];

const ConferenceCard = ({ name, date, location, endTime }: Conference) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:shadow-xl hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h2>
      <div className="flex items-center mb-2">
        <span className="material-icons text-indigo-600 mr-2">event</span>
        <p className="text-gray-700">開催日時: {date}</p>
      </div>
      <div className="flex items-center mb-2">
        <span className="material-icons text-indigo-600 mr-2">place</span>
        <p className="text-gray-700">開催場所: {location}</p>
      </div>
      <div className="flex items-center">
        <span className="material-icons text-indigo-600 mr-2">schedule</span>
        <p className="text-gray-700">終了時間: {endTime}</p>
      </div>
    </div>
  );
};

export const ConferenceView = (() => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">カンファレンス一覧</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {conferences.map((conference, index) => (
          <ConferenceCard
            key={index}
            name={conference.name}
            date={conference.date}
            location={conference.location}
            endTime={conference.endTime}
          />
        ))}
      </div>
    </div>
  );
});

